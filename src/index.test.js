import poketo from '.';

describe('poketo', () => {
  describe('constructUrl', () => {
    it('returns a site-specific url', () => {
      expect(
        poketo.constructUrl('mangakakalot', 'urami_koi_koi_urami_koi'),
      ).toEqual('http://mangakakalot.com/manga/urami_koi_koi_urami_koi');
      expect(poketo.constructUrl('meraki-scans', 'senryu-girl', '5')).toEqual(
        'http://merakiscans.com/senryu-girl/5',
      );
    });

    it('throws a TypeError without arguments', () => {
      expect(() => {
        poketo.constructUrl();
      }).toThrow(TypeError);
    });
  });

  describe('getSeries', () => {
    it('throws for invalid urls', async () => {
      expect.assertions(2);

      await expect(
        poketo.getSeries('http://helveticascans.com/r/series/non-existent/'),
      ).rejects.toThrow(poketo.NotFoundError);

      await expect(poketo.getSeries('https://httpstat.us/500')).rejects.toThrow(
        poketo.Htt,
      );
    });
  });

  describe('getChapter', () => {
    it('returns a chapter', async () => {
      expect.assertions(2);

      await expect(
        poketo.getChapter('http://merakiscans.com/senryu-girl/2'),
      ).resolves.toMatchSnapshot();
      await expect(
        poketo.getChapter(
          'http://helveticascans.com/r/read/talentless-nana/en/1/2/page/1',
        ),
      ).resolves.toMatchSnapshot();
    });

    it('throws for invalid urls', async () => {
      expect.assertions(3);

      await expect(poketo.getChapter('banana')).rejects.toThrow(
        poketo.UnsupportedSiteError,
      );
      await expect(poketo.getChapter('http://google.com')).rejects.toThrow(
        poketo.UnsupportedSiteError,
      );
      await expect(
        poketo.getChapter('http://helveticascans.com/ba/nan/na'),
      ).rejects.toThrow(poketo.InvalidUrlError);
    });
  });
});
