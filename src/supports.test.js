import isSupportedUrl from './supports';
import adapters from './adapters';

describe('isSupportedUrl', () => {
  it('returns true for all the supported sites', () => {
    const test = adapters
      .map(adapter => adapter._getHost())
      .filter(url => url.indexOf('api.mangarockhd') === -1);

    test.forEach(url => {
      expect(isSupportedUrl(url)).toBe(true);
    });
  });

  it('returns false for invalid urls', () => {
    const test = ['https://google.com', 'http://serenade.moe/'];

    test.forEach(url => {
      expect(isSupportedUrl(url)).toBe(false);
    });
  });
});
