// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import throttle from 'p-throttle';
import errors from '../errors';
import utils, { invariant } from '../utils';
import type { Chapter, ChapterMetadata, SiteAdapter } from '../types';

const throttledGet = throttle(utils.getPage, 5, 500);

const getPaginatedSeriesUrl = (seriesUrl, page: number): string =>
  `${seriesUrl}/_/chapters/${page}`;

const extractChapters = (
  html: string,
  getChapterUrl: (slug: string) => string,
): ChapterMetadata[] => {
  const dom = cheerio.load(html);
  const chapterDom = dom('tr[id^="chapter_"]', 'table').get();
  const chapterData = chapterDom.map(el => {
    const tr = dom(el);

    const link = tr.find('a[title]').first();
    const slug = link.attr('data-chapter-id');
    const title = link.attr('data-chapter-name');
    const volumeNumber = link.attr('data-volume-num');
    const chapterNumber = link.attr('data-chapter-num') || title;
    const url = getChapterUrl(slug);

    const timeElement = tr.find('time').first();
    const timeText = timeElement.attr('datetime');
    const createdAt = moment.tz(timeText, 'YYYY-MM-DD HH:mm:ss', 'UTC').unix();

    // We return a "language" property to later filter out non-English chapters.
    const languageFlagImage = tr.find('td > img[title]').first();
    const language = languageFlagImage.attr('title');

    // We return an extra "views" property to filter duplicate chapters by the
    // most popular scan once we have all the data.
    const viewsText = tr
      .find('td')
      .eq(-2)
      .text();
    const views = parseInt(viewsText.replace(/\D+/, ''), 10);

    return {
      slug,
      chapterNumber,
      volumeNumber,
      url,
      views,
      language,
      createdAt,
    };
  });

  const filteredChapterData = chapterData.filter((data, _, arr) => {
    // Since Poketo has no notion of languages or multiple versions of a
    // chapter, we'll just return the english version.
    // Sorry, international peeps :(
    if (data.language !== 'English') {
      return false;
    }

    // Mangadex has "pre-release chapters", showing information before the
    // actual publication. If the timestamp is in the future, we ignore it.
    const now = moment().unix();
    if (data.createdAt > now) {
      return false;
    }

    const duplicateChapters = arr.filter(d => {
      return (
        d.volumeNumber === data.volumeNumber &&
        d.chapterNumber === data.chapterNumber
      );
    });

    if (duplicateChapters.length > 1) {
      return duplicateChapters.every(d => data.views >= d.views);
    }

    return true;
  });

  return filteredChapterData.map(
    ({ language, views, chapterNumber, volumeNumber, ...rest }) => ({
      ...rest,
      number: chapterNumber,
    }),
  );
};

const MangadexAdapter: SiteAdapter = {
  id: 'mangadex',
  name: 'Mangadex',

  supportsUrl(url) {
    return utils.compareDomain(url, 'https://mangadex.org');
  },

  supportsReading() {
    return true;
  },

  parseUrl(url) {
    // https://mangadex.org/manga/13127
    // https://mangadex.org/manga/13127/uramikoi-koi-uramikoi
    // https://mangadex.org/chapter/37149/1

    const matches = utils.pathMatch(
      url,
      '/:type(manga|chapter)/:first/:second?',
    );

    invariant(matches, new errors.InvalidUrlError(url));
    invariant(matches.first, new errors.InvalidUrlError(url));

    const isChapter = matches.type === 'chapter';
    const seriesSlug = isChapter ? null : matches.first;
    const chapterSlug = isChapter ? matches.first : null;

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    const type = chapterSlug ? 'chapter' : 'manga';
    const slug = type === 'chapter' ? chapterSlug : seriesSlug;

    invariant(
      slug,
      new TypeError('Either series or chapter slug must be non-null'),
    );

    return utils.normalizeUrl(`https://mangadex.org/${type}/${slug}`);
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);

    const html = await throttledGet(url);
    const dom = cheerio.load(html);

    const title = dom('.panel-title', '#content > .panel:first-child')
      .first()
      .text()
      .trim();
    const chapterPaginationText = dom(
      '.table-responsive + p',
      '.edit.tab-content',
    )
      .first()
      .text()
      .trim();
    const hasPagination = chapterPaginationText.length > 0;

    const getChapterUrl = slug => this.constructUrl(seriesSlug, slug);

    let chapters: ChapterMetadata[] = extractChapters(html, getChapterUrl);

    if (hasPagination) {
      const chapterCount = parseInt(
        chapterPaginationText.split(' of ').pop(),
        10,
      );
      const pagesPerChapter = 100;
      const pageCount = Math.ceil(chapterCount / pagesPerChapter);
      const pageUrls = utils
        .range(pageCount)
        .slice(1) // we already fetched the first page
        .map(pageNumber => pageNumber + 1) // pages are 1-indexed
        .map(page => getPaginatedSeriesUrl(url, page));

      const pages = await Promise.all(pageUrls.map(url => throttledGet(url)));

      chapters = chapters.concat(
        utils.flatten(pages.map(html => extractChapters(html, getChapterUrl))),
      );
    }

    return { slug: seriesSlug, url, title, chapters };
  },

  async getChapter(_, chapterSlug) {
    const url = this.constructUrl(null, chapterSlug);
    const html = await utils.getPage(url);

    const imageServer = utils.extractJSON(/var\s+server\s+=\s+(.+);/, html);
    const hash = utils.extractJSON(/var\s+dataurl\s+=\s+(.+);/, html);
    const pagesJson = utils.extractJSON(
      /var\s+page_array\s+=\s+([^;]+);/,
      html,
    );

    // NOTE: some series are hosted on the main server. We check if it's a
    // relative URL and make sure it has a host before using it.
    const basename = imageServer.startsWith('/data')
      ? `https://mangadex.org${imageServer}${hash}`
      : `${imageServer}${hash}`;

    const pages = pagesJson.map(path => ({
      id: path,
      url: `${basename}/${path}`,
    }));

    // NOTE: we return seriesSlug here since we don't get it from the URL, but
    // we still use it to generate the IDs.
    const seriesSlug = utils.extractJSON(/var\s+manga_id\s+=\s+(.+);/, html);

    return { slug: chapterSlug, url, seriesSlug, pages };
  },
};

export default MangadexAdapter;
