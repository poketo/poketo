import poketo from '../index';
import adapter from './manga-here';

describe('MangaHereAdapter', () => {
  describe('supportsUrl', () => {
    it('returns true for urls like mangahere.cc or .co', () => {
      expect(adapter.supportsUrl('http://www.mangahere.cc')).toBe(true);
      expect(adapter.supportsUrl('http://www.mangahere.co')).toBe(true);
      expect(adapter.supportsUrl('https://mangahere.com')).toBe(true);
    });

    it('returns false for urls that are not mangahere.cc or .co', () => {
      expect(adapter.supportsUrl('http://www.mangahere.kc')).toBe(false);
      expect(adapter.supportsUrl('http://ma.ngahere.co')).toBe(false);
    });
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        adapter.parseUrl(
          'http://www.mangahere.cc/manga/urami_koi_koi_urami_koi/',
        ),
      ).toEqual({
        seriesSlug: 'urami_koi_koi_urami_koi',
        chapterSlug: null,
      });

      expect(
        adapter.parseUrl(
          'http://www.mangahere.cc/manga/urami_koi_koi_urami_koi/c038/1.html',
        ),
      ).toEqual({ seriesSlug: 'urami_koi_koi_urami_koi', chapterSlug: 'c038' });

      expect(
        adapter.parseUrl(
          'http://www.mangahere.cc/manga/flying_witch_ishizuka_chihiro/c018.5/',
        ),
      ).toEqual({
        seriesSlug: 'flying_witch_ishizuka_chihiro',
        chapterSlug: 'c018.5',
      });
    });

    it('throws on unparseable paths', () => {
      expect(() => {
        adapter.parseUrl('http://www.mangahere.cc/banana');
      }).toThrow(poketo.InvalidUrlError);

      expect(() => {
        adapter.parseUrl('http://www.mangahere.cc/marnga/hello/world');
      }).toThrow(poketo.InvalidUrlError);
    });
  });
});

xdescribe('MangaHere', () => {
  const server = new AdapterVcrServer(adapter);

  beforeAll(async () => {
    await server.listenAndMock();
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await poketo.getSeries(
        'manga-here:urami_koi_koi_urami_koi',
      );

      expect(metadata).toMatchSnapshot({
        updatedAt: expect.any(Number),
      });

      const chapterNumbersToTest = ['13'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });

  describe('getChapter', () => {
    it('returns a list of pages', async () => {
      const chapter = await poketo.getChapter(
        'manga-here:urami_koi_koi_urami_koi:c038',
      );

      expect(chapter.pages).toHaveLength(27);
      expect(chapter.pages[0]).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          url: expect.stringContaining('http'),
        }),
      );
    });
  });
});
