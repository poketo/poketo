import isSupportedUrl from './supports';

describe('isSupportedUrl', () => {
  it('returns true for all the supported sites', () => {
    const testUrls = [
      'https://helveticascans.com/r/series/mousou-telepathy/',
      'http://hotchocolatescans.com/fs/series/watashi_no_shounen',
      'https://jaiminisbox.com/reader/series/my-hero-academia',
      'https://reader.kireicake.com/series/masamunekuns_revenge/',
      'http://mangahere.cc/manga/urami_koi_koi_urami_koi/',
      'https://readms.net/manga/attack_on_titan',
      'https://mangaupdates.com/series.html?id=111976',
      'https://mangadex.org/manga/13127',
      'http://mangakakalot.com/manga/senryu_girl',
      'http://merakiscans.com/senryu-girl/',
      'http://reader.serenade.moe/series/kusuriya-no-hitorigoto',
      'http://sensescans.com/reader/series/kingdom',
      'http://reader.silentsky-scans.net/series/all_rounder_meguru_',
      'https://reader.tukimoop.pw/series/madoromi-chan/',
    ];

    expect.assertions(testUrls.length);
    testUrls.forEach(url => {
      expect(isSupportedUrl(url)).toBe(true);
    });
  });

  it('returns false for invalid urls', () => {
    const testUrls = [
      'https://google.com',
      'https://helveticascans.com',
      'http://serenade.moe/',
    ];

    expect.assertions(testUrls.length);
    testUrls.forEach(url => {
      expect(isSupportedUrl(url)).toBe(false);
    });
  });
});
