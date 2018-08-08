// @flow

import moment from 'moment-timezone';

import errors from '../../errors';
import utils, { invariant } from '../../utils';
import type { ChapterMetadata, Page, SiteAdapter } from '../../types';

type Options = {
  id: string,
  name: string,
  foolSlideBaseUrl: string,
  timeZone?: string,
};

export default function makeFoolSlideAdapter(options: Options): SiteAdapter {
  const normalizedBaseUrl = options.foolSlideBaseUrl.replace(/\/$/, '');
  const normalizedTimeZone = options.timeZone || 'UTC';

  const url = utils.parseUrl(normalizedBaseUrl);
  const normalizedPathName = url.pathname === '/' ? '' : url.pathname;

  const foolSlidePathRegex =
    ':type(read|series)/:seriesSlug/:chapterSlug([a-z]{2}/.+)?';
  const regex = `${normalizedPathName}/${foolSlidePathRegex}`;

  return {
    id: options.id,
    name: options.name,

    supportsUrl(url) {
      return utils.compareDomain(url, normalizedBaseUrl);
    },

    supportsReading() {
      return true;
    },

    parseUrl(url) {
      const matches = utils.pathMatch(url, regex);

      invariant(matches, new errors.InvalidUrlError(url));
      invariant(matches.seriesSlug, new errors.InvalidUrlError(url));

      const seriesSlug = matches.seriesSlug;
      const chapterSlug =
        matches.type === 'read'
          ? matches.chapterSlug.split('/page/').shift()
          : null;

      return { seriesSlug, chapterSlug };
    },

    constructUrl(seriesSlug, chapterSlug) {
      const isChapter = chapterSlug !== null && chapterSlug !== undefined;

      const parts = [
        normalizedBaseUrl,
        isChapter ? 'read' : 'series',
        seriesSlug,
      ];

      if (isChapter) {
        parts.push(chapterSlug);
        parts.push('page/1');
      }

      return utils.normalizeUrl(parts.join('/'));
    },

    async getSeries(seriesSlug) {
      const url = this.constructUrl(seriesSlug);

      const jsonUrl = `${normalizedBaseUrl}/api/reader/comic/stub/${seriesSlug}/format/json`;
      const json = await utils.getJSON(jsonUrl);
      const title = json.comic.name.trim();
      const coverImageUrl = json.comic['fullsized_thumb_url'];
      const coverImageThumbnailUrl = json.comic['thumb_url'];

      const chapters: Array<ChapterMetadata> = json.chapters.map(data => {
        const subchapter =
          data.chapter.subchapter === '0' ? null : data.chapter.subchapter;

        const title = data.chapter.name;
        const slug = [
          data.chapter.language,
          data.chapter.volume,
          data.chapter.chapter,
          subchapter,
        ]
          .filter(Boolean)
          .join('/');

        const url = this.constructUrl(seriesSlug, slug);
        const number = [data.chapter.chapter, subchapter]
          .filter(Boolean)
          .join('.');
        const createdAt = moment
          .tz(data.chapter.created, options.timeZone)
          .unix();

        return {
          url,
          slug,
          chapterNumber: data.chapter.chapter,
          volumeNumber: data.chapter.volume,
          createdAt,
        };
      });

      return {
        slug: seriesSlug,
        coverImageUrl,
        coverImageThumbnailUrl,
        url,
        title,
        chapters,
      };
    },

    async getChapter(seriesSlug, chapterSlug) {
      const url = this.constructUrl(seriesSlug, chapterSlug);
      const html = await utils.getPage(url);
      // Helvetica embeds reader pages with a JSON blob of all the images. We can
      // parse this blob to get all the URLs.
      const json = utils.extractJSON(/var\s+pages\s+=\s+(.+);/, html);

      const pages: Array<Page> = json.map(image => ({
        id: image.id,
        width: Number(image.width),
        height: Number(image.height),
        url: image.url,
      }));

      return { slug: chapterSlug, url, pages };
    },
  };
}
