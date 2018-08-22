import poketo from '../index';
import adapter from './sense-scans';

describe('SenseScans', () => {
  const server = new AdapterVcrServer(adapter);

  beforeAll(async () => {
    await server.listenAndMock(57168);
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await poketo.getSeries(
        'sense-scans:kingdom',
      );

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['566', '568'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });
});
