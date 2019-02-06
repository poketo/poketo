// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import throttle from 'p-throttle';
import errors from '../errors';
import utils, { invariant } from '../utils';
import type { SiteAdapter, ChapterMetadata, Page } from '../types';

const TZ = 'America/Los_Angeles';

const t = $el => $el.text().trim();
const throttledGetPage = throttle(utils.getPage, 1, 600);
const trimLeadingZeroes = str => str.replace(/^0+(\d)/g, '$1');

function extractArgs(str) {
  // NOTE: This is a brittle approach, relying on the fact this variable is
  // named 'p'. That said, it's surprisingly easy and works.
  const startArgs = `return p;}('`;
  const argsStartIndex = str.indexOf(startArgs) + startArgs.length - 1;
  const argsEndIndex = str.indexOf('))', argsStartIndex);

  return str.substring(argsStartIndex, argsEndIndex).split(',');
}

function extractKeyFromCode(str) {
  // Removes the non-<key> part of the string: '<key>'.split('|')
  return str.replace(/\.split\('\|'\)$/, '').replace(/^'|'$/g, '');
}

function extractChapterKey(html) {
  const args = extractArgs(html);

  const dm5String = args[0];
  const rawKeyString = extractKeyFromCode(args[3]);
  const decodedChapterKey = utils.decodeDM5String(dm5String, rawKeyString);

  const firstEqualsIndex = decodedChapterKey.indexOf('=');
  const firstSemicolonIndex = decodedChapterKey.indexOf(';');
  const assignment = decodedChapterKey.substring(
    firstEqualsIndex + 1,
    firstSemicolonIndex,
  );
  const cleanedChapterKey = assignment.replace(/[^0-9a-fA-F]/g, '');

  return cleanedChapterKey;
}

function extractPageIndex(code: string) {
  const args = extractArgs(code);
  const dm5String = args.length > 6 ? args[0] + ',' + args[1] : args[0];
  const key = extractKeyFromCode(args.length > 6 ? args[4] : args[3]);

  const decoded = utils.decodeDM5String(dm5String, key);

  const betweenQuotes = /"([^"]+)"/g;
  const matches = decoded.match(betweenQuotes);

  if (!Array.isArray(matches)) {
    throw new Error('Could not find image URLs');
  }

  const normalizedMatches = matches.map(str => str.replace(/"/g, ''));

  const host = normalizedMatches[0].replace('http:', 'https:');
  const imagePaths = normalizedMatches.slice(1, -1);

  const imageUrls = imagePaths.map(path => host + path);

  return imageUrls;
}

function extractChapterMetadata(
  html: string,
  getChapterUrl: (slug: string) => string,
): ChapterMetadata[] {
  const dom = cheerio.load(html);
  const chapterDom = dom('.detail-main-list');
  const chapterListElements = chapterDom.find('li');

  const chapterMetadata = chapterListElements.get().map(el => {
    const $row = dom(el);
    const $link = $row.find('a');
    const $title = $row.find('.title3');
    const $date = $row.find('.title2');

    const href = $link.attr('href');
    const slug = utils.extractText(/\/(c[\d.]+)\/?/, href);
    const url = getChapterUrl(slug);

    const [rawChapterString, title] = t($title).split(' - ');
    const chapterNumber = trimLeadingZeroes(
      utils.extractText(/Ch.([\d.]+)$/i, rawChapterString),
    );
    // NOTE: MangaHere has no notion of volumes

    const createdAt = getTimestamp(t($date));

    return { slug, title, url, chapterNumber, createdAt };
  });

  return chapterMetadata;
}

function getTimestamp(rawText) {
  const text = rawText.toLowerCase();

  if (text.includes('hours ago')) {
    const rawCount = utils.extractText(/(\d+) hours ago/, text);
    const count = parseInt(rawCount, 10);

    return moment
      .tz(TZ)
      .subtract(count, 'hours')
      .unix();
  }

  if (text === 'today') {
    return moment
      .tz(TZ)
      .endOf('day')
      .unix();
  }

  if (text === 'yesterday') {
    return moment
      .tz(TZ)
      .subtract(1, 'day')
      .endOf('day')
      .unix();
  }

  return moment.tz(text, 'MMM D,YYYY', 'America/Los_Angeles').unix();
}

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
    return `https://www.mangahere.cc`;
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);
    const html = await throttledGetPage(url);

    invariant(
      html.indexOf('page you have requested can’t be found') === -1,
      new errors.NotFoundError(url),
    );

    const dom = cheerio.load(html);

    const title = t(dom('.detail-info-right-title-font'));
    const description = t(dom('.detail-info-right-content'));

    const author = utils.formatAuthors([t(dom('.detail-info-right-say > a'))]);
    const status = utils.parseStatus(t(dom('.detail-info-right-title-tip')));
    const coverImageUrl = dom('img.detail-info-cover-img').attr('src');

    const getChapterUrl = slug => this.constructUrl(seriesSlug, slug);
    const chapters = extractChapterMetadata(html, getChapterUrl);

    return {
      slug: seriesSlug,
      title,
      description,
      author,
      status,
      coverImageUrl,
      url,
      chapters,
    };
  },

  async getChapter(seriesSlug, chapterSlug) {
    const url = this.constructUrl(seriesSlug, chapterSlug);
    const html = await utils.getPage(url, {
      headers: {
        // Prevents a prompt which blocks common series like Shingeki no Kyojin
        // and Re: Monster.
        cookie: 'isAdult=1',
      },
    });

    if (html.includes('According to the requirement of the Copyright Party')) {
      throw new errors.LicenseError();
    }

    const chapterId = utils.extractText(/var\s*chapterid\s*=\s*(\d+);/i, html);
    const chapterKey = extractChapterKey(html);

    const pageLinks = html.match(/data-page="(\d+)"/g) || [];

    const pageCount = pageLinks
      .map(match => match.replace(/\D+/g, ''))
      .map(number => parseInt(number, 10))
      .reduce((a, b) => Math.max(a, b), 1);

    let imageSet = new Set();
    let count = 1;

    while (imageSet.size < pageCount) {
      const pageIndexUrl =
        url +
        '/chapterfun.ashx' +
        `?cid=${chapterId}&page=${count}&key=${chapterKey}`;

      const pageIndex = await utils.getPage(pageIndexUrl, {
        headers: { Referer: url },
      });

      const newUrls = extractPageIndex(pageIndex);
      count = Math.min(count + newUrls.length, pageCount);

      newUrls.forEach(url => {
        imageSet.add(url);
      });
    }

    const imageUrls = [...imageSet];

    const pages = imageUrls.map((url, i) => {
      const id = `${chapterId}:${i}`;
      return { id, url };
    });

    return { slug: chapterSlug, url, pages };
  },
};

export default MangaHereAdapter;
