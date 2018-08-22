import poketo from '../index';
import site from './hot-chocolate-scans';

describe('HotChocolateScansAdapter', () => {
  describe('supportsUrl', () => {
    it('returns true for urls like hotchocolatescans.com', () => {
      expect(site.supportsUrl('http://hotchocolatescans.com')).toBe(true);
      expect(site.supportsUrl('http://hotchocolatescans.com/fs')).toBe(true);
      expect(site.supportsUrl('http://hotchocolatescans.com/fs/a/b')).toBe(
        true,
      );
    });

    it('returns false for urls that are not hotchocolatescans.com', () => {
      expect(site.supportsUrl('http://he.lveticascans.com')).toBe(false);
    });
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        site.parseUrl('http://hotchocolatescans.com/fs/series/itoshi-no-muco/'),
      ).toEqual({
        seriesSlug: 'itoshi-no-muco',
        chapterSlug: null,
      });

      expect(
        site.parseUrl(
          'http://hotchocolatescans.com/fs/read/itoshi-no-muco/en/1/2/page/1',
        ),
      ).toEqual({ seriesSlug: 'itoshi-no-muco', chapterSlug: 'en/1/2' });

      expect(
        site.parseUrl(
          'http://hotchocolatescans.com/fs/read/mousou-telepathy/en/0/512/5/page/25',
        ),
      ).toEqual({ seriesSlug: 'mousou-telepathy', chapterSlug: 'en/0/512/5' });
    });

    it('throws on unparseable paths', () => {
      expect(() => {
        site.parseUrl(
          'http://hotchocolatescans.com/fs/other/mousou-telepathy/en/2/11/page/1',
        );
      }).toThrow(poketo.InvalidUrlError);

      expect(() => {
        site.parseUrl('http://hotchocolatescans.com/fs/');
      }).toThrow(poketo.InvalidUrlError);
    });
  });
});

describe('HotChocolateScans', () => {
  const server = new AdapterVcrServer(site);

  beforeAll(async () => {
    await server.listenAndMock(57155);
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await poketo.getSeries(
        'hot-chocolate-scans:watashi_no_shounen',
      );

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['4', '8'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });

  describe('getChapter', () => {
    it('returns a list of pages', async () => {
      const chapter = await poketo.getChapter(
        'hot-chocolate-scans:watashi_no_shounen:en/0/4',
      );

      expect(chapter.pages).toHaveLength(33);
      expect(chapter.pages).toEqual(
        expect.arrayContaining([
          {
            id: expect.any(Number),
            width: expect.any(Number),
            height: expect.any(Number),
            url: expect.stringContaining('http'),
          },
        ]),
      );
    });
  });
});
