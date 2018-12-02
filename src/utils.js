// @flow

import { URL } from 'url';
import normalize from 'normalize-url';
import pathMatch from 'path-match';

import get from './get';
import type { ChapterMetadata, PublicationStatus } from './types';

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
        }

        if (volumeA > volumeB) {
          return -1;
        }
      }

      if (!this.isNumber(chapterB)) {
        return -1;
      }

      if (!this.isNumber(chapterA)) {
        return 1;
      }

      return chapterB - chapterA;
    });
  },

  parseStatus(
    input: string,
    ongoingKey: string = 'ongoing',
    completedKey: string = 'complete',
  ): PublicationStatus {
    const normalized = input.toLowerCase();

    if (normalized.indexOf(ongoingKey) !== -1) {
      return 'ONGOING';
    }

    if (normalized.indexOf(completedKey) !== -1) {
      return 'COMPLETED';
    }

    return 'UNKNOWN';
  },

  formatAuthors(authors: Array<?string>): string | null {
    const filteredAuthors = authors
      .map(author => author && author.trim())
      .filter(Boolean);

    const uniqueAuthors = filteredAuthors.filter(
      (author, index, arr) => arr.indexOf(author) === index,
    );

    return uniqueAuthors.length > 0 ? uniqueAuthors.join(', ') : null;
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
      .replace(/'/g, '"') // Replace single quotes with double quotes
      .replace(/,]$/, ']'); // Remove trailing slashes
  },

  stripBBCode(input: string): string {
    return input.replace(
      /\[\/?(?:b|i|u|url|quote|code|img|color|size)*?.*?\]/gim,
      '',
    );
  },

  extractJSON(pattern: RegExp, input: string): any {
    const match = this.extractText(pattern, input);

    try {
      return JSON.parse(this.normalizeJson(match));
    } catch (err) {
      throw new Error(`Could not parse JSON`);
    }
  },

  /**
   * MangaFox uses these DM5 codes to encrypt strings needed to load their
   * images. DM5 codes are an encoded string and a legend, describing how to
   * decrypt the string. Sadly, DM5 uses `eval` and since we don't want to run
   * arbitrary `eval`'d code on people's computers, this function was written
   * to statically parse these strings.
   */
  decodeDM5String(encryptedString: string, keyString: string): string {
    const keyArray = keyString.split('|');
    const keyLength = keyArray.length;

    const getChar = code => {
      const a = code < keyLength ? '' : getChar(parseInt(code / keyLength));
      const looped = code % keyLength;

      const b =
        looped > 35 ? String.fromCharCode(looped + 29) : looped.toString(36);

      return a + b;
    };

    let decodingKey = {};
    let i = keyLength;

    while (i--) {
      decodingKey[getChar(i)] = keyArray[i] || getChar(i);
    }

    return encryptedString.replace(/\b\w+\b/g, e => decodingKey[e]);
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

  async getPage(url: string, opts?: Object): Promise<string> {
    const res = await get(url, { timeout, ...opts });
    const html = res.body;
    return html;
  },

  async getJSON(url: string, opts?: Object): Promise<Object> {
    const res = await get(url, { json: true, timeout, ...opts });
    const json = res.body;
    return json;
  },
};

/*
 * We're rolling our own version of 'assert' since Node's keeps throwing
 * 'AssertionErrors' rather than our custom error types. Grrrr.
 */
export function invariant(condition: boolean, err: Error): void {
  if (condition) {
    return;
  }

  throw err;
}
