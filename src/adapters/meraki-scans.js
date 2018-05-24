// @flow

import { HTTPError } from 'got/errors';
import cheerio from 'cheerio';
import moment from 'moment-timezone';
import pmap from 'p-map';
import errors from '../errors';
import utils, { invariant } from '../utils';

import type { SiteAdapter, ChapterMetadata } from '../types';

function getPage(url, i) {
  return utils.getImageSize(url).then(({ width, height }) => ({
    id: i,
    url,
    width,
    height,
  }));
}

// Series URLs
// http://merakiscans.com/senryu-girl/
// http://merakiscans.com/ninja-shinobu-san-no-junjou/

// Reader URLs
// http://merakiscans.com/senryu-girl/2/

const MerakiScansAdapter: SiteAdapter = {
  id: 'meraki-scans',
  name: 'Meraki Scans',

  supportsUrl(url) {
    return utils.compareDomain(url, 'http://merakiscans.com/');
  },

  supportsReading() {
    return true;
  },

  parseUrl(url) {
    const matches = utils.pathMatch(url, '/:seriesSlug/:chapterSlug?(/.+)?');

    invariant(matches, new errors.InvalidUrlError(url));
    invariant(matches.seriesSlug, new errors.InvalidUrlError(url));

    const { seriesSlug, chapterSlug = null } = matches;

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    const url = ['http://merakiscans.com', seriesSlug, chapterSlug]
      .filter(Boolean)
      .join('/');

    return utils.normalizeUrl(url);
  },

  async getSeries(seriesSlug) {
    const seriesUrl = this.constructUrl(seriesSlug);

    const rss = await utils.getPage(
      `http://merakiscans.com/manga-rss/${seriesSlug}`,
    );
    const xml = cheerio.load(rss, { xmlMode: true });

    const rssTitle = xml('image > title', 'channel');
    const rssChapters = xml('item', 'channel');

    const titleMatches = /^Recent chapters of (.*?) manga$/.exec(
      rssTitle.text().trim(),
    );
    const title = titleMatches === null ? null : titleMatches[1];

    // NOTE: Meraki returns a 200 status RSS feed for all series, even when the
    // slug doesn't exist. The missing title block is a clue. If we can't parse
    // the title, chances are it was a 404.
    invariant(title, new errors.NotFoundError(seriesUrl));

    const chapters: Array<ChapterMetadata> = rssChapters.get().map(el => {
      const createdAtText = xml(el)
        .find('pubDate')
        .text();
      const chapterSlugText = xml(el)
        .find('link')
        .text()
        .trim();

      const createdAt = moment
        .tz(createdAtText, 'dddd, D MMM YYYY, HH:mm:ss', 'America/Los_Angeles')
        .unix();
      const slug = utils.extractText(/\/([\d\.]+)\/\d+\/?$/, chapterSlugText);
      const url = this.constructUrl(seriesSlug, slug);

      return { slug, number: slug, url, createdAt };
    });

    return { slug: seriesSlug, url: seriesUrl, title, chapters };
  },

  async getChapter(seriesSlug, chapterSlug) {
    const url = this.constructUrl(seriesSlug, chapterSlug);

    const html = await utils.getPage(url);
    const dom = cheerio.load(html);
    const imageUrls = dom('img', '#longWrap')
      .get()
      .map(el => dom(el).attr('src'));
    const pages = await pmap(imageUrls, getPage, { concurrency: 3 });

    return { slug: chapterSlug, url, pages };
  },
};

export default MerakiScansAdapter;
