// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import errors from '../errors';
import utils, { invariant } from '../utils';
import makeFoolSlideAdapter from './shared/fool-slide';
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

const adapter = makeFoolSlideAdapter({
  id: 'jaiminis-box',
  name: 'Jaimini’s Box',
  domain: 'https://jaiminisbox.com/',
  foolSlidePath: '/reader/',
  timeZone: TZ,
});

const JaiminisBoxAdapter = {
  ...adapter,

  // NOTE: Jaimini's Box disabled FoolSlide's API so we have to scrape the
  // old-fashioned way. We override the default FoolSlide functions below.

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);
    const html = await utils.getPage(url);
    const dom = cheerio.load(html);

    const title = dom('h1.title', '#content .comic.info')
      .text()
      .trim();
    const chapterNodes = dom('.element', '#content .list .group');
    const chapters: ChapterMetadata[] = chapterNodes.get().map(el => {
      const node = dom(el);

      const link = node.find('.title a');

      const url = link.attr('href');
      const title = link.attr('title').split(': ')[1];

      const slug = this.parseUrl(url).chapterSlug.replace(/\/$/, '');

      const slugParts = slug.split('/');
      const volumeNumber = slugParts[1];
      const chapterNumber = slugParts[2];

      const createdAtRawText = node
        .find('.meta_r')
        .text()
        .trim();
      const createdAtParsedText = utils.extractText(
        /, ([\d\.]+|\w+)/,
        createdAtRawText,
      );
      const createdAt = getTimestamp(createdAtParsedText);

      return { url, title, slug, chapterNumber, volumeNumber, createdAt };
    });

    return { slug: seriesSlug, url, title, chapters };
  },

  async getChapter(seriesSlug, chapterSlug) {
    const url = this.constructUrl(seriesSlug, chapterSlug);
    const html = await utils.getPage(url);

    const encodedBlob = utils.extractText(
      /var\s+pages\s+=\s+JSON\.parse\(atob\((.+)\)\);/,
      html,
    );
    const decodedBlob = new Buffer(encodedBlob, 'base64');
    const json = JSON.parse(decodedBlob.toString());

    const pages: Page[] = json.map(image => ({
      id: image.id,
      width: Number(image.width),
      height: Number(image.height),
      url: image.url,
    }));

    return { slug: chapterSlug, url, pages };
  },
};

export default JaiminisBoxAdapter;
