// @flow

import makeFoolSlideAdapter from './shared/fool-slide';

const TukiScansAdapter = makeFoolSlideAdapter({
  id: 'tuki-scans',
  name: 'Tuki Scans',
  foolSlideBaseUrl: 'https://reader.tukimoop.pw/',
});

export default TukiScansAdapter;
