import site from './sense-scans';
import errors from '../errors';

describe('SenseScansAdapter', () => {
  const server = createVcrServer(site._getHost());

  beforeAll(async () => {
    const url = await server.listen(57168);
    site._getHost = () => url;
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries('kingdom');

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['566', '568'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });
});
