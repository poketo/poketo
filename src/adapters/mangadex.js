// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import throttle from 'p-throttle';
import errors from '../errors';
import pmap from 'p-map';
import utils, { invariant } from '../utils';
import type { Chapter, ChapterMetadata, SiteAdapter } from '../types';

const throttledGet = throttle(utils.getJSON, 5, 500);

const LanguageCodes = {
  ENGLISH: 'gb',
  SPANISH: 'es',
  RUSSIAN: 'ru',
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
    const json = await throttledGet(
      `http://beta.mangadex.org/api/manga/${seriesSlug}`,
    );

    const title = json.manga.title;

    const chapterIds = Object.keys(json.chapter);
    const chapterData = chapterIds.map(id => {
      const chapter = json.chapter[id];

      return {
        slug: id,
        title: chapter.title,
        url: this.constructUrl(seriesSlug, id),
        language: chapter.lang_code,
        chapterNumber: chapter.chapter ? chapter.chapter : undefined,
        volumeNumber: chapter.volume ? chapter.volume : undefined,
        createdAt: chapter.timestamp,
      };
    });

    const chapters: ChapterMetadata[] = chapterData
      .filter(filterLanguage)
      .filter(filterPreReleases)
      .filter(filterDuplicates)
      .map(({ language, ...rest }) => rest);

    return { slug: seriesSlug, url, title, chapters };
  },

  async getChapter(_, chapterSlug) {
    const url = this.constructUrl(null, chapterSlug);
    const json = await utils.getJSON(
      `http://beta.mangadex.org/api/chapter/${chapterSlug}`,
    );

    // NOTE: we get seriesSlug here since we don't have it from the URL, but
    // it's still needed to generate chapter IDs.
    const seriesSlug = json.manga_id;
    const basename = json.server + json.hash;
    const pagePaths = json.page_array;

    const pages = await pmap(pagePaths, getPage(basename), { concurrency: 5 });

    return { slug: chapterSlug, url, seriesSlug, pages };
  },
};

const getPage = basename => async path => {
  const url = `${basename}/${path}`;
  const { width, height } = await utils.getImageSize(url);

  return { id: path, url, width, height };
};

/**
 * Since Poketo has no notion of languages or multiple versions of a chapter,
 * we'll just return the English version. Sorry, international peeps :(
 */
const filterLanguage = (chapter): boolean => {
  return chapter.language === LanguageCodes.ENGLISH;
};

/**
 * Mangadex has "pre-release chapters", showing information before the actual
 * publication. If the timestamp is in the future, we ignore it.
 */
const filterPreReleases = (chapter): boolean => {
  const now = moment().unix();
  return chapter.createdAt <= now;
};

/**
 * Mangadex supports multiple scanlators uploading versions of the same chapter.
 * We take the most recently uploaded version to filter out speed-scanlators.
 */
const filterDuplicates = (chapter, _, arr): boolean => {
  const duplicateChapters = arr.filter(
    d =>
      d.volumeNumber === chapter.volumeNumber &&
      d.chapterNumber === chapter.chapterNumber &&
      d.slug !== chapter.slug,
  );

  if (duplicateChapters.length === 0) {
    return true;
  }

  return duplicateChapters.every(d => chapter.createdAt > d.createdAt);
};

export default MangadexAdapter;
