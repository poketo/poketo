// @flow

import moment from 'moment-timezone';
import throttle from 'p-throttle';
import errors from '../errors';
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
    // https://mangadex.org/title/13127
    // https://mangadex.org/manga/13127/uramikoi-koi-uramikoi
    // https://mangadex.org/chapter/37149/1

    const matches = utils.pathMatch(
      url,
      '/:type(manga|title|chapter)/:first/:second?',
    );

    invariant(matches, new errors.InvalidUrlError(url));
    invariant(matches.first, new errors.InvalidUrlError(url));

    const isChapter = matches.type === 'chapter';
    const seriesSlug = isChapter ? null : matches.first;
    const chapterSlug = isChapter ? matches.first : null;

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    const type = chapterSlug ? 'chapter' : 'title';
    const slug = type === 'chapter' ? chapterSlug : seriesSlug;

    invariant(
      slug,
      new TypeError(
        `Either 'seriesSlug' or 'chapterSlug' must be a string, not ${typeof seriesSlug} and ${typeof chapterSlug}`,
      ),
    );

    return utils.normalizeUrl(`${this._getHost()}/${type}/${slug}`);
  },

  _getHost() {
    return `https://mangadex.org`;
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);
    const json = await throttledGet(
      `${this._getHost()}/api/manga/${seriesSlug}`,
    );

    const title = json.manga['title'];
    // We swap out the URL to get a "large" thumbnail-sized version.
    const coverImageUrl =
      this._getHost() + json.manga['cover_url'].replace('.jpg', '.large.jpg');

    // If the chapter object doesn't exist, the series doesn't have any chapters
    // available to read.
    const chapterIds = json.chapter ? Object.keys(json.chapter) : [];
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

    return { slug: seriesSlug, coverImageUrl, url, title, chapters };
  },

  async getChapter(_, chapterSlug) {
    const url = this.constructUrl(null, chapterSlug);
    const json = await throttledGet(
      `${this._getHost()}/api/chapter/${chapterSlug}`,
    );

    // We get seriesSlug here since we don't have it from the URL, but
    // it's still needed to generate chapter IDs.
    const seriesSlug = json.manga_id;
    const basename = json.server.startsWith('/data')
      ? `${this._getHost()}${json.server}${json.hash}`
      : `${json.server}${json.hash}`;
    const pagePaths = json.page_array;

    const pages = pagePaths.map(path => {
      const url = `${basename}/${path}`;
      return { id: path, url };
    });

    return { slug: chapterSlug, url, seriesSlug, pages };
  },
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
