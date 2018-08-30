// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import errors from '../../errors';
import utils, { invariant } from '../../utils';
import type { Author, SiteAdapter, ChapterMetadata, Page } from '../../types';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm';
const TZ = 'Asia/Hong_Kong';

const getFirstWord = (string: string) => string.split(' ').shift();
const getNumber = (string: string) => parseInt(string, 10);

/**
 * Takes a year and a MM-DD HH:mm timestamp and returns a full unix timestamp.
 */
const getUnixFromTimestamp = (year: number, date: string) =>
  moment.tz(`${year}-${date}`, DATE_FORMAT, TZ).unix();

/**
 * Mangakakalot shows dates in two formats: "19 hour ago" and "12-25 18:09".
 * This function normalizes them to both follow the "MM-DD HH:mm" format.
 */
const normalizeTimestampFormat = (timestamp: string) => {
  if (timestamp.endsWith('ago')) {
    const offset = getNumber(getFirstWord(timestamp));
    const now = moment();
    return now
      .subtract(offset, 'hours')
      .startOf('hour')
      .format('MM-DD HH:mm');
  }

  return timestamp;
};

/**
 * Mangakakalot shows chapter numbers in a bunch of formats, but the two most
 * common are "Vol.2 Chapter 5" and "Chapter 19". This function extracts the
 * number from all the chapter formats.
 */
const extractChapterNumber = (input: string): ?string => {
  const matches = /chapter\s+([\d\.]+)/i.exec(input);

  if (matches === null) {
    return null;
  }

  return matches.length > 1 ? matches[1] : null;
};

const parseAuthors = (input: string): Author[] => {
  const parts = input.split(':');
  const authors = parts[1]
    .split(',')
    .map(str => str.trim())
    .filter(str => str.length > 0)
    .map(str => ({ name: str, role: 'unknown' }));

  return authors;
};

// http://mangakakalot.com/manga/<series-id>
// http://mangakakalot.com/chapter/<series-id>/chapter_<chapter-id>

type Options = {
  id: string,
  name: string,
  domain: string,
};

export default function makeMangakakalotAdapter({
  id: siteId,
  name: siteName,
  domain,
}: Options): SiteAdapter {
  return {
    id: siteId,
    name: siteName,

    supportsUrl(url) {
      return utils.compareDomain(url, this._getHost());
    },

    supportsReading() {
      return true;
    },

    parseUrl(url) {
      const matches = utils.pathMatch(
        url,
        '/:type(manga|chapter)/:seriesSlug/:chapterSlug(chapter_[0-9.]+)?(/.+)?',
      );

      invariant(matches, new errors.InvalidUrlError(url));
      invariant(matches.seriesSlug, new errors.InvalidUrlError(url));

      const seriesSlug = matches.seriesSlug;
      const chapterSlug =
        matches.type === 'chapter' ? matches.chapterSlug : null;

      return { seriesSlug, chapterSlug };
    },

    constructUrl(seriesSlug, chapterSlug) {
      const isChapter = chapterSlug !== null && chapterSlug !== undefined;

      const parts = [
        this._getHost(),
        isChapter ? 'chapter' : 'manga',
        seriesSlug,
      ];

      if (isChapter) {
        parts.push(chapterSlug);
      }

      return utils.normalizeUrl(parts.join('/'));
    },

    _getHost() {
      return domain;
    },

    async getSeries(seriesSlug) {
      const url = this.constructUrl(seriesSlug);
      const html = await utils.getPage(url);
      const dom = cheerio.load(html);

      invariant(
        html.indexOf('requested cannot be found') === -1,
        new errors.NotFoundError(url),
      );

      const $infoSection = dom('ul.manga-info-text');
      const $chapterRows = dom('.row', '.chapter-list');

      const title = $infoSection
        .find('h1')
        .first()
        .text()
        .trim();
      const description = dom('#noidungm')
        .contents()
        .not('h2')
        .text()
        .trim();

      const $authorInfo = $infoSection.find('li').eq(1);
      const $statusInfo = $infoSection.find('li').eq(2);

      const authors = parseAuthors($authorInfo.text());
      const publicationStatus = utils.parseStatus($statusInfo.text());
      const coverImageUrl = dom('img', 'div.manga-info-pic').attr('src');

      const updatedAtRawText = $infoSection
        .find('li')
        .eq(3)
        .text()
        .trim();
      const updatedAtText = updatedAtRawText.split('Last updated : ').pop();
      const updatedAtTimestamp = moment.tz(
        updatedAtText,
        'MMM-DD-YYYY HH:mm:ss A',
        TZ,
      );
      const updatedAt = updatedAtTimestamp.unix();

      const chapterRawData = $chapterRows.get().map(el => {
        const link = dom('a', el);
        const linkText = link.text().trim();

        const title = linkText.split(' : ')[1];
        const chapterNumber = extractChapterNumber(linkText);
        // NOTE: no formal concept of volumes on Mangakakalot
        const href = link.attr('href');
        const slug = href.split('/').pop();
        const url = this.constructUrl(seriesSlug, slug);

        let createdAtText = normalizeTimestampFormat(
          dom('span', el)
            .eq(2)
            .text()
            .trim(),
        );

        return {
          slug,
          title,
          url,
          chapterNumber,
          createdAtText,
        };
      });

      // NOTE: since Mangakakalot doesn't give the year with a chapter timestamp,
      // we assume the most recent chapter matches the updatedAt timestamp for the
      // series. Then, we work backwards, assuming each chapter was released
      // before later ones.

      let lastUpdatedYear = updatedAtTimestamp.year();

      const chapters: ChapterMetadata[] = chapterRawData.map(
        (chapterData, i, arr) => {
          const prev = arr[i - 1];
          const { createdAtText, ...rest } = chapterData;

          let createdAt = getUnixFromTimestamp(lastUpdatedYear, createdAtText);

          if (prev) {
            const prevCreatedAt = getUnixFromTimestamp(
              lastUpdatedYear,
              prev.createdAtText,
            );

            if (prevCreatedAt < createdAt) {
              lastUpdatedYear -= 1;
              createdAt = moment
                .unix(createdAt)
                .year(lastUpdatedYear)
                .unix();
            }
          }

          return { ...rest, createdAt };
        },
      );

      return {
        slug: seriesSlug,
        title,
        description,
        authors,
        publicationStatus,
        coverImageUrl,
        url,
        chapters,
        updatedAt,
      };
    },

    async getChapter(seriesSlug, chapterSlug) {
      const url = this.constructUrl(seriesSlug, chapterSlug);
      const html = await utils.getPage(url);
      const dom = cheerio.load(html);

      const pages: Array<Page> = dom('img', '#vungdoc')
        .get()
        .map(el => {
          const pageUrl = dom(el).attr('src');
          const id = pageUrl
            .split('/')
            .pop()
            .split('_')
            .shift();

          return { id, url: pageUrl };
        });

      return { slug: chapterSlug, url, pages };
    },
  };
}
