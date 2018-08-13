// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import errors from '../errors';
import utils, { invariant } from '../utils';

import type { SiteAdapter } from '../types';

const MangaUpdatesAdapter: SiteAdapter = {
  id: 'manga-updates',
  name: 'MangaUpdates',

  supportsUrl(url) {
    return utils.compareDomain(url, 'http://mangaupdates.com');
  },

  supportsReading() {
    return false;
  },

  parseUrl(url) {
    const matches = utils.parseUrl(url).searchParams;

    invariant(/\/series.html\?id=/.test(url), new errors.InvalidUrlError(url));

    const seriesSlug = matches.has('id') ? matches.get('id') : null;
    const chapterSlug = null;

    invariant(seriesSlug, new errors.InvalidUrlError(url));

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug) {
    invariant(seriesSlug, new TypeError('Series slug must be non-null'));
    return utils.normalizeUrl(
      `https://www.mangaupdates.com/series.html?id=${seriesSlug}`,
    );
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);
    const html = await utils.getPage(
      `https://www.mangaupdates.com/series.html?id=${seriesSlug}`,
    );
    const dom = cheerio.load(html);

    const $content = dom('#main_content');
    const $seriesMetadataColumnA = $content.find('.sContainer[text]');
    const $seriesMetadataColumnB = $content.find('.sContainer + .sContainer');

    const title = $content.find('.releasestitle.tabletitle').text();
    const coverImageThumbnailUrl = $seriesMetadataColumnB
      .find('center img[width][height]')
      .attr('src');

    const $updatedAt = $seriesMetadataColumnA.find('.sContent').last();
    const updatedAt = moment
      .tz($updatedAt.text(), 'MMMM Do YYYY, h:mma zz', 'America/Los_Angeles')
      .unix();

    return { slug: seriesSlug, coverImageThumbnailUrl, url, title, updatedAt };
  },

  async getChapter() {
    throw new errors.UnsupportedSiteRequestError(
      this.name,
      'fetching chapters',
    );
  },
};

export default MangaUpdatesAdapter;
