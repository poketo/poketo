import site from './kirei-cake';
import errors from '../errors';

describe('KireiCakeAdapter', () => {
  describe('getSeries', () => {
    it('returns a metadata object', async () => {
      const metadata = await site.getSeries('masamunekuns_revenge');

      expect(metadata).toMatchSnapshot({
        chapters: expect.arrayContaining([
          {
            number: '47',
            createdAt: 1525765063,
            slug: 'en/0/47',
            url:
              'https://reader.kireicake.com/read/masamunekuns_revenge/en/0/47/page/1',
          },
        ]),
      });
    });
  });
});
