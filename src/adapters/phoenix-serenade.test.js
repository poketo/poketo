import poketo from '../index';
import site from './phoenix-serenade';

describe('PhoenixSerenade', () => {
  const server = new AdapterVcrServer(site);

  beforeAll(async () => {
    await server.listenAndMock(57166);
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await poketo.getSeries(
        'phoenix-serenade:kusuriya-no-hitorigoto',
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
