// @flow

import makeFoolSlideAdapter from './shared/fool-slide';

const SilentSkyScans = makeFoolSlideAdapter({
  id: 'silent-sky-scans',
  name: 'Silent Sky Scans',
  domain: 'http://reader.silentsky-scans.net/',
  foolSlidePath: '',
  timeZone: 'UTC',
});

export default SilentSkyScans;
