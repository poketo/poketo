import site from './silent-sky-scans';
import errors from '../errors';

describe('SilentSkyScansAdapter', () => {
  const server = createVcrServer(site._getHost());

  beforeAll(async () => {
    const url = await server.listen(57169);
    site._getHost = () => url;
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries(
        'all_rounder_meguru_',
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
