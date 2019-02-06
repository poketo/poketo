// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import errors from '../errors';
import utils, { invariant } from '../utils';
import type { SiteAdapter, ChapterMetadata } from '../types';

const TZ = 'UTC';

const t = d => d.text().trim();

const parseChapterTableString = (
  input: string,
): {
  volumeNumber?: string,
  chapterNumber?: string,
  title?: string,
} => {
  const parts = input.split(' - ');
  const title = parts.pop();
  const rest = parts.shift();

  const volumeMatch = rest.match(/Vol\. (\d+)/);
  const volumeNumber = volumeMatch ? volumeMatch[1] : undefined;
  const chapterMatch = rest.match(/Ch\. (\d+)/);
  const chapterNumber = chapterMatch ? chapterMatch[1] : undefined;

  return {
    title,
    volumeNumber,
    chapterNumber,
  };
};

const parseChapterTableDate = (input: string): number => {
  return moment.tz(input, 'MMM DD, YYYY', TZ).unix();
};

// Series URLs
// http://merakiscans.com/senryu-girl/
// http://merakiscans.com/ninja-shinobu-san-no-junjou/

// Reader URLs
// http://merakiscans.com/senryu-girl/2/

const MerakiScansAdapter: SiteAdapter = {
  id: 'meraki-scans',
  name: 'Meraki Scans',

  supportsUrl(url) {
    return utils.compareDomain(url, 'https://merakiscans.com/');
  },

  supportsReading() {
    return true;
  },

  parseUrl(url) {
    const u = utils.parseUrl(url);
    const parts = u.pathname.split('/').filter(Boolean);

    let seriesSlug;
    let chapterSlug = null;

    invariant(parts.length > 1, new errors.InvalidUrlError(url));

    if (parts[0] === 'details') {
      seriesSlug = parts[1];
    } else {
      seriesSlug = parts[0];
      chapterSlug = parts[1];
    }

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    const urlParts = chapterSlug
      ? [seriesSlug, chapterSlug]
      : ['details', seriesSlug];

    const url = [this._getHost()]
      .concat(urlParts)
      .filter(Boolean)
      .join('/');

    return utils.normalizeUrl(url);
  },

  _getHost() {
    return 'https://merakiscans.com';
  },

  async getSeries(seriesSlug) {
    const seriesUrl = this.constructUrl(seriesSlug);

    const html = await utils.getPage(seriesUrl);
    const dom = cheerio.load(html);

    const $infoSection = dom('#detail_list');
    const $infoSectionRows = $infoSection.find('li');
    const $chapterRows = dom('#chapter_table > tbody > tr');

    const title = t(dom('#manga_name'));
    const description = t($infoSection.find('span:last-child'));
    const rawAuthor = t($infoSectionRows.eq(2));
    const rawArtist = t($infoSectionRows.eq(3));
    const authors = [rawAuthor, rawArtist].map(str => str.split(': ').pop());

    const author = utils.formatAuthors(authors);
    const status = utils.parseStatus(t($infoSectionRows.eq(4)));

    const coverImageUrl = this._getHost() + dom('#cover_img').attr('src');

    const chapters: ChapterMetadata[] = $chapterRows.get().map(el => {
      const $link = dom(el);
      const $chapterDetails = $link.find('td').eq(0);
      const $chapterDate = $link.find('td').eq(1);

      const { title, volumeNumber, chapterNumber } = parseChapterTableString(
        t($chapterDetails),
      );
      const createdAt = parseChapterTableDate(t($chapterDate));
      const slug = this.parseUrl(this._getHost() + $link.attr('data-href'))
        .chapterSlug;
      const url = this.constructUrl(seriesSlug, slug);

      return { slug, title, chapterNumber, volumeNumber, url, createdAt };
    });

    return {
      slug: seriesSlug,
      url: seriesUrl,
      coverImageUrl,
      title,
      description,
      author,
      status,
      chapters,
    };
  },

  async getChapter(seriesSlug, chapterSlug) {
    const url = this.constructUrl(seriesSlug, chapterSlug);

    const html = await utils.getPage(url);
    const dom = cheerio.load(html);
    const imageUrls = dom('img', '#longWrap')
      .get()
      .map(el => dom(el).attr('src'));
    const pages = imageUrls.map((url, i) => ({ id: i, url }));

    return { slug: chapterSlug, url, pages };
  },
};

export default MerakiScansAdapter;
