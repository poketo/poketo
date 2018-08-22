import poketo from '../index';
import adapter from './kirei-cake';

describe('KireiCakeAdapter', () => {
  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        adapter.parseUrl(
          'https://reader.kireicake.com/series/masamunekuns_revenge',
        ),
      ).toEqual({ seriesSlug: 'masamunekuns_revenge', chapterSlug: null });

      expect(
        adapter.parseUrl(
          'https://reader.kireicake.com/read/masamunekuns_revenge/en/0/45/page/1',
        ),
      ).toEqual({ seriesSlug: 'masamunekuns_revenge', chapterSlug: 'en/0/45' });
    });
  });
});

describe('KireiCake', () => {
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
        'kirei-cake:masamunekuns_revenge',
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
