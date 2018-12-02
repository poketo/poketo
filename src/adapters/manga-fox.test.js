import poketo from '..';
import adapter from './manga-fox';

describe('MangaFoxAdapter', () => {
  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(
        adapter.parseUrl('https://fanfox.net/manga/shokugeki_no_soma/'),
      ).toEqual({
        seriesSlug: 'shokugeki_no_soma',
        chapterSlug: null,
      });

      expect(
        adapter.parseUrl(
          'https://fanfox.net/manga/tomo_chan_wa_onnanoko/c176.1/1.html',
        ),
      ).toEqual({
        seriesSlug: 'tomo_chan_wa_onnanoko',
        chapterSlug: 'c176.1',
      });

      expect(
        adapter.parseUrl(
          'https://fanfox.net/manga/komi_san_wa_komyushou_desu/v08/c141/1.html',
        ),
      ).toEqual({
        seriesSlug: 'komi_san_wa_komyushou_desu',
        chapterSlug: 'c141',
      });
    });

    it('throws on unparseable urls', () => {
      expect(() => {
        adapter.parseUrl('https://fanfox.net/directory/');
      }).toThrow(poketo.InvalidUrlError);
    });
  });

  describe('constructUrl', () => {
    it('returns a valid url', () => {
      expect(adapter.constructUrl('tomo_chan_wa_onnanoko')).toEqual(
        'https://fanfox.net/manga/tomo_chan_wa_onnanoko',
      );

      expect(adapter.constructUrl('tomo_chan_wa_onnanoko', 'c863')).toEqual(
        'https://fanfox.net/manga/tomo_chan_wa_onnanoko/c863/',
      );

      expect(adapter.constructUrl('tomo_chan_wa_onnanoko', 'c176.1')).toEqual(
        'https://fanfox.net/manga/tomo_chan_wa_onnanoko/c176.1/',
      );
    });
  });
});

describe('MangaFox', () => {
  const server = new AdapterVcrServer(adapter);

  beforeAll(async () => {
    await server.listenAndMock();
  });

  afterAll(() => {
    server.close();
  });

  xdescribe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await poketo.getSeries(
        'manga-fox:komi_san_wa_komyushou_desu',
      );

      expect(metadata).toMatchSnapshot({
        updatedAt: expect.any(Number),
      });

      const chapterNumbersToTest = ['c13'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });

  describe('getChapter', () => {
    it('returns a list of pages', async () => {
      const chapter = await poketo.getChapter(
        'manga-fox:komi_san_wa_komyushou_desu:c172',
      );

      expect(chapter.pages).toHaveLength(2);
      expect(chapter.pages[0]).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          url: expect.stringContaining('http'),
        }),
      );
    }, 5000);
  });
});
