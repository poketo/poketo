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
    chapterNumber = utils.extractText(/chapter\s+([\d\.]+)/i, parts[0]);
  } catch (err) {}

  try {
    volumeNumber = utils.extractText(/vol\.\s*([\d\.]+)/i, parts[0]);
  } catch (err) {}

  if (volumeNumber === 'TBD') {
    volumeNumber = undefined;
  }

  return { title, chapterNumber, volumeNumber };
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
    invariant(seriesSlug, new TypeError('Series slug must be non-null'));
    const parts = [
      'https://mangarock.com/manga',
      `mrs-serie-${seriesSlug}`,
      chapterSlug ? `chapter/mrs-chapter-${chapterSlug}` : undefined,
    ].filter(Boolean);

    return parts.join('/');
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);
    const json = await throttledGetJSON(
      `https://api.mangarockhd.com/query/web400/info?oid=mrs-serie-${seriesSlug}`,
    );

    invariant(json.code !== 103, new errors.NotFoundError(url)); // Not found
    invariant(json.code !== 104, new errors.NotFoundError(url)); // Series is licensed

    const title = json.data.name;
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

    return { slug: seriesSlug, url, title, chapters };
  },

  async getChapter(seriesSlug, chapterSlug) {
    const url = this.constructUrl(seriesSlug, chapterSlug);
    const pagesJSON = await throttledGetJSON(
      `https://api.mangarockhd.com/query/web400/pages?oid=mrs-chapter-${chapterSlug}`,
    );

    const pages = await Promise.all(pagesJSON.data.map(url => getPage(url)));

    return { slug: chapterSlug, url, pages };
  },
};

/**
 * MangaRock is a special snowflake; they encode their images as base64'd WebP
 * files with a few header bits taken out. I wrote a micro-service to decode
 * these files into .webp files, which can be passed directly to a browser.
 */
const getPage = async (url: string) => {
  const decodedUrl = `https://mri-image-decoder.now.sh/?url=${url}`;
  const { width, height } = await utils.getImageSize(decodedUrl);

  return {
    id: url.split('/').pop(),
    url: decodedUrl,
    width,
    height,
  };
};

export default MangaRockAdapter;
