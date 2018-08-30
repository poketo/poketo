import poketo from '..';
import adapter from './manga-stream';

describe('MangaStreamAdapter', () => {
  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        adapter.parseUrl('https://readms.net/manga/attack_on_titan'),
      ).toEqual({
        seriesSlug: 'attack_on_titan',
        chapterSlug: null,
      });

      expect(
        adapter.parseUrl('https://readms.net/r/attack_on_titan/103/4949/3'),
      ).toEqual({
        seriesSlug: 'attack_on_titan',
        chapterSlug: '103/4949',
      });
    });

    it('throws on unparseable urls', () => {
      expect(() => {
        adapter.parseUrl('https://readms.net/about');
      }).toThrow(poketo.InvalidUrlError);
    });
  });

  describe('constructUrl', () => {
    it('returns a valid url', () => {
      expect(adapter.constructUrl('attack_on_titan')).toEqual(
        `${adapter._getHost()}/manga/attack_on_titan`,
      );

      expect(adapter.constructUrl('attack_on_titan', '103/4949')).toEqual(
        `${adapter._getHost()}/r/attack_on_titan/103/4949`,
      );
    });
  });
});

describe('MangaStream', () => {
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
        'manga-stream:shokugeki_no_souma',
      );

      expect(metadata).toMatchSnapshot({
        updatedAt: expect.any(Number),
      });
    });
  });

  describe('getChapter', async () => {
    it('returns a list of pages', async () => {
      const chapter = await poketo.getChapter(
        'manga-stream:a_trail_of_blood:15/4622',
      );

      expect(chapter.pages).toMatchSnapshot();
    });
  });
});
