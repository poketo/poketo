import site from './phoenix-serenade';
import errors from '../errors';

describe('PhoenixSerenadeAdapter', () => {
  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const metadata = await site.getSeries('kusuriya-no-hitorigoto');

      expect(metadata).toEqual({
        slug: 'kusuriya-no-hitorigoto',
        url: 'https://reader.serenade.moe/series/kusuriya-no-hitorigoto',
        title: 'Kusuriya no Hitorigoto',
        chapters: expect.arrayContaining([
          {
            number: '7',
            createdAt: 1513954489,
            slug: 'en/0/7',
            url:
              'https://reader.serenade.moe/read/kusuriya-no-hitorigoto/en/0/7/page/1',
          },
          {
            number: '11',
            createdAt: 1526538824,
            slug: 'en/0/11',
            url:
              'https://reader.serenade.moe/read/kusuriya-no-hitorigoto/en/0/11/page/1',
          },
        ]),
      });
    });
  });
});
