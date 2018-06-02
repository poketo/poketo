import site from './phoenix-serenade';
import errors from '../errors';

describe('PhoenixSerenadeAdapter', () => {
  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries(
        'kusuriya-no-hitorigoto',
      );

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['7', '11'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });
});
