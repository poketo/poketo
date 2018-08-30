// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import throttle from 'p-throttle';
import errors from '../errors';
import utils, { invariant } from '../utils';
import type { SiteAdapter } from '../types';

const TZ = 'UTC';
const throttledGet = throttle(utils.getPage, 5, 100);

const getChapterTimestamp = str => {
  let date;

  switch (str.toLowerCase()) {
    case 'today':
      date = moment.tz(TZ);
      break;
    case 'yesterday':
      date = moment.tz(TZ).subtract(1, 'day');
      break;
    case '2 days ago':
      date = moment.tz(TZ).subtract(2, 'days');
      break;
    default:
      date = moment.tz(str, 'MMM Do, YYYY', TZ);
      break;
  }

  return date.startOf('day').unix();
};
const getChapterSlugFromPathname = pathname =>
  pathname
    .split('/')
    .filter(Boolean)
    .slice(2, 4)
    .join('/');
const getPageNumberFromPathname = pathname =>
  parseFloat(pathname.split('/').pop());

const getPageFromHtml = async html => {
  const dom = cheerio.load(html);
  const src = dom('img#manga-page').attr('src');
  const normalizedSrc = src.startsWith('//') ? `https:${src}` : src;

  return {
    id: normalizedSrc.split('/').pop(),
    url: normalizedSrc,
  };
};

const getPageFromUrl = url => throttledGet(url).then(getPageFromHtml);

const stripLeadingZeroes = str => str.replace(/^0+/, '');
const stripEndMarker = str => str.replace(/ [\(\[]?end[\)\]]?$/i, '');
const trimChapterNumber = str => {
  return stripEndMarker(stripLeadingZeroes(str));
};

const MangaStreamAdapter: SiteAdapter = {
  id: 'manga-stream',
  name: 'Manga Stream',

  supportsUrl(url) {
    return utils.compareDomain(url, 'https://readms.net');
  },

  supportsReading() {
    return true;
  },

  parseUrl(url) {
    // https://readms.net/manga/attack_on_titan
    // https://readms.net/r/attack_on_titan/103/4949/3

    const u = utils.parseUrl(url);
    const parts = u.pathname.split('/').filter(Boolean);
    const isChapter = u.pathname.startsWith('/r/');

    invariant(parts.length > 1, new errors.InvalidUrlError(url));

    let seriesSlug = parts[1];
    let chapterSlug = null;

    if (isChapter) {
      invariant(parts.length > 3, new errors.InvalidUrlError(url));
      chapterSlug = getChapterSlugFromPathname(u.pathname);
    }

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    const initial = chapterSlug ? 'r' : 'manga';
    const slug = [initial, seriesSlug, chapterSlug].filter(Boolean).join('/');

    return utils.normalizeUrl(`${this._getHost()}/${slug}`);
  },

  _getHost() {
    return `https://readms.net`;
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);

    const html = await throttledGet(url);
    const dom = cheerio.load(html);

    const title = dom('.main-body h1')
      .text()
      .trim();

    // MangaStream surfaces limited information beyond the series title.
    const description = null;
    const author = null;
    const artist = null;
    const publicationStatus = 'UNKNOWN';

    // MangaStream returns a 200 status for all pages, even when the
    // slug doesn't exist. The "Page Not Found" h1 tag is our clue it's a 404.
    invariant(title !== 'Page Not Found', new errors.NotFoundError(url));

    const chapters = dom('.main-body h1 + table.table tr')
      .slice(1) // skip the header row
      .get()
      .map(el => {
        const row = dom(el);

        const link = row.find('td > a');
        const right = row.find('td:last-child');

        const titleParts = link.text().split(' - ');
        const chapterNumber = trimChapterNumber(titleParts[0]);
        const title = titleParts[1];

        const slug = getChapterSlugFromPathname(link.attr('href'));
        const url = this.constructUrl(seriesSlug, slug);
        const createdAt = getChapterTimestamp(right.text());

        return { slug, title, url, createdAt, chapterNumber };
      });

    return {
      slug: seriesSlug,
      title,
      description,
      author,
      artist,
      publicationStatus,
      url,
      chapters,
    };
  },

  async getChapter(seriesSlug, chapterSlug) {
    const url = this.constructUrl(seriesSlug, chapterSlug);

    const html = await utils.getPage(url);
    const dom = cheerio.load(html);

    const pageLinkList = dom('.btn-reader-page ul.dropdown-menu li a');
    const firstPagePathname = pageLinkList.first().attr('href');
    const lastPagePathname = pageLinkList.last().attr('href');

    const firstPageNumber = getPageNumberFromPathname(firstPagePathname);
    const lastPageNumber = getPageNumberFromPathname(lastPagePathname);

    const getPageUrl = pageNumber =>
      `${this.constructUrl(seriesSlug, chapterSlug)}/${pageNumber}`;
    const pageUrls = utils
      .range(firstPageNumber, lastPageNumber)
      .map(getPageUrl);

    const pages = await Promise.all(pageUrls.map(url => getPageFromUrl(url)));

    return { slug: chapterSlug, url, pages };
  },
};

export default MangaStreamAdapter;
