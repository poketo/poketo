import site from './mangadex';
import errors from '../errors';

describe('MangadexAdapter', () => {
  describe('supportsUrl', () => {
    it('returns true for urls like mangadex.org', () => {
      expect(site.supportsUrl('http://mangadex.org'));
      expect(site.supportsUrl('https://www.mangadex.org'));
    });

    it('returns false for urls that are not mangadex.org', () => {
      expect(site.supportsUrl('http://maanna.com'));
      expect(site.supportsUrl('http://mangadexx.org'));
    });
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(site.parseUrl('https://mangadex.org/manga/13127')).toEqual({
        seriesSlug: '13127',
        chapterSlug: null,
      });

      expect(site.parseUrl('https://mangadex.org/chapter/47721')).toEqual({
        seriesSlug: null,
        chapterSlug: '47721',
      });
    });

    it('throws on unparseable urls', () => {
      expect(() => {
        site.parseUrl('https://mangadex.org/about');
      }).toThrow(errors.InvalidUrlError);
    });
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const metadata = await site.getSeries('13127');

      expect(metadata).toEqual({
        slug: '13127',
        url: 'https://mangadex.org/manga/13127',
        title: 'Uramikoi, Koi, Uramikoi.',
        chapters: expect.arrayContaining([
          {
            slug: '37060',
            number: '2',
            url: 'https://mangadex.org/chapter/37060',
            createdAt: 1517704912,
          },
          {
            slug: '37348',
            number: 'Oneshot',
            url: 'https://mangadex.org/chapter/37348',
            createdAt: 1517709152,
          },
        ]),
      });
    });

    xit('works for series with multiple pages', async () => {
      const longSeries = await site.getSeries('19915');

      expect(longSeries.chapters.length).toBeGreaterThan(100);
    });
  });

  describe('getChapter', () => {
    it('returns a chapter', async () => {
        const chapter = await site.getChapter(null, '37052');

        expect(chapter.url).toEqual('https://mangadex.org/chapter/37052');
        expect(chapter.pages).toHaveLength(86);
        expect(chapter.pages[0]).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            url: expect.stringContaining('http'),
          }),
        );
      },
      10000,
    );
  });
});
