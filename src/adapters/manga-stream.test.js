import poketo from '../index';
import site from './manga-stream';
import errors from '../errors';

describe('MangaStreamAdapter', () => {
  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(site.parseUrl('https://readms.net/manga/attack_on_titan')).toEqual(
        {
          seriesSlug: 'attack_on_titan',
          chapterSlug: null,
        },
      );

      expect(
        site.parseUrl('https://readms.net/r/attack_on_titan/103/4949/3'),
      ).toEqual({
        seriesSlug: 'attack_on_titan',
        chapterSlug: '103/4949',
      });
    });

    it('throws on unparseable urls', () => {
      expect(() => {
        site.parseUrl('https://readms.net/about');
      }).toThrow(errors.InvalidUrlError);
    });
  });

  describe('constructUrl', () => {
    it('returns a valid url', () => {
      expect(site.constructUrl('attack_on_titan')).toEqual(
        `${site._getHost()}/manga/attack_on_titan`,
      );

      expect(site.constructUrl('attack_on_titan', '103/4949')).toEqual(
        `${site._getHost()}/r/attack_on_titan/103/4949`,
      );
    });
  });
});

describe('MangaStream', () => {
  const server = new AdapterVcrServer(site);

  beforeAll(async () => {
    await server.listenAndMock(57160);
  });

  afterAll(() => {
    server.close();
  });

  describe('getSeries', async () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await poketo.getSeries(
        'manga-stream:shokugeki_no_souma',
      );

      expect(metadata).toMatchSnapshot();
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
