import site from './sense-scans';
import errors from '../errors';

describe('SenseScansAdapter', () => {
  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const metadata = await site.getSeries('kingdom');

      expect(metadata).toEqual({
        slug: 'kingdom',
        url: 'https://sensescans.com/reader/series/kingdom',
        title: 'Kingdom',
        chapters: expect.arrayContaining([
          {
            number: '426.5',
            createdAt: 1508059938,
            slug: 'en/39/426/5',
            url:
              'https://sensescans.com/reader/read/kingdom/en/39/426/5/page/1',
          },
          {
            number: '550',
            createdAt: 1520340128,
            slug: 'en/51/550',
            url: 'https://sensescans.com/reader/read/kingdom/en/51/550/page/1',
          },
        ]),
      });
    });
  });
});
