import site from './sen-manga';
import errors from '../errors';

describe('SenMangaAdapter', () => {
  const server = new AdapterVcrServer(site);

  beforeAll(async () => {
    await server.listenAndMock(57172);
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries('Yotsubato!');

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['82'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest[0]).toMatchSnapshot({
        createdAt: expect.any(Number),
      });
    });
  });

  describe('getChapter', () => {
    it('returns a list of pages', async () => {
      const chapter = await site.getChapter('Yotsubato!', '82');

      expect(chapter.pages).toMatchSnapshot();
    });

    it('throws when not found', async () => {
      expect.assertions(1);

      await expect(site.getChapter('Yotsubato!', '21')).rejects.toThrow(
        errors.NotFoundError,
      );
    });
  });
});
