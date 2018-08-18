// @flow

import adapters from './adapters';
import errors from './errors';
import utils, { invariant } from './utils';

import type { Chapter, ChapterMetadata, SiteAdapter, Series } from './types';

function isUrl(input: string) {
  return /^https?/.test(input);
}

function isPoketoId(input: string) {
  const components = input.split(':');
  const isValidId = components.length > 1 && components.length < 4;
  return !isUrl(input) && isValidId;
}

function isChapter(components: Object) {
  return (
    components.chapterSlug !== null && components.chapterSlug !== undefined
  );
}

function parseId(
  id: string,
): {
  siteId: string,
  seriesSlug: string,
  chapterSlug: ?string,
} {
  invariant(isPoketoId(id), new errors.InvalidIdError(id));

  const components = id.split(':');

  const [siteId, seriesSlug, chapterSlug] = components;
  const isValidSiteId = adapters.map(adapter => adapter.id).includes(siteId);

  invariant(isValidSiteId, new errors.UnsupportedSiteError(siteId));

  return { siteId, seriesSlug, chapterSlug };
}

function getAdapterByUrl(url: string): SiteAdapter {
  const adapter = adapters.find(adapter => adapter.supportsUrl(url));
  invariant(adapter, new errors.UnsupportedSiteError(url));
  return adapter;
}

function getAdapterBySiteId(siteId: string): SiteAdapter {
  const adapter = adapters.find(adapter => adapter.id === siteId);
  invariant(adapter, new errors.UnsupportedSiteError(siteId));
  return adapter;
}

const poketo: any = {
  /**
   * Returns the URL for a given chapter or series based on the components
   * passed in. This URL is not guaranteed to be live or reachable.
   *
   * Meant for reconstructing URLs from pieces in routes.
   */
  constructUrl(id: ?mixed): string {
    invariant(
      typeof id === 'string',
      new TypeError(`'id' must be a string, not ${typeof id}`),
    );

    const components = parseId(id);

    const site = getAdapterBySiteId(components.siteId);
    return site.constructUrl(components.seriesSlug, components.chapterSlug);
  },

  isType(input: ?mixed): 'series' | 'chapter' {
    invariant(
      typeof input === 'string',
      new TypeError(`'input' must be a string, not ${typeof input}`),
    );

    let components;

    if (isPoketoId(input)) {
      components = parseId(input);
    } else if (isUrl(input)) {
      const site = getAdapterByUrl(input);
      components = site.parseUrl(input);
    } else {
      throw new TypeError(`'input' must be a URL or a Poketo ID`);
    }

    return isChapter(components) ? 'chapter' : 'series';
  },

  /**
   * Returns a `Series` object with details about a manga series at the given
   * URL. If the URL is not supported, an error will be thrown.
   */
  async getSeries(url: string): Promise<Series> {
    const site = getAdapterByUrl(url);
    const parts = site.parseUrl(url);

    invariant(parts.seriesSlug, new errors.InvalidUrlError(url));

    const seriesData = await site.getSeries(parts.seriesSlug);

    const series: any = {
      id: utils.generateId(site.id, seriesData.slug),
      slug: seriesData.slug,
      url: seriesData.url,
      title: seriesData.title,
      site: {
        id: site.id,
        name: site.name,
      },
      supportsReading: site.supportsReading(),
      updatedAt: seriesData.updatedAt
        ? seriesData.updatedAt
        : (seriesData.chapters || []).reduce(
            (a, b) => Math.max(a, b.createdAt),
            0,
          ),
    };

    if (seriesData.chapters) {
      series.chapters = utils.sortChapters(
        seriesData.chapters.map(chapterData => ({
          ...chapterData,
          id: utils.generateId(site.id, seriesData.slug, chapterData.slug),
        })),
      );
    }

    return series;
  },

  /**
   * Returns a `Chapter` object with details about a single chapter of a manga
   * series from a given URL. If the URL is not supported, an error will be thrown.
   */
  async getChapter(url: string): Promise<Chapter> {
    const site = getAdapterByUrl(url);
    const parts = site.parseUrl(url);

    // NOTE: we don't check for series slug here since some sites (eg. Mangadex)
    // have chapter-only urls (eg. https://mangadex.org/chapter/123456). Only the
    // chapter url is really required.
    invariant(parts.chapterSlug, new errors.InvalidUrlError(url));

    const chapterData = await site.getChapter(
      parts.seriesSlug,
      parts.chapterSlug,
    );
    const seriesSlug = parts.seriesSlug || chapterData.seriesSlug;

    invariant(seriesSlug, new errors.InvalidUrlError(url));

    return {
      id: utils.generateId(site.id, seriesSlug, parts.chapterSlug),
      url: chapterData.url,
      pages: chapterData.pages,
    };
  },
};

Object.assign(poketo, errors);

export default poketo;
