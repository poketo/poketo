// @flow

import adapters from './adapters';
import errors from './errors';
import utils, { invariant } from './utils';

import type { Chapter, ChapterMetadata, SiteAdapter, Series } from './types';

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

function sortChapters(a: ChapterMetadata, b: ChapterMetadata): number {
  const numberA = parseFloat(a.chapterNumber);
  const numberB = parseFloat(b.chapterNumber);

  if (Number.isNaN(numberB)) {
    return -1;
  } else if (Number.isNaN(numberA)) {
    return 1;
  }

  return numberB - numberA;
}

const poketo: any = {
  /**
   * Returns the URL for a given chapter or series based on the components
   * passed in. This URL is not guaranteed to be live or reachable.
   *
   * Meant for reconstructing URLs from pieces in routes.
   */
  constructUrl(
    siteId: string,
    seriesSlug: string,
    chapterSlug: ?string,
  ): string {
    const site = getAdapterBySiteId(siteId);
    return site.constructUrl(seriesSlug, chapterSlug);
  },

  /**
   * Returns a `Series` object with details about a manga series at the given
   * URL. If the URL is not supported, an error will be thrown.
   */
  async getSeries(url: string): Promise<Series> {
    const site = getAdapterByUrl(url);
    const parts = site.parseUrl(url);

    invariant(parts.seriesSlug, new Error('Could not read series slug'));

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
      series.chapters = seriesData.chapters
        .map(chapterData => ({
          ...chapterData,
          id: utils.generateId(site.id, seriesData.slug, chapterData.slug),
        }))
        .sort(sortChapters);
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
    invariant(parts.chapterSlug, new Error('Could not read chapter slug'));

    const chapterData = await site.getChapter(
      parts.seriesSlug,
      parts.chapterSlug,
    );
    const seriesSlug = parts.seriesSlug || chapterData.seriesSlug;

    invariant(seriesSlug, new Error('Could not read series slug'));

    return {
      id: utils.generateId(site.id, seriesSlug, parts.chapterSlug),
      url: chapterData.url,
      pages: chapterData.pages,
    };
  },
};

Object.assign(poketo, errors);

export default poketo;
