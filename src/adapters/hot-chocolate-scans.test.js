import site from './hot-chocolate-scans';
import errors from '../errors';

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
      }).toThrow(errors.InvalidUrlError);

      expect(() => {
        site.parseUrl('http://hotchocolatescans.com/fs/');
      }).toThrow(errors.InvalidUrlError);
    });
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const metadata = await site.getSeries('watashi_no_shounen');

      expect(metadata).toMatchSnapshot({
        chapters: expect.arrayContaining([
          {
            number: '4',
            createdAt: 1516818687,
            slug: 'en/0/4',
            url:
              'http://hotchocolatescans.com/fs/read/watashi_no_shounen/en/0/4/page/1',
          },
          {
            number: '8',
            createdAt: 1518828182,
            slug: 'en/0/8',
            url:
              'http://hotchocolatescans.com/fs/read/watashi_no_shounen/en/0/8/page/1',
          },
        ]),
      });
    });
  });

  describe('getChapter', () => {
    it('returns a list of pages', async () => {
      const chapter = await site.getChapter('watashi_no_shounen', 'en/0/4');

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
