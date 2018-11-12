// @flow

import makeFoolSlideAdapter from './shared/fool-slide';

const SilentSkyScans = makeFoolSlideAdapter({
  id: 'silent-sky-scans',
  name: 'Silent Sky Scans',
  foolSlideBaseUrl: 'https://reader.silentsky-scans.net/',
});

export default SilentSkyScans;
