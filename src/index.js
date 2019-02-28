// @flow

import adapters from './adapters';
import errors from './errors';
import utils, { invariant } from './utils';
import type { Chapter, IdComponents, SiteAdapter, Series } from './types';

function isUrl(input: string) {
  return /^https?/.test(input);
}

function isPoketoId(input: string) {
  const components = input.split(':');
  const isValidId = components.length > 1 && components.length < 4;
  return !isUrl(input) && isValidId;
}

function isChapter(components: IdComponents) {
  return (
    components.chapterSlug !== null && components.chapterSlug !== undefined
  );
}

function parseId(id: string): IdComponents {
  invariant(isPoketoId(id), new errors.InvalidIdError(id));

  const components = id.split(':');

  const [siteId, seriesSlug, chapterSlug] = components;
  const isValidSiteId = adapters.map(adapter => adapter.id).includes(siteId);

  invariant(isValidSiteId, new errors.UnsupportedSiteError(siteId));

  return { siteId, seriesSlug, chapterSlug };
}

function getComponentsFromIdOrUrl(idOrUrl: string): IdComponents {
  if (isUrl(idOrUrl)) {
    const site = getAdapterByUrl(idOrUrl);
    return { siteId: site.id, ...site.parseUrl(idOrUrl) };
  }

  if (isPoketoId(idOrUrl)) {
    return parseId(idOrUrl);
  }

  throw new errors.InvalidIdError(idOrUrl);
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
  /*
   * Returns the URL for a given chapter or series based on the components
   * passed in. This URL is not guaranteed to be live or reachable.
   *
   * Meant for reconstructing URLs from pieces in routes.
   */
  constructUrl(id: ?mixed): string {
    invariant(
      typeof id === 'string',
      new TypeError(`'constructUrl' must be passed a string, not ${typeof id}`),
    );

    const components = parseId(id);

    const site = getAdapterBySiteId(components.siteId);
    return site.constructUrl(components.seriesSlug, components.chapterSlug);
  },

  getId(url: string): string {
    invariant(
      typeof url === 'string',
      new TypeError(`'getType' must be passed a string, not ${typeof url}`),
    );

    if (isPoketoId(url)) {
      return url;
    }

    const site = getAdapterByUrl(url);
    const components = site.parseUrl(url);

    invariant(
      components.seriesSlug,
      `Cannot generate an ID for '${url}' since the series information is missing. Use poketo.getSeries() or poketo.getChapter() instead.`,
    );

    return utils.generateId(
      site.id,
      components.seriesSlug,
      components.chapterSlug,
    );
  },

  getType(input: ?mixed): 'series' | 'chapter' {
    invariant(
      typeof input === 'string',
      new TypeError(`'getType' must be passed a string, not ${typeof input}`),
    );

    const components = getComponentsFromIdOrUrl(input);

    return isChapter(components) ? 'chapter' : 'series';
  },

  /*
   * Returns a `Series` object with details about a manga series at the given
   * URL. If the URL is not supported, an error will be thrown.
   */
  async getSeries(input: mixed): Promise<Series> {
    invariant(
      typeof input === 'string',
      new TypeError(`'getSeries' expects a string, not ${typeof input}`),
    );

    const components = getComponentsFromIdOrUrl(input);
    const site = getAdapterBySiteId(components.siteId);

    const ErrorType = isUrl(input)
      ? errors.InvalidUrlError
      : errors.InvalidIdError;

    invariant(components.seriesSlug, new ErrorType(input));

    const seriesData = await site.getSeries(components.seriesSlug);

    const series: any = {
      ...seriesData,
      id: utils.generateId(site.id, seriesData.slug),
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
      series.chapters = utils.sortChapters(seriesData.chapters);
      series.chapters = series.chapters.map((chapterData, index) => ({
        ...chapterData,
        id: utils.generateId(site.id, seriesData.slug, chapterData.slug),
        order: series.chapters.length - index - 1,
      }));
    }

    return series;
  },

  /*
   * Returns a `Chapter` object with details about a single chapter of a manga
   * series from a given URL. If the URL is not supported, an error will be thrown.
   */
  async getChapter(input: string): Promise<Chapter> {
    invariant(
      typeof input === 'string',
      new TypeError(`'getChapter' expects a string, not ${typeof input}`),
    );

    const components = getComponentsFromIdOrUrl(input);
    const site = getAdapterBySiteId(components.siteId);

    const ErrorType = isUrl(input)
      ? errors.InvalidUrlError
      : errors.InvalidIdError;

    // NOTE: we don't check for series slug here since some sites (eg. Mangadex)
    // have chapter-only urls (eg. https://mangadex.org/chapter/123456). Only the
    // chapter url is really required.
    invariant(components.chapterSlug, new ErrorType(input));

    const chapterData = await site.getChapter(
      components.seriesSlug,
      components.chapterSlug,
    );
    const seriesSlug = components.seriesSlug || chapterData.seriesSlug;

    invariant(seriesSlug, new ErrorType(input));

    const id = utils.generateId(site.id, seriesSlug, components.chapterSlug);
    const { url, pages } = chapterData;

    return { id, url, pages };
  },
};

Object.assign(poketo, errors);

export default poketo;
