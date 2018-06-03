import site from './silent-sky-scans';
import errors from '../errors';

describe('SilentSkyScansAdapter', () => {
  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries(
        'all_rounder_meguru_',
      );

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['64', '81'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });
});
