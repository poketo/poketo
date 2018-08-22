import poketo from '../index';
import site from './manga-rock';
import errors from '../errors';

describe('MangaRockAdapter', () => {
  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        site.parseUrl('https://mangarock.com/manga/mrs-serie-100056453'),
      ).toEqual({
        seriesSlug: '100056453',
        chapterSlug: null,
      });

      expect(
        site.parseUrl(
          'https://mangarock.com/manga/mrs-serie-100056453/chapter/mrs-chapter-100259395',
        ),
      ).toEqual({
        seriesSlug: '100056453',
        chapterSlug: '100259395',
      });
    });

    it('throws on unparseable urls', () => {
      expect(() => {
        site.parseUrl('https://mangarock.com/author');
      }).toThrow(errors.InvalidUrlError);
    });
  });

  describe('constructUrl', () => {
    it('returns a valid url', () => {
      expect(site.constructUrl('295440')).toEqual(
        'https://mangarock.com/manga/mrs-serie-295440',
      );

      expect(site.constructUrl('295440', '100197426')).toEqual(
        'https://mangarock.com/manga/mrs-serie-295440/chapter/mrs-chapter-100197426',
      );
    });
  });
});

describe('MangaRock', () => {
  const server = new AdapterVcrServer(site);

  beforeAll(async () => {
    await server.listenAndMock(57159);
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', async () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await poketo.getSeries(
        'manga-rock:153037',
      );

      expect(metadata).toMatchSnapshot();
    });
  });

  describe('getChapter', () => {
    it('returns a list of pages', async () => {
      const chapter = await poketo.getChapter('manga-rock:100056453:100259395');

      expect(chapter.pages).toMatchSnapshot();
    });
  });
});
