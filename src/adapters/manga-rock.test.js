import poketo from '..';
import adapter from './manga-rock';

describe('MangaRockAdapter', () => {
  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        adapter.parseUrl('https://mangarock.com/manga/mrs-serie-100056453'),
      ).toEqual({
        seriesSlug: '100056453',
        chapterSlug: null,
      });

      expect(
        adapter.parseUrl(
          'https://mangarock.com/manga/mrs-serie-100056453/chapter/mrs-chapter-100259395',
        ),
      ).toEqual({
        seriesSlug: '100056453',
        chapterSlug: '100259395',
      });
    });

    it('throws on unparseable urls', () => {
      expect(() => {
        adapter.parseUrl('https://mangarock.com/author');
      }).toThrow(poketo.InvalidUrlError);
    });
  });

  describe('constructUrl', () => {
    it('returns a valid url', () => {
      expect(adapter.constructUrl('295440')).toEqual(
        'https://mangarock.com/manga/mrs-serie-295440',
      );

      expect(adapter.constructUrl('295440', '100197426')).toEqual(
        'https://mangarock.com/manga/mrs-serie-295440/chapter/mrs-chapter-100197426',
      );
    });
  });
});

describe('MangaRock', () => {
  const server = new AdapterVcrServer(adapter);

  beforeAll(async () => {
    await server.listenAndMock();
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', async () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await poketo.getSeries(
        'manga-rock:153037',
      );

      expect(metadata).toMatchSnapshot({
        updatedAt: expect.any(Number),
      });
    });
  });

  describe('getChapter', () => {
    it('returns a list of pages', async () => {
      const chapter = await poketo.getChapter('manga-rock:100056453:100259395');

      expect(chapter.pages).toMatchSnapshot();
    });
  });
});
