// @flow

import got from 'got';
import cheerio from 'cheerio';
import normalize from 'normalize-url';
import pathMatch from 'path-match';
import probe from 'probe-image-size';
import { URL, type URLSearchParams } from 'url';

import type { ChapterMetadata, PageDimensions } from './types';

const timeout = 5 * 1000;
const match = pathMatch();

export default {
  normalizeUrl(url: string) {
    return normalize(url);
  },

  parseUrl(url: string) {
    return new URL(this.normalizeUrl(url));
  },

  compareDomain(a: string, b: string) {
    const hostnameA = this.parseUrl(a).hostname;
    const hostnameB = this.parseUrl(b).hostname;

    return hostnameA === hostnameB;
  },

  flatten(arr: Array<any>) {
    return [].concat(...arr);
  },

  range(low: number, high: number): number[] {
    const result = [];
    for (let i = low; i <= high; i++) {
      result.push(i);
    }
    return result;
  },

  isNumber(val: mixed): boolean {
    return Boolean(val) && !Number.isNaN(val);
  },

  sortChapters(arr: ChapterMetadata[]): ChapterMetadata[] {
    return arr.slice().sort((a: ChapterMetadata, b: ChapterMetadata) => {
      const chapterA = parseFloat(a.chapterNumber);
      const volumeA = parseFloat(a.volumeNumber);
      const chapterB = parseFloat(b.chapterNumber);
      const volumeB = parseFloat(b.volumeNumber);

      if (this.isNumber(volumeA) && this.isNumber(volumeB)) {
        if (volumeA < volumeB) {
          return 1;
        } else if (volumeA > volumeB) {
          return -1;
        }
      }

      if (!this.isNumber(chapterB)) {
        return -1;
      } else if (!this.isNumber(chapterA)) {
        return 1;
      }

      return chapterB - chapterA;
    });
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
    const { pathname } = this.parseUrl(url);
    // NOTE: we normalize urls to always have a trailing slash here. This makes
    // matching with path-match easier, since we can then do patterns like
    // /:seriesSlug/:chapterSlug which works even if there's no chapterSlug
    // segment.
    const pathnameWithTrailingSlash = pathname + '/';
    const matches = match(pattern)(pathnameWithTrailingSlash);

    if (matches === false) {
      return null;
    }

    return matches;
  },

  generateId: (site: string, series: string, chapter: ?string) =>
    [site, series, chapter].filter(Boolean).join(':'),

  async getPage(url: string): Promise<string> {
    const res = await got(url, { timeout });
    const html = res.body;
    return html;
  },

  async getJSON(url: string): Promise<Object> {
    const res = await got(url, { json: true, timeout });
    const json = res.body;
    return json;
  },

  async getImageSize(
    url: string,
    options: ?Object,
  ): Promise<{ width: ?number, height: ?number }> {
    let width;
    let height;

    try {
      const size = await probe(url, options);
      width = size.width;
      height = size.height;
    } catch (err) {}

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
