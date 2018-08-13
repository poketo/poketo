import site from './helvetica-scans';
import errors from '../errors';

describe('HelveticaScans', () => {
  const server = createVcrServer(site._getHost());

  beforeAll(async () => {
    const url = await server.listen(57153);
    site._getHost = () => url;
  });

  afterAll(() => {
    server.close();
  });

  describe('supportsUrl', () => {
    it('returns true for urls like helveticascans.com', () => {
      expect(site.supportsUrl('http://helveticascans.com')).toBe(true);
      expect(site.supportsUrl('http://helveticascans.com/a/path')).toBe(true);
      expect(
        site.supportsUrl('https://www.helveticascans.com/another?path'),
      ).toBe(true);
    });

    it('returns false for urls that are not helveticascans.com', () => {
      expect(site.supportsUrl('http://he.lveticascans.com')).toBe(false);
      expect(site.supportsUrl('http://mangaupdates.com')).toBe(false);
    });
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        site.parseUrl('http://helveticascans.com/r/series/talentless-nana/'),
      ).toEqual({ seriesSlug: 'talentless-nana', chapterSlug: null });

      expect(
        site.parseUrl(
          'http://helveticascans.com/r/read/talentless-nana/en/1/2/page/1',
        ),
      ).toEqual({ seriesSlug: 'talentless-nana', chapterSlug: 'en/1/2' });

      expect(
        site.parseUrl(
          'http://helveticascans.com/r/read/mousou-telepathy/en/0/512/5/page/25',
        ),
      ).toEqual({ seriesSlug: 'mousou-telepathy', chapterSlug: 'en/0/512/5' });
    });

    it('throws on unparseable paths', () => {
      expect(() => {
        site.parseUrl(
          'http://helveticascans.com/r/other/mousou-telepathy/en/2/11/page/1',
        );
      }).toThrow(errors.InvalidUrlError);

      expect(() => {
        site.parseUrl('http://helveticascans.com/r/');
      }).toThrow(errors.InvalidUrlError);
    });
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries('talentless-nana');

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['4', '8'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest[0]).toMatchSnapshot();
      expect(chaptersToTest[1]).toMatchSnapshot();
    });
  });

  describe('getChapter', () => {
    it('returns a list of pages', async () => {
      const chapter = await site.getChapter('talentless-nana', 'en/2/11');

      expect(chapter.pages).toHaveLength(43);
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
