// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import throttle from 'p-throttle';
import errors from '../errors';
import utils, { invariant } from '../utils';
import type { PublicationStatus, SiteAdapter } from '../types';

const throttledGetPage = throttle(utils.getPage, 1, 600);

function parsePublicationStatus(): PublicationStatus {
  return 'UNKNOWN';
}

function parseChapterDate() {}

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
  const dm5String = args[0] + ',' + args[1];
  const key = extractKeyFromCode(args[4]);

  const decoded = utils.decodeDM5String(dm5String, key);

  const betweenQuotes = /"([^"]+)"/g;
  const matches = decoded.match(betweenQuotes);

  if (!Array.isArray(matches)) {
    throw new Error('Could not find image URLs');
  }

  const normalizedMatches = matches.map(str => str.replace(/"/g, ''));

  const host = normalizedMatches[0];
  const imagePaths = normalizedMatches.slice(1, -1);

  const imageUrls = imagePaths.map(path => host + path);

  return imageUrls;
}

const MangaFoxAdapter: SiteAdapter = {
  id: 'manga-fox',
  name: 'MangaFox',

  supportsUrl(url) {
    return /^https?:\/\/(www\.)?fanfox.net/.test(url);
  },

  supportsReading() {
    return true;
  },

  parseUrl(url) {
    // https://fanfox.net/manga/shokugeki_no_soma/
    // https://fanfox.net/manga/tomo_chan_wa_onnanoko/
    // https://fanfox.net/manga/tomo_chan_wa_onnanoko/c176.1/1.html
    // https://fanfox.net/manga/tomo_chan_wa_onnanoko/c870/1.html
    // https://fanfox.net/manga/horimiya/v12/c088/1.html

    const u = utils.parseUrl(url);
    const parts = u.pathname.split('/').filter(Boolean);

    const isValidUrl = parts.length > 1 && parts[0] === 'manga';

    invariant(isValidUrl, new errors.InvalidUrlError(url));

    const seriesSlug = parts[1];
    const chapterSlug = parts.find(p => /c[0-9.]+/.test(p)) || null;

    invariant(seriesSlug, new errors.InvalidUrlError(url));

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    invariant(
      typeof seriesSlug === 'string',
      new TypeError(`'seriesSlug' must be a string, not ${typeof seriesSlug}`),
    );

    const parts = [
      this._getHost(),
      'manga',
      seriesSlug,
      chapterSlug ? `${chapterSlug}/` : null,
    ].filter(Boolean);

    return parts.join('/');
  },

  _getHost() {
    return `https://fanfox.net`;
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);
    const html = await utils.getPage(url);

    // http://fanfox.net/rss/tomo_chan_wa_onnanoko.xml

    const title = '';
    const description = '';
    const author = '';
    const status = parsePublicationStatus();
    const coverImageUrl = '';

    const chapters = [];

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
    const html = await utils.getPage(url);

    const chapterId = utils.extractText(/var\s*chapterid\s*=\s*(\d+);/i, html);
    const chapterKey = extractChapterKey(html);

    const pageIndexUrl =
      `${url}chapterfun.ashx` + `?cid=${chapterId}&page=1&key=${chapterKey}`;
    const pageIndex = await utils.getPage(pageIndexUrl, {
      headers: { Referer: url },
    });

    const imageUrls = extractPageIndex(pageIndex);
    const pages = imageUrls.map((url, i) => {
      const id = `${chapterId}:${i}`;
      return { id, url };
    });

    return { slug: chapterSlug, url, pages };
  },
};

export default MangaFoxAdapter;
