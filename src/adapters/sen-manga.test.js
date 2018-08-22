import poketo from '../index';
import adapter from './sen-manga';

describe('SenManga', () => {
  const server = new AdapterVcrServer(adapter);

  beforeAll(async () => {
    await server.listenAndMock();
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await poketo.getSeries(
        'sen-manga:Yotsubato!',
      );

      expect(metadata).toMatchSnapshot({
        updatedAt: expect.any(Number),
      });

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
      const chapter = await poketo.getChapter('sen-manga:Yotsubato!:82');

      expect(chapter.pages).toMatchSnapshot();
    });

    it('throws when not found', async () => {
      expect.assertions(1);

      await expect(
        poketo.getChapter('sen-manga:Yotsubato!:21'),
      ).rejects.toThrow(poketo.NotFoundError);
    });
  });
});
