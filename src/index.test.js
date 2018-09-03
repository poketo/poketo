import poketo from '.';

describe('poketo', () => {
  describe('constructUrl', () => {
    it('returns a site-specific url', () => {
      const tests = [
        {
          input: 'mangakakalot:urami_koi_koi_urami_koi',
          output: 'http://mangakakalot.com/manga/urami_koi_koi_urami_koi',
        },
        {
          input: 'meraki-scans:senryu-girl:5',
          output: 'http://merakiscans.com/senryu-girl/5',
        },
      ];

      tests.forEach(test => {
        expect(poketo.constructUrl(test.input)).toEqual(test.output);
      });
    });

    it('throws a TypeError without arguments', () => {
      expect(() => {
        poketo.constructUrl();
      }).toThrow(TypeError);
    });

    it('throws an InvalidIdError on invalid arguments', () => {
      expect(() => {
        poketo.constructUrl('https://google.com');
      }).toThrow(poketo.InvalidIdError);
    });

    it('throws an UnsupportedSiteError on invalid arguments', () => {
      expect(() => {
        poketo.constructUrl('google:my-series');
      }).toThrow(poketo.UnsupportedSiteError);
    });
  });

  describe('getType', () => {
    it(`returns 'series' for series inputs`, () => {
      const inputs = [
        'https://merakiscans.com/senryu-girl',
        'meraki-scans:senryu-girl',
        'sen-manga:Yotsubato!',
        'https://mangadex.org/manga/420649',
        'https://mangarock.com/manga/mrs-serie-100100972',
        'https://jaiminisbox.com/reader/series/my-hero-academia',
      ];

      inputs.forEach(input => expect(poketo.getType(input)).toEqual('series'));
    });

    it(`returns 'chapter' for chapter inputs`, () => {
      const inputs = [
        'https://merakiscans.com/senryu-girl/5',
        'meraki-scans:senryu-girl:5',
        'sen-manga:Yotsubato!:82',
        'https://mangadex.org/chapter/420649/1',
        'https://mangarock.com/manga/mrs-serie-100100972/chapter/mrs-chapter-100268832',
        'https://jaiminisbox.com/reader/read/my-hero-academia/en/0/191/page/1',
      ];

      inputs.forEach(input => expect(poketo.getType(input)).toEqual('chapter'));
    });

    it('throws errors on invalid arguments', () => {
      const invalidIds = ['hello', 'h8942nrm23cl;.,/,./23,./'];
      const unsupportedIds = [
        'https://google.com/chapter/420649/1',
        'google:my-series',
        'example:series:chapter-5',
      ];

      const getType = input => () => poketo.getType(input);

      invalidIds.forEach(input => {
        expect(getType(input)).toThrow(poketo.InvalidIdError);
      });

      unsupportedIds.forEach(input => {
        expect(getType(input)).toThrow(poketo.UnsupportedSiteError);
      });
    });
  });

  describe('getSeries', () => {
    it('returns a series with metadata', async () => {
      expect.assertions(2);

      const { chapters: a, ...metadataFromUrl } = await poketo.getSeries(
        'https://mangadex.org/manga/13127',
      );
      const { chapters: b, ...metadataFromId } = await poketo.getSeries(
        'mangadex:13127',
      );

      const updatedWhenever = { updatedAt: expect.any(Number) };

      expect(metadataFromUrl).toMatchSnapshot(updatedWhenever);
      expect(metadataFromId).toMatchSnapshot(updatedWhenever);
    });

    it('returns chapters in the correct order', async () => {
      const { chapters } = await poketo.getSeries('mangadex:13108');

      const sortedChapters = chapters
        .reverse()
        .slice(0, 80)
        .reverse();
      const chapterNumbers = sortedChapters.map(c =>
        parseFloat(c.chapterNumber),
      );
      const volumeNumbers = sortedChapters.map(c => parseFloat(c.volumeNumber));

      // Chapter numbers should appear in descending order
      const sortDescending = arr => arr.sort((b, a) => b - a);
      const sortedChapterNumbers = sortDescending(chapterNumbers);
      const sortedVolumeNumbers = sortDescending(volumeNumbers);

      expect(chapterNumbers).toEqual(sortedChapterNumbers);
      expect(volumeNumbers).toEqual(sortedVolumeNumbers);
    });

    it('throws for invalid urls', async () => {
      expect.assertions(1);

      await expect(
        poketo.getSeries('http://helveticascans.com/r/series/non-existent/'),
      ).rejects.toThrow(poketo.NotFoundError);
    });
  });

  describe('getChapter', () => {
    it('returns a chapter', async () => {
      expect.assertions(2);

      await expect(
        poketo.getChapter('http://merakiscans.com/senryu-girl/2'),
      ).resolves.toMatchSnapshot();
      await expect(
        poketo.getChapter('helvetica-scans:talentless-nana:en/1/2'),
      ).resolves.toMatchSnapshot();
    });

    it('throws for invalid urls', async () => {
      expect.assertions(3);

      await expect(poketo.getChapter('banana:dawg')).rejects.toThrow(
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
