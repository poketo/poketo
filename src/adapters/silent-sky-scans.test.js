import site from './silent-sky-scans';
import errors from '../errors';

describe('SilentSkyScansAdapter', () => {
  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const metadata = await site.getSeries('all_rounder_meguru_');

      expect(metadata).toMatchSnapshot({
        chapters: expect.arrayContaining([
          {
            number: '81',
            createdAt: 1394828845,
            slug: 'en/9/81',
            url:
              'http://reader.silentsky-scans.net/read/all_rounder_meguru_/en/9/81/page/1',
          },
          {
            number: '64',
            createdAt: 1371899118,
            slug: 'en/7/64',
            url:
              'http://reader.silentsky-scans.net/read/all_rounder_meguru_/en/7/64/page/1',
          },
        ]),
      });
    });
  });
});
