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
});
