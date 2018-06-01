import site from './tuki-scans';
import errors from '../errors';

describe('TukiScansAdapter', () => {
  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const metadata = await site.getSeries('madoromi-chan');

      expect(metadata).toMatchSnapshot({
        chapters: expect.arrayContaining([
          {
            number: '17',
            createdAt: 1526129849,
            slug: 'en/2/17',
            url: 'https://reader.tukimoop.pw/read/madoromi-chan/en/2/17/page/1',
          },
        ]),
      });
    });
  });
});
