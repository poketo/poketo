// @flow

// NOTE: Hot Chocolate Scans also uses FoolSlide (same as Helvetica Scans), so
// there's likely a bunch of code-sharing opportunities here.

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import errors from '../errors';
import utils, { invariant } from '../utils';

import type { ChapterMetadata, Page, SiteAdapter } from '../types';

const TZ = 'America/Los_Angeles';

const getTimestamp = rawText => {
  const text = rawText.toLowerCase();

  if (text === 'today') {
    return moment
      .tz(TZ)
      .endOf('day')
      .unix();
  } else if (text === 'yesterday') {
    return moment
      .tz(TZ)
      .subtract(1, 'day')
      .endOf('day')
      .unix();
  }

  return moment.tz(text, 'YYYY.MM.DD', TZ).unix();
};

// Series URLs
// https://jaiminisbox.com/reader/series/my-hero-academia
// https://jaiminisbox.com/reader/series/itoshi-no-muco/
// Reader URLs
// https://jaiminisbox.com/reader/read/my-hero-academia/en/0/177/page/1
// https://jaiminisbox.com/reader/read/itoshi-no-muco/en/0/4/

const HotChocolateScansAdapter: SiteAdapter = {
  id: 'hot-chocolate-scans',
  name: 'Hot Chocolate Scans',

  supportsUrl(url) {
    const isSameDomain = utils.compareDomain(url, 'http://hotchocolatescans.com/');
    const isFoolSlideDirectory = /\.com\/fs\/?/.test(url);

    return isSameDomain && isFoolSlideDirectory;
  },

  supportsReading() {
    return true;
  },

  parseUrl(url) {
    const matches = utils.pathMatch(
      url,
      '/fs/:type(read|series)/:seriesSlug/:chapterSlug([a-z]{2}/.+)?',
    );

    invariant(matches, new errors.InvalidUrlError(url));
    invariant(matches.seriesSlug, new errors.InvalidUrlError(url));

    const seriesSlug = matches.seriesSlug;
    const chapterSlug =
      matches.type === 'read' ? matches.chapterSlug.split('/page/').shift() : null;

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    const isChapter = chapterSlug !== null && chapterSlug !== undefined;

    const parts = ['http://hotchocolatescans.com/fs', isChapter ? 'read' : 'series', seriesSlug];

    if (isChapter) {
      parts.push(chapterSlug);
      parts.push('page/1');
    }

    return utils.normalizeUrl(parts.join('/'));
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);

    const json = await utils.getJSON(
      `http://hotchocolatescans.com/fs/api/reader/comic/stub/${seriesSlug}/format/json`,
    );
    const title = json.comic.name;

    const chapters: Array<ChapterMetadata> = json.chapters.map(data => {
      const subchapter = data.chapter.subchapter === '0' ? null : data.chapter.subchapter;

      const slug = [data.chapter.language, data.chapter.volume, data.chapter.chapter, subchapter]
        .filter(Boolean)
        .join('/');

      const url = this.constructUrl(seriesSlug, slug);
      const number = [data.chapter.chapter, subchapter].filter(Boolean).join('.');
      const createdAt = moment.tz(data.chapter.created, TZ).unix();

      return { url, slug, number, createdAt };
    });

    return { slug: seriesSlug, url, title, chapters };
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

export default HotChocolateScansAdapter;
