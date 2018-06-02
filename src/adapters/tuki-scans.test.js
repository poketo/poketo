import site from './tuki-scans';
import errors from '../errors';

describe('TukiScansAdapter', () => {
  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries('madoromi-chan');

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['17'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });
});
