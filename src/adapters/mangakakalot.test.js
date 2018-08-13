import site from './mangakakalot';
import errors from '../errors';

describe('MangakakalotAdapter', () => {
  const server = new AdapterVcrServer(site);

  beforeAll(async () => {
    await server.listenAndMock(57171);
  });

  afterAll(() => {
    server.close();
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        site.parseUrl('http://mangakakalot.com/manga/urami_koi_koi_urami_koi/'),
      ).toEqual({ seriesSlug: 'urami_koi_koi_urami_koi', chapterSlug: null });

      expect(
        site.parseUrl(
          'http://mangakakalot.com/chapter/urami_koi_koi_urami_koi/chapter_15.2',
        ),
      ).toEqual({
        seriesSlug: 'urami_koi_koi_urami_koi',
        chapterSlug: 'chapter_15.2',
      });
    });

    it('throws on unparseable urls', () => {
      expect(() => {
        site.parseUrl('https://www.mangaupdates.com/authors.html?id=462621');
      }).toThrow(errors.InvalidUrlError);
    });
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries(
        'urami_koi_koi_urami_koi',
      );

      expect(metadata).toMatchSnapshot({
        updatedAt: expect.any(Number),
      });

      const chapterNumbersToTest = ['38'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });

  describe('getChapter', () => {
    it('returns a list of pages', async () => {
      const chapter = await site.getChapter(
        'urami_koi_koi_urami_koi',
        'chapter_5',
      );

      expect(chapter.pages).toHaveLength(48);
      expect(chapter.pages).toEqual(
        expect.arrayContaining([
          {
            id: expect.any(String),
            url: expect.stringContaining('http'),
          },
        ]),
      );
    });
  });
});
