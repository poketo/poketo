import site from './sen-manga';

describe('SenMangaAdapter', () => {
  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries('Yotsubato!');

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['82'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });

  describe('getChapter', () => {});
});
