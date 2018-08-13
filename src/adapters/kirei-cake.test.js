import site from './kirei-cake';
import errors from '../errors';

describe('KireiCakeAdapter', () => {
  const server = new AdapterVcrServer(site);

  beforeAll(async () => {
    await server.listenAndMock(57156);
  });

  afterAll(() => {
    server.close();
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        site.parseUrl(
          'https://reader.kireicake.com/series/masamunekuns_revenge',
        ),
      ).toEqual({ seriesSlug: 'masamunekuns_revenge', chapterSlug: null });

      expect(
        site.parseUrl(
          'https://reader.kireicake.com/read/masamunekuns_revenge/en/0/45/page/1',
        ),
      ).toEqual({ seriesSlug: 'masamunekuns_revenge', chapterSlug: 'en/0/45' });
    });
  });

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
