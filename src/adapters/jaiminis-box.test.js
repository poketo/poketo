import site from './jaiminis-box';
import errors from '../errors';

describe('JaiminisBoxAdapter', () => {
  describe('supportsUrl', () => {
    it('returns true for urls like jaiminisbox.com', () => {
      expect(site.supportsUrl('http://jaiminisbox.com')).toBe(true);
      expect(site.supportsUrl('http://jaiminisbox.com/a/path')).toBe(true);
      expect(site.supportsUrl('https://www.jaiminisbox.com/another?path')).toBe(
        true,
      );
    });

    it('returns false for urls that are not jaiminisbox.com', () => {
      expect(site.supportsUrl('http://he.lveticascans.com')).toBe(false);
      expect(site.supportsUrl('http://mangaupdates.com')).toBe(false);
    });
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        site.parseUrl('https://jaiminisbox.com/reader/series/itoshi-no-muco/'),
      ).toEqual({ seriesSlug: 'itoshi-no-muco', chapterSlug: null });

      expect(
        site.parseUrl(
          'https://jaiminisbox.com/reader/read/itoshi-no-muco/en/1/2/page/1',
        ),
      ).toEqual({ seriesSlug: 'itoshi-no-muco', chapterSlug: 'en/1/2' });

      expect(
        site.parseUrl(
          'https://jaiminisbox.com/reader/read/mousou-telepathy/en/0/512/5/page/25',
        ),
      ).toEqual({ seriesSlug: 'mousou-telepathy', chapterSlug: 'en/0/512/5' });
    });

    it('throws on unparseable paths', () => {
      expect(() => {
        site.parseUrl(
          'https://jaiminisbox.com/reader/other/mousou-telepathy/en/2/11/page/1',
        );
      }).toThrow(errors.InvalidUrlError);

      expect(() => {
        site.parseUrl('https://jaiminisbox.com/reader/');
      }).toThrow(errors.InvalidUrlError);
    });
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const metadata = await site.getSeries('itoshi-no-muco');

      expect(metadata).toEqual({
        slug: 'itoshi-no-muco',
        url: 'https://jaiminisbox.com/reader/series/itoshi-no-muco',
        title: 'Itoshi no Muco',
        chapters: expect.arrayContaining([
          {
            chapterNumber: '4',
            volumeNumber: '0',
            createdAt: 1483516800,
            slug: 'en/0/4',
            title: 'Walk!',
            url: 'https://jaiminisbox.com/reader/read/itoshi-no-muco/en/0/4/',
          },
          {
            chapterNumber: '8',
            volumeNumber: '0',
            createdAt: 1487750400,
            slug: 'en/0/8',
            title: 'Friend!',
            url: 'https://jaiminisbox.com/reader/read/itoshi-no-muco/en/0/8/',
          },
        ]),
      });
    });
  });

  describe('getChapter', () => {
    it('returns a list of pages', async () => {
      const chapter = await site.getChapter('itoshi-no-muco', 'en/0/4');

      expect(chapter.pages).toHaveLength(8);
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
