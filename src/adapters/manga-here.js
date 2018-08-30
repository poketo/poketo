// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import throttle from 'p-throttle';
import errors from '../errors';
import utils, { invariant } from '../utils';
import type { SiteAdapter, ChapterMetadata, Page } from '../types';

const TZ = 'America/Los_Angeles';

/**
 * An old jQuery trick to extract the content of text nodes (ie. text that isn't
 * wrapped in an HTML tag) of an element;
 */
const extractTextNodes = (cheerioElement: any) =>
  cheerioElement
    .clone()
    .children()
    .remove()
    .end()
    .text();

function extractChapterMetadata(
  html: string,
  getChapterUrl: (slug: string) => string,
): ChapterMetadata[] {
  const dom = cheerio.load(html);
  const chapterDom = dom('.manga_detail > .detail_list');
  const chapterListElements = chapterDom.find('div + ul > li').get();

  const chapterMetadata = chapterListElements.map(el => {
    const leftEl = dom(el).find('.left');
    const rightEl = dom(el).find('.right');
    const link = leftEl.find('a:first-child');

    const href = link.attr('href');
    const titleRaw = extractTextNodes(leftEl).trim();
    const title = titleRaw.length === 0 ? undefined : titleRaw;
    const slug = utils.extractText(/\/(c[\d|\.]+)\/?$/, href);
    const url = getChapterUrl(slug);

    const chapterNumberText = dom(el)
      .find('.left > a')
      .text()
      .trim();
    const chapterNumber = utils.extractText(
      /\s+([\d\.]+)$/i,
      chapterNumberText,
    );
    // NOTE: MangaHere has no notion of volumes

    const createdAt = getTimestamp(rightEl.text().trim());

    return { slug, title, url, chapterNumber, createdAt };
  });

  return chapterMetadata;
}

function getTimestamp(rawText) {
  const text = rawText.toLowerCase();
  if (text === 'today') {
    return moment
      .tz(TZ)
      .endOf('day')
      .unix();
  } else if (text === 'yesterday') {
    return moment
      .tz(TZ)
      .subtract(1, 'day')
      .endOf('day')
      .unix();
  }

  return moment.tz(text, 'MMM D, YYYY', 'America/Los_Angeles').unix();
}

function getChapterNumber(input: string): ?string {
  const matches = /\s+([\d\.]+)$/i.exec(input);

  if (matches === null) {
    return null;
  }

  return matches.length > 1 ? matches[1] : null;
}

const parseAuthor = (input: string): string => {
  return input
    .split(':')
    .pop()
    .trim();
};

const throttledGetPage = throttle(utils.getPage, 1, 600);

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
    const matches = utils.pathMatch(
      url,
      '/manga/:seriesSlug/:chapterSlug(c[0-9.]+)?(/.+)?',
    );

    invariant(matches, new errors.InvalidUrlError(url));
    invariant(matches.seriesSlug, new errors.InvalidUrlError(url));

    const { seriesSlug, chapterSlug = null } = matches;

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    invariant(
      typeof seriesSlug === 'string',
      new TypeError(`'seriesSlug' must be a string, not ${typeof seriesSlug}`),
    );

    return utils.normalizeUrl(
      `${this._getHost()}/manga/${seriesSlug}/${chapterSlug || ''}`,
    );
  },

  _getHost() {
    return `http://www.mangahere.cc`;
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);
    const html = await throttledGetPage(url);

    invariant(
      html.indexOf('page you have requested can’t be found') === -1,
      new errors.NotFoundError(url),
    );

    const dom = cheerio.load(html);

    const title = dom('meta[property="og:title"]')
      .attr('content')
      .trim();
    const description = dom('#show')
      .contents()
      .not('a')
      .text()
      .trim();

    const $infoRows = dom('ul.detail_topText > li');

    const author = parseAuthor($infoRows.eq(4).text());
    const artist = parseAuthor($infoRows.eq(5).text());
    const publicationStatus = utils.parseStatus($infoRows.eq(6).text());
    const coverImageUrl = dom('img.img', '.manga_detail_top').attr('src');

    const getChapterUrl = slug => this.constructUrl(seriesSlug, slug);
    const chapters = extractChapterMetadata(html, getChapterUrl);

    return {
      slug: seriesSlug,
      title,
      description,
      author,
      artist,
      publicationStatus,
      coverImageUrl,
      url,
      chapters,
    };
  },

  async getChapter(seriesSlug, chapterSlug) {
    const url = this.constructUrl(seriesSlug, chapterSlug);

    const body = await utils.getPage(url);
    const dom = cheerio.load(body);

    const pageUrls = dom('select.wid60')
      .first()
      .find('option')
      .get()
      .map(el => `http:${dom(el).attr('value')}`)
      .filter(url => url.indexOf('featured.html') === -1);

    // NOTE: MangaHere returns an image url for the next page, so to halve the
    // loading time from fetching every page, we just grab every other page.
    const everyOtherPageUrl = pageUrls.filter((_, i) => i % 2 === 0);

    const nestedPages = await Promise.all(
      everyOtherPageUrl.map(async url => {
        // NOTE: They also rate-limit requests to once every 250ms from an IP. We
        // use the throttled version here as to avoid this.
        const html = await throttledGetPage(url);
        const dom = cheerio.load(html);

        const images = dom('img')
          .get()
          .map(el => {
            const d = dom(el);

            const width = d.attr('width');
            const height = d.attr('height');
            const url = d.attr('src');
            const pathname = utils.parseUrl(url).pathname;
            const id = pathname.split('/').pop();

            return { id, url, width, height };
          })
          .filter(page => page.url.includes('.jpg?token='));

        return images;
      }),
    );

    const pages: Page[] = utils.flatten(nestedPages);

    return { slug: chapterSlug, url, pages };
  },
};

export default MangaHereAdapter;
