// @flow

import got from 'got';
import cheerio from 'cheerio';
import moment from 'moment-timezone';
import normalize from 'normalize-url';
import pathMatch from 'path-match';
import probe from 'probe-image-size';
import { URL, type URLSearchParams } from 'url';

import type { PageDimensions } from './types';

const getNormalizedDomain = (url: string): string => {
  const u = new URL(normalize(url));
  return u.hostname;
};

const match = pathMatch();

export default {
  normalizeUrl(url: string) {
    return normalize(url);
  },

  compareDomain(a: string, b: string) {
    return getNormalizedDomain(a) === getNormalizedDomain(b);
  },

  flatten(arr: Array<any>) {
    return [].concat(...arr);
  },

  range(length: number): number[] {
    return [...Array(length).keys()];
  },

  extractText(pattern: RegExp, input: string, matchIndex: number = 1): string {
    const matches = pattern.exec(input);

    if (!matches) {
      throw new Error(`Could not find matches for ${pattern.toString()}`);
    }

    if (!matches[matchIndex]) {
      throw new Error(
        `Could not find matches[${matchIndex}] for ${pattern.toString()}`,
      );
    }

    return matches[matchIndex];
  },

  normalizeJson(input: string): string {
    return input
      .replace(/'/g, '"') // replace single quotes with double quotes
      .replace(/,]$/, ']'); // remove trailing slashes
  },

  extractJSON(pattern: RegExp, input: string): any {
    const match = this.extractText(pattern, input);

    try {
      return JSON.parse(this.normalizeJson(match));
    } catch (err) {
      throw new Error(`Could not parse JSON`);
    }
  },

  pathMatch(url: string, pattern: string): ?Object {
    const u = new URL(normalize(url));
    // NOTE: we normalize urls to always have a trailing slash here. This makes
    // matching with path-match easier, since we can then do patterns like
    // /:seriesSlug/:chapterSlug which works even if there's no chapterSlug
    // segment.
    const pathnameWithTrailingSlash = u.pathname + '/';
    const matches = match(pattern)(pathnameWithTrailingSlash);

    if (matches === false) {
      return null;
    }

    return matches;
  },

  pathname(url: string): string {
    const u = new URL(url);
    return u.pathname;
  },

  searchParams(url: string): URLSearchParams {
    const u = new URL(url);
    return u.searchParams;
  },

  generateId: (site: string, series: string, chapter: ?string) =>
    [site, series, chapter].filter(Boolean).join(':'),

  async getPage(url: string): Promise<string> {
    const res = await got(url);
    const html = res.body;
    return html;
  },

  async getJSON(url: string): Promise<Object> {
    const res = await got(url, { json: true });
    const json = res.body;
    return json;
  },

  async getImageSize(url: string): Promise<PageDimensions> {
    const { width, height } = await probe(url);
    return { width, height };
  },
};

/**
 * We're rolling our own version of 'assert' since Node's keeps throwing
 * 'AssertionErrors' rather than our custom error types. Grrrr.
 */
export function invariant(condition: boolean, err: Error): void {
  if (condition) {
    return;
  }

  throw err;
}
