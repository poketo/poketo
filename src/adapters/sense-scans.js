// @flow

import makeFoolSlideAdapter from './shared/fool-slide';

const SenseScansAdapter = makeFoolSlideAdapter({
  id: 'sense-scans',
  name: 'Sense Scans',
  foolSlideBaseUrl: 'https://sensescans.com/reader/',
});

export default SenseScansAdapter;
