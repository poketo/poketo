import site from './sense-scans';
import errors from '../errors';

describe('SenseScansAdapter', () => {
  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries('kingdom');

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['426.5', '550'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });
});
