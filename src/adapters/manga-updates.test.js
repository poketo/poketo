import site from './manga-updates';
import errors from '../errors';

describe('MangaUpdatesAdapter', () => {
  const server = createVcrServer(site);

  beforeAll(async () => {
    const url = await server.listen(57161);
    site._getHost = () => url;
  });

  afterAll(() => {
    server.close();
  });

  describe('supportsUrl', () => {
    it('returns true for urls like mangaupdates.com', () => {
      expect(site.supportsUrl('http://mangaupdates.com')).toBe(true);
      expect(site.supportsUrl('https://www.mangaupdates.com')).toBe(true);
    });

    it('returns false for urls that are not mangaupdates.com', () => {
      expect(site.supportsUrl('http://www.mangahere.com')).toBe(false);
      expect(site.supportsUrl('http://ma.ngahere.co')).toBe(false);
    });
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        site.parseUrl('http://mangaupdates.com/series.html?id=111976'),
      ).toEqual({ seriesSlug: '111976', chapterSlug: null });
    });

    it('throws on unparseable urls', () => {
      expect(() => {
        site.parseUrl('https://www.mangaupdates.com/authors.html?id=462621');
      }).toThrow(errors.InvalidUrlError);
    });
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const metadata = await site.getSeries('111976');

      expect(metadata).toMatchSnapshot({
        updatedAt: expect.any(Number),
      });
    });
  });

  describe('getChapter', () => {
    it('throws an error', async () => {
      await expect(site.getChapter('111976')).rejects.toThrowError(
        errors.UnsupportedSiteRequest,
      );
    });
  });
});
