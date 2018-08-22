import poketo from '../index';
import adapter from './silent-sky-scans';

describe('SilentSkyScans', () => {
  const server = new AdapterVcrServer(adapter);

  beforeAll(async () => {
    await server.listenAndMock(57169);
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await poketo.getSeries(
        'silent-sky-scans:all_rounder_meguru_',
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
