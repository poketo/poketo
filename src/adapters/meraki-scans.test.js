import site from './meraki-scans';

describe('MerakiScansAdapter', () => {
  const server = new AdapterVcrServer(site);

  beforeAll(async () => {
    await server.listenAndMock(57165);
  });

  afterAll(() => {
    server.close();
  });

  describe('supportsUrl', () => {
    it('returns true for urls at merakiscans.com', () => {
      expect(site.supportsUrl('http://merakiscans.com')).toBe(true);
      expect(site.supportsUrl('http://merakiscans.com/a/path')).toBe(true);
      expect(site.supportsUrl('https://www.merakiscans.com/another?path')).toBe(
        true,
      );
    });

    it('returns false for urls not at merakiscans.com', () => {
      expect(site.supportsUrl('http://merakkiscans.com')).toBe(false);
      expect(site.supportsUrl('http://mangaupdates.com')).toBe(false);
    });
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(site.parseUrl('http://merakiscans.com/senryu-girl/')).toEqual({
        seriesSlug: 'senryu-girl',
        chapterSlug: null,
      });

      expect(site.parseUrl('http://merakiscans.com/senryu-girl/23/5/')).toEqual(
        { seriesSlug: 'senryu-girl', chapterSlug: '23' },
      );
    });
  });

  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const { chapters, ...metadata } = await site.getSeries(
        'ninja-shinobu-san-no-junjou',
      );

      expect(metadata).toMatchSnapshot();

      const chapterNumbersToTest = ['21'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });

  describe('getChapter', () => {
    it('returns a chapter', async () => {
      const chapter = await site.getChapter(
        'ninja-shinobu-san-no-junjou',
        '32',
      );

      expect(chapter.url).toEqual(
        `${site._getHost()}/ninja-shinobu-san-no-junjou/32`,
      );
      expect(chapter.pages).toHaveLength(37);
      expect(chapter.pages[0]).toEqual(
        expect.objectContaining({
          url: expect.stringContaining('http'),
        }),
      );
    });
  });
});
