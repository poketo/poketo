// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import throttle from 'p-throttle';
import errors from '../errors';
import utils, { invariant } from '../utils';

import type { SiteAdapter, ChapterMetadata, Page } from '../types';

const TZ = 'America/Los_Angeles';

function getTimestamp (rawText) {
  const text = rawText.toLowerCase();
  if (text === 'today') {
    return moment.tz(TZ).endOf('day').unix();
  } else if (text === 'yesterday') {
    return moment.tz(TZ).subtract(1, 'day').endOf('day').unix();
  }

  return moment.tz(text, 'MMM D, YYYY', 'America/Los_Angeles').unix();
}

function getChapterNumber (input: string): ?string {
  const matches = /\s+([\d\.]+)$/i.exec(input);

  if (matches === null) {
    return null;
  }

  return matches.length > 1 ? matches[1] : null;
}

const throttledGetPage = throttle(utils.getPage, 1, 600);

// http://www.mangahere.cc/manga/<series-id>/
// http://www.mangahere.cc/manga/<series-id>/<chapter-id>/1.html
// http://www.mangahere.cc/manga/urami_koi_koi_urami_koi/c038/2.html

const MangaHereAdapter: SiteAdapter = {
  id: 'manga-here',
  name: 'Manga Here',

  supportsUrl(url) {
    return /^https?:\/\/(www\.)?mangahere.(co|cc)/.test(url);
  },

  supportsReading() {
    return true;
  },

  parseUrl(url) {
    const matches = utils.pathMatch(url, '/manga/:seriesSlug/:chapterSlug(c[0-9\.]+)?(\/.+)?');

    invariant(matches, new errors.InvalidUrlError(url));
    invariant(matches.seriesSlug, new errors.InvalidUrlError(url));

    const { seriesSlug, chapterSlug = null } = matches;

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    invariant(seriesSlug, new TypeError('Series slug must be non-null'));
    return utils.normalizeUrl(`http://mangahere.cc/manga/${seriesSlug}/${chapterSlug || ''}`);
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);
    const html = await throttledGetPage(url);

    invariant(html.indexOf('page you have requested can’t be found') === -1, new errors.NotFoundError(url));

    const dom = cheerio.load(html);

    const title = dom('meta[property="og:title"]', 'head').attr('content').trim();

    const chapters: Array<ChapterMetadata> = dom('div + ul > li', '.manga_detail > .detail_list').get().map(el => {
      const href = dom(el).find('a:first-child', '.left').attr('href');
      const slug = utils.extractText(/\/(c[\d|\.]+)\/?$/, href);
      const url = this.constructUrl(seriesSlug, slug);
      const numberText = dom(el).find('.left > a').text().trim();
      const number = utils.extractText(/\s+([\d\.]+)$/i, numberText);
      const createdAt = getTimestamp(dom(el).find('.right').text().trim());

      return { slug, url, number, createdAt };
    });

    return { slug: seriesSlug, url, title, chapters };
  },

  async getChapter(seriesSlug, chapterSlug) {
    const url = this.constructUrl(seriesSlug, chapterSlug);

    const body = await utils.getPage(url);
    const dom = cheerio.load(body);

    const pageUrls = dom('select.wid60').first().find('option').get()
      .map(el => `http:${dom(el).attr('value')}`)
      .filter(url => url.indexOf('featured.html') === -1);

    // NOTE: MangaHere returns an image url for the next page, so to halve the
    // loading time from fetching every page, we just grab every other page.
    const everyOtherPageUrl = pageUrls.filter((_, i) => i % 2 === 0);

    const nestedPages = await Promise.all(everyOtherPageUrl.map(async url => {
      // NOTE: They also rate-limit requests to once every 250ms from an IP. We
      // use the throttled version here as to avoid this.
      const html = await throttledGetPage(url);
      const dom = cheerio.load(html);

      const imageUrls = dom('img').get()
        .map(el => dom(el).attr('src'))
        .filter(url => url.includes('.jpg?token='))
        .filter(Boolean)
        .map(url => {
          const id: string = utils.pathname(url).split('/').pop();
          return { id, url };
        });

      return imageUrls;
    }));

    const pages: Page[] = utils.flatten(nestedPages);

    return { slug: chapterSlug, url, pages };
  },
};

export default MangaHereAdapter;
