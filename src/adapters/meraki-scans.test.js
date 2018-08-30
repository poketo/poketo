import poketo from '..';
import adapter from './meraki-scans';

describe('MerakiScansAdapter', () => {
  describe('supportsUrl', () => {
    it('returns true for urls at merakiscans.com', () => {
      expect(adapter.supportsUrl('http://merakiscans.com')).toBe(true);
      expect(adapter.supportsUrl('http://merakiscans.com/a/path')).toBe(true);
      expect(
        adapter.supportsUrl('https://www.merakiscans.com/another?path'),
      ).toBe(true);
    });

    it('returns false for urls not at merakiscans.com', () => {
      expect(adapter.supportsUrl('http://merakkiscans.com')).toBe(false);
      expect(adapter.supportsUrl('http://mangaupdates.com')).toBe(false);
    });
  });

  describe('parseUrl', () => {
    it('returns the components of a url', () => {
      expect(adapter.parseUrl('http://merakiscans.com/senryu-girl/')).toEqual({
        seriesSlug: 'senryu-girl',
        chapterSlug: null,
      });

      expect(
        adapter.parseUrl('http://merakiscans.com/senryu-girl/23/5/'),
      ).toEqual({ seriesSlug: 'senryu-girl', chapterSlug: '23' });
    });
  });
});

describe('MerakiScans', () => {
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
        'meraki-scans:ninja-shinobu-san-no-junjou',
      );

      expect(metadata).toMatchSnapshot({
        updatedAt: expect.any(Number),
      });

      const chapterNumbersToTest = ['21'];
      const chaptersToTest = chapters.filter(chapter =>
        chapterNumbersToTest.includes(chapter.chapterNumber),
      );
      expect(chaptersToTest).toMatchSnapshot();
    });
  });

  describe('getChapter', () => {
    it('returns a chapter', async () => {
      const chapter = await poketo.getChapter(
        'meraki-scans:ninja-shinobu-san-no-junjou:32',
      );

      expect(chapter.url).toEqual(
        `${adapter._getHost()}/ninja-shinobu-san-no-junjou/32`,
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
