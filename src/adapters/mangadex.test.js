import site from './mangadex';
import errors from '../errors';

describe('MangadexAdapter', () => {
  describe('supportsUrl', () => {
    it('returns true for urls like mangadex.org', () => {
      expect(site.supportsUrl('http://mangadex.org')).toBe(true);
      expect(site.supportsUrl('https://www.mangadex.org')).toBe(true);
    });

    it('returns false for urls that are not mangadex.org', () => {
      expect(site.supportsUrl('http://maanna.com')).toBe(false);
      expect(site.supportsUrl('http://mangadexx.org')).toBe(false);
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
      const { chapters, ...metadata } = await site.getSeries('13127');

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['2', '8'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });

    it('works for series with multiple pages', async () => {
      const longSeries = await site.getSeries('5411');

      expect(longSeries.chapters.length).toBeGreaterThan(100);
    });

    it('only returns the most popular instance of each chapter', async () => {
      const seriesWithMultipleGroups = await site.getSeries('19729');
      const seriesWithMultipleVolumes = await site.getSeries('13025');

      const getChapterNumbers = series =>
        series.chapters.map(c => c.chapterNumber);
      const uniq = arr => Array.from(new Set(arr));

      const a = getChapterNumbers(seriesWithMultipleGroups);
      const b = getChapterNumbers(seriesWithMultipleVolumes);

      expect(a).toEqual(uniq(a));
      expect(b).not.toEqual(uniq(b));
    });
  });

  describe('getChapter', () => {
    it(
      'returns a chapter',
      async () => {
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
