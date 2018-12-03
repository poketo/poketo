// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import throttle from 'p-throttle';
import errors from '../errors';
import utils, { invariant } from '../utils';
import type { PublicationStatus, SiteAdapter } from '../types';

const throttledGetPage = throttle(utils.getPage, 1, 600);

function parsePublicationStatus(input: string): PublicationStatus {
  const status = input.toLowerCase();

  if (status === 'ongoing') {
    return 'ONGOING';
  } else if (status === 'completed') {
    return 'COMPLETED';
  }

  return 'UNKNOWN';
}

function parseChapterDate(input: string): number {
  return moment.tz(input, 'ddd, DD MMM YYYY HH:mm:ss Z', 'GMT').unix();
}

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
      chapterSlug ? chapterSlug : null,
    ].filter(Boolean);

    return parts.join('/') + '/';
  },

  _getHost() {
    return `https://fanfox.net`;
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);

    const html = await utils.getPage(url);
    const dom = cheerio.load(html);

    const $intro = dom('p.detail-info-right-title').first();
    const $status = $intro.find('.detail-info-right-title-tip');
    const $author = dom('.detail-info-right-say > a');
    const $description = dom('.fullcontent').first();
    const $coverImage = dom('.detail-info-cover-img').first();

    const title = $coverImage.attr('alt');
    const description = $description.text().trim();
    const author = $author.attr('title').trim();
    const status = parsePublicationStatus($status.text().trim());
    const coverImageUrl = $coverImage.attr('src');

    const chapterListingUrl = `${this._getHost()}/rss/${seriesSlug}.xml`;
    const xml = await utils.getPage(chapterListingUrl);
    const rss = cheerio.load(xml, { xmlMode: true });

    const $chapterList = rss('item').get();

    const chapters = $chapterList.map(el => {
      const $item = rss(el);
      const $description = $item.find('description');
      const $link = $item.find('link');
      const $date = $item.find('pubDate');

      const url = $link.text();
      const { chapterSlug: slug } = this.parseUrl(url);

      const chapterNumber = slug.replace(/^c/, '');
      const title = $description.text().trim() || undefined;
      const createdAt = parseChapterDate($date.text().trim());

      return {
        slug,
        url,
        title,
        chapterNumber,
        createdAt,
      };
    });

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
        'chapterfun.ashx' +
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

export default MangaFoxAdapter;
