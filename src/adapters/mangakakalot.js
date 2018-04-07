// @flow

import generateMangakakalotAdapter from './mangakakalot.shared';

/**
 * Mangakakalot has a mirror (I think?) up at different domains, so the logic
 * for fetching is shared between the sites.
 */

export default generateMangakakalotAdapter(
  'mangakakalot',
  'Mangakakalot',
  'http://mangakakalot.com',
);
