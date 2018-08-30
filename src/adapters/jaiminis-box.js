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

const slice = (input, startKey, endKey) =>
  input.substring(
    input.indexOf(startKey) + startKey.length,
    input.indexOf(endKey),
  );

const parseInfo = (
  input: string,
): { author: ?string, artist: ?string, description: ?string } => {
  const AUTHOR_KEY = 'Author: ';
  const ARTIST_KEY = 'Artist: ';
  const DESCRIPTION_KEY = 'Synopsis: ';

  const author = slice(input, AUTHOR_KEY, ARTIST_KEY).trim();
  const artist = slice(input, ARTIST_KEY, DESCRIPTION_KEY).trim();
  const rawDescription = input.split(DESCRIPTION_KEY).pop();
  const description =
    rawDescription.toLowerCase() === 'n/a' ? null : rawDescription;

  return { author, artist, description };
};

const adapter = makeFoolSlideAdapter({
  id: 'jaiminis-box',
  name: 'Jaimini’s Box',
  foolSlideBaseUrl: 'https://jaiminisbox.com/reader/',
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

    const $content = dom('#content');
    const $comicInfo = dom('.comic.info');
    const $infoSection = $comicInfo.find('.large.comic > .info');

    const title = $comicInfo
      .find('h1.title')
      .text()
      .trim();

    const { author, artist, description } = parseInfo($infoSection.text());
    const publicationStatus = 'UNKNOWN';

    const coverImageUrl = $comicInfo
      .find('.thumbnail img')
      .attr('src')
      // NOTE: we swap the URL to get the thumbnail-sized image
      .replace(/\/([^\/]+)\.(jpg|png)/, '/thumb_$1.$2');

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

    return {
      slug: seriesSlug,
      title,
      description,
      author,
      artist,
      publicationStatus,
      coverImageUrl,
      url,
      chapters,
    };
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
