import poketo from '../index';
import adapter from './manga-updates';

describe('MangaUpdatesAdapter', () => {
  describe('supportsUrl', () => {
    it('returns true for urls like mangaupdates.com', () => {
      expect(adapter.supportsUrl('http://mangaupdates.com')).toBe(true);
      expect(adapter.supportsUrl('https://www.mangaupdates.com')).toBe(true);
    });

    it('returns false for urls that are not mangaupdates.com', () => {
      expect(adapter.supportsUrl('http://www.mangahere.com')).toBe(false);
      expect(adapter.supportsUrl('http://ma.ngahere.co')).toBe(false);
    });
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        adapter.parseUrl('http://mangaupdates.com/series.html?id=111976'),
      ).toEqual({ seriesSlug: '111976', chapterSlug: null });
    });

    it('throws on unparseable urls', () => {
      expect(() => {
        adapter.parseUrl('https://www.mangaupdates.com/authors.html?id=462621');
      }).toThrow(poketo.InvalidUrlError);
    });
  });
});

describe('MangaUpdates', () => {
  const server = new AdapterVcrServer(adapter);

  beforeAll(async () => {
    await server.listenAndMock(57161);
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const metadata = await poketo.getSeries('manga-updates:111976');

      expect(metadata).toMatchSnapshot({
        updatedAt: expect.any(Number),
      });
    });
  });

  describe('getChapter', () => {
    it('throws an error', async () => {
      await expect(
        poketo.getChapter('manga-updates:111976'),
      ).rejects.toThrowError(poketo.UnsupportedSiteRequest);
    });
  });
});
