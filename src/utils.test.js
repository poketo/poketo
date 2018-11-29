import utils from './utils';

describe('utils', () => {
  describe('sortChapters', () => {
    it('sorts by volume and chapter number, latest first', () => {
      const a = { chapterNumber: '4', volumeNumber: '1' };
      const b = { chapterNumber: '8', volumeNumber: '1' };
      const c = { chapterNumber: '8', volumeNumber: '2' };
      const d = { chapterNumber: '4', volumeNumber: '2' };

      const chapters = [a, b, c, d];

      expect(utils.sortChapters(chapters)).toEqual([c, d, b, a]);
    });

    it('handles sorts non-numeric and missing values to the end', () => {
      const a = { chapterNumber: 'Oneshot', volumeNumber: 'hi' };
      const b = { chapterNumber: '8', volumeNumber: '1' };
      const c = { chapterNumber: '2' };
      const d = { chapterNumber: '4', volumeNumber: '2' };

      const chapters = [a, b, c, d];

      expect(utils.sortChapters(chapters)).toEqual([d, b, c, a]);
    });
  });

  describe('stripBBCode', () => {
    it('removes nested BBCode from strings', () => {
      // Taken from https://mangadex.org/api/manga/22955/
      const input =
        '[b][u]English[/u][/b]\r\nA line to separate other content.\r\n\r\n[b][u]Portuguese / Portugu&ecirc;s[/u][/b]\r\nMore lines to separate content';

      const expected =
        'English\r\nA line to separate other content.\r\n\r\nPortuguese / Portugu&ecirc;s\r\nMore lines to separate content';

      expect(utils.stripBBCode(input)).toEqual(expected);
    });
  });
});
