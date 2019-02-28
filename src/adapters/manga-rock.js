// @flow

import throttle from 'p-throttle';
import errors from '../errors';
import utils, { invariant } from '../utils';
import type { SiteAdapter } from '../types';

const throttledGetJSON = throttle(utils.getJSON, 1, 600);
const getIdFromOid = oid => oid.split('-').pop();
const parseTitle = (
  input: string,
): { title: ?string, chapterNumber: ?string, volumeNumber: ?string } => {
  const parts = input.split(': ');
  const title = parts[1];

  let chapterNumber;
  let volumeNumber;

  try {
    chapterNumber = utils.extractText(/chapter\s+([\d.]+)/i, parts[0]);
  } catch (err) {}

  try {
    volumeNumber = utils.extractText(/vol\.\s*([\d.]+)/i, parts[0]);
  } catch (err) {}

  if (volumeNumber === 'TBD') {
    volumeNumber = undefined;
  }

  return { title, chapterNumber, volumeNumber };
};

const parseAuthors = (data: { authors: { name: string }[] }): Array<?string> =>
  data.authors.length > 0 ? data.authors.map(author => author.name) : [null];

const validateStatusCode = (code: number, url: string) => {
  switch (code) {
    case 0:
      return;
    case 103:
    case 106:
    case 110:
      throw new errors.NotFoundError(url);
    case 104:
      throw new errors.LicenseError();
    case 109:
      throw new errors.HTTPError(400, 'Unknown query version', url);
  }
};

/*
 * MangaRock is a special snowflake; they encode their images as base64'd WebP
 * files with a few header bits taken out. I wrote a micro-service to decode
 * these files into .webp files, which can be passed directly to a browser.
 */
const getPage = async (url: string) => {
  const decodedUrl = `https://mri-image-decoder.now.sh/?url=${url}`;

  return {
    id: url.split('/').pop(),
    url: decodedUrl,
  };
};

const MangaRockAdapter: SiteAdapter = {
  id: 'manga-rock',
  name: 'Manga Rock',

  supportsUrl(url) {
    return utils.compareDomain(url, 'https://mangarock.com');
  },

  supportsReading() {
    return true;
  },

  parseUrl(url) {
    const u = utils.parseUrl(url);
    const parts = u.pathname.split('/');
    const seriesMarkerIndex = parts.findIndex(p => p === 'manga');
    const chapterMarkerIndex = parts.findIndex(p => p === 'chapter');

    const seriesPart = parts[seriesMarkerIndex + 1];
    const chapterPart = parts[chapterMarkerIndex + 1];

    invariant(seriesPart, new errors.InvalidUrlError(url));

    const seriesSlug = getIdFromOid(seriesPart);
    const chapterSlug = chapterPart ? getIdFromOid(chapterPart) : null;

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    invariant(
      typeof seriesSlug === 'string',
      new TypeError(`'seriesSlug' must be a string, not ${typeof seriesSlug}`),
    );

    const parts = [
      'https://mangarock.com/manga',
      `mrs-serie-${seriesSlug}`,
      chapterSlug ? `chapter/mrs-chapter-${chapterSlug}` : undefined,
    ].filter(Boolean);

    return parts.join('/');
  },

  _getHost() {
    return `https://api.mangarockhd.com`;
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);
    const json = await throttledGetJSON(
      `${this._getHost()}/query/web401/info?oid=mrs-serie-${seriesSlug}`,
    );

    validateStatusCode(json.code, url);

    const {
      name: title,
      description,
      completed,
      thumbnail: coverImageUrl,
    } = json.data;

    const author = utils.formatAuthors(parseAuthors(json.data));
    const status = completed ? 'COMPLETED' : 'ONGOING';

    const chapters = json.data.chapters
      .sort((a, b) => b.order - a.order)
      .map(chapterData => {
        const slug = getIdFromOid(chapterData.oid);
        const createdAt = chapterData.updatedAt;
        const { title, chapterNumber, volumeNumber } = parseTitle(
          chapterData.name,
        );
        const url = this.constructUrl(seriesSlug, slug);

        return { slug, title, url, createdAt, chapterNumber, volumeNumber };
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
    const pagesJSON = await throttledGetJSON(
      `${this._getHost()}/query/web401/pages?oid=mrs-chapter-${chapterSlug}`,
    );

    validateStatusCode(pagesJSON.code, url);

    const pages = await Promise.all(pagesJSON.data.map(url => getPage(url)));

    return { slug: chapterSlug, url, pages };
  },
};

export default MangaRockAdapter;
