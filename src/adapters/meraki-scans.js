// @flow

import { HTTPError } from 'got/errors';
import cheerio from 'cheerio';
import moment from 'moment-timezone';
import errors from '../errors';
import utils, { invariant } from '../utils';

import type { SiteAdapter, ChapterMetadata, PublicationStatus } from '../types';

const TZ = 'UTC';

const parseChapterTitle = (input: string): string => {
  const parts = input.split(' - ');
  return parts.pop();
};

const parseChapterCreatedAt = (input: string): number => {
  return moment.tz(input, 'MMM DD, YYYY', TZ).unix();
};

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
    const url = [this._getHost(), seriesSlug, chapterSlug]
      .filter(Boolean)
      .join('/');

    return utils.normalizeUrl(url);
  },

  _getHost() {
    return 'http://merakiscans.com';
  },

  async getSeries(seriesSlug) {
    const seriesUrl = this.constructUrl(seriesSlug);

    const html = await utils.getPage(seriesUrl);
    const dom = cheerio.load(html);

    const $infoSection = dom('.con div.mng_ifo').first();
    const $infoRows = $infoSection.find('.col-md-8 p');
    const $chapterRows = dom('ul.lst.mng_chp > li');

    const title = dom('h1.ttl')
      .text()
      .trim();
    const description = $infoRows.eq(0).text();
    const author = $infoRows
      .eq(2)
      .find('a')
      .text();
    const artist = null;
    const publicationStatus = utils.parseStatus($infoRows.eq(6).text());

    const coverImageUrl = $infoSection.find('img.cvr').attr('src');

    const chapters: ChapterMetadata[] = $chapterRows.get().map(el => {
      const $link = dom(el)
        .find('a')
        .first();

      const title = parseChapterTitle($link.attr('title'));
      const createdAt = parseChapterCreatedAt($link.find('.dte').text());
      const slug = this.parseUrl($link.attr('href')).chapterSlug;
      const chapterNumber = slug;
      // no concept of volume numbers on Meraki

      const url = this.constructUrl(seriesSlug, slug);

      return { slug, title, chapterNumber, url, createdAt };
    });

    return {
      slug: seriesSlug,
      url: seriesUrl,
      coverImageUrl,
      title,
      description,
      author,
      artist,
      publicationStatus,
      chapters,
    };
  },

  async getChapter(seriesSlug, chapterSlug) {
    const url = this.constructUrl(seriesSlug, chapterSlug);

    const html = await utils.getPage(url);
    const dom = cheerio.load(html);
    const imageUrls = dom('img', '#longWrap')
      .get()
      .map(el => dom(el).attr('src'));
    const pages = imageUrls.map((url, i) => ({ id: i, url }));

    return { slug: chapterSlug, url, pages };
  },
};

export default MerakiScansAdapter;
