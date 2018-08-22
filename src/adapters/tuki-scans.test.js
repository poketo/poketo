import poketo from '../index';
import adapter from './tuki-scans';

describe('TukiScans', () => {
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
        'tuki-scans:madoromi-chan',
      );

      expect(metadata).toMatchSnapshot({
        updatedAt: expect.any(Number),
      });

      const chapterNumbersToTest = ['17'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });
});
