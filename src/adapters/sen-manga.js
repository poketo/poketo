// @flow

import cheerio from 'cheerio';
import moment from 'moment-timezone';
import cookie from 'cookie';
import get from '../get';
import errors from '../errors';
import utils, { invariant } from '../utils';
import type { ChapterMetadata, SiteAdapter } from '../types';

const SESSION_ID_KEY = 'PHPSESSID';

const parseTitle = (str: ?string): ?string =>
  str && str.toLowerCase() !== 'raw' ? str : undefined;
const parseCreatedAt = (str: string): number => {
  const parts = str.split(' ');

  if (parts[2] !== 'ago') {
    return 0;
  }

  const now = moment();
  const number = parseInt(parts[0], 10);
  const unit = parts[1];

  const createdAt = now
    .subtract(number, unit)
    .startOf(unit)
    .unix();

  return createdAt;
};

const proxyImageUrl = (url, sessionId, referer) => {
  const params = new URLSearchParams();
  params.append('url', url);
  params.append(
    'headers',
    JSON.stringify({
      Referer: referer,
      Cookie: cookie.serialize(SESSION_ID_KEY, sessionId),
    }),
  );

  return `https://poketo-image-proxy.now.sh?${params.toString()}`;
};

const SenMangaAdapter: SiteAdapter = {
  id: 'sen-manga',
  name: 'Sen Manga',

  supportsUrl(url) {
    return utils.compareDomain(url, this._getHost());
  },

  supportsReading() {
    return true;
  },

  parseUrl(url) {
    const matches = utils.pathMatch(url, '/:seriesSlug/:chapterSlug?(/.+)?');

    invariant(matches, new errors.InvalidUrlError(url));
    invariant(matches.seriesSlug, new errors.InvalidUrlError(url));

    const { seriesSlug, chapterSlug = null } = matches;

    return { seriesSlug, chapterSlug };
  },

  constructUrl(seriesSlug, chapterSlug) {
    const url = [this._getHost(), seriesSlug, chapterSlug]
      .filter(Boolean)
      .join('/');

    return utils.normalizeUrl(url);
  },

  _getHost() {
    return 'https://raw.senmanga.com';
  },

  async getSeries(seriesSlug) {
    const url = this.constructUrl(seriesSlug);
    const html = await utils.getPage(url);
    const dom = cheerio.load(html);

    const title = dom('div.panel h1.title').text();
    const coverImageUrl = `${this._getHost()}/covers/${seriesSlug}.jpg`;

    const $chapterList = dom('div.element');
    const chapters: ChapterMetadata[] = $chapterList.get().map(el => {
      const $link = dom(el).find('a');
      const $meta = dom(el).find('.meta_r');

      const href = $link.attr('href');
      const linkParts = $link.attr('title').split(' - ');

      const title = parseTitle(linkParts[1]);
      const createdAt = parseCreatedAt($meta.text());
      const slug = this.parseUrl(href).chapterSlug;
      const chapterNumber = slug;
      const url = this.constructUrl(seriesSlug, slug);

      return { slug, title, chapterNumber, url, createdAt };
    });

    return { slug: seriesSlug, coverImageUrl, url, title, chapters };
  },

  async getChapter(seriesSlug, chapterSlug) {
    const url = this.constructUrl(seriesSlug, chapterSlug);

    const response = await get(url, {
      headers: {
        // The `viewer=1` cookie puts all the images on a single page.
        cookie: cookie.serialize('viewer', '1'),
      },
    });

    const cookies = response.headers['set-cookie'];
    const sessionCookie = cookies.find(str => str.includes(SESSION_ID_KEY));
    const sessionId = cookie.parse(sessionCookie)[SESSION_ID_KEY];

    const html = response.body;

    invariant(html.indexOf('404 Error') === -1, new errors.NotFoundError(url));

    const dom = cheerio.load(html);

    const $script = dom('#reader > script');
    const scriptText = $script.html();
    const imageUrls = scriptText.match(/https?[^"]+/g);

    // We proxy image URLs because Sen Manga is really restrictive about
    // hotlinking. The `PHPSESSID` cookie needs to align with the image URL's
    // `token` attribute. Since we can't expect clients to handle all those
    // requirements, we pass a URL to a proxy to handle all the headers.
    const proxiedImageUrls = imageUrls.map(imageUrl =>
      proxyImageUrl(imageUrl, sessionId, url),
    );

    const pages = proxiedImageUrls.map(url => ({ url }));

    return { slug: chapterSlug, url, pages };
  },
};

export default SenMangaAdapter;
