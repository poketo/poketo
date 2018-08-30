// @flow

export type PublicationStatus = 'ONGOING' | 'COMPLETED' | 'UNKNOWN';

export type PageDimensions = {
  width: number,
  height: number,
};

export type Page = {
  id: string,
  url: string,
  width?: number,
  height?: number,
};

export type IdComponents = {
  siteId: string,
  seriesSlug: ?string,
  chapterSlug: ?string,
};

type BaseChapter = {
  slug: string,
};

export type ChapterMetadata = {
  ...BaseChapter,
  title: string,
  chapterNumber: ?string,
  volumeNumber: ?string,
  createdAt: number,
};

export type Chapter = {
  ...BaseChapter,
  url: string,
  pages: Array<Page>,
};

export type Series = {
  id: string,
  slug: string,
  url: string,
  title: string,
  coverImageUrl?: string,
  chapters?: ChapterMetadata[],
  updatedAt: number,
};

export type Author = { name: string, role: AuthorRole };
export type AuthorRole = 'art' | 'story' | 'unknown';

export type SiteAdapter = {
  id: string,
  name: string,
  _getHost: () => string,
  constructUrl: (seriesSlug: ?string, chapterSlug: ?string) => string,
  supportsUrl: (url: string) => boolean,
  supportsReading: () => boolean,
  parseUrl: (url: string) => { seriesSlug: ?string, chapterSlug: ?string },
  getSeries: (
    seriesSlug: string,
  ) => Promise<{
    slug: string,
    url: string,
    title: string,
    description: ?string,
    authors: Author[],
    publicationStatus: PublicationStatus,
    coverImageUrl?: string,
    chapters?: ChapterMetadata[],
    updatedAt?: number,
  }>,
  getChapter: (
    seriesSlug: ?string,
    chapterSlug: string,
  ) => Promise<{
    slug: string,
    url: string,
    seriesSlug?: string,
    pages: Page[],
  }>,
};
