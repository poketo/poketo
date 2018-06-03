import site from './kirei-cake';
import errors from '../errors';

describe('KireiCakeAdapter', () => {
  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries(
        'masamunekuns_revenge',
      );

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['47'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });
});
