// @flow

import makeFoolSlideAdapter from './shared/fool-slide';

const HotChocolateScansAdapter = makeFoolSlideAdapter({
  id: 'hot-chocolate-scans',
  name: 'Hot Chocolate Scans',
  foolSlideBaseUrl: 'http://hotchocolatescans.com/fs/',
});

export default HotChocolateScansAdapter;
