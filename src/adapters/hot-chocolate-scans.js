// @flow

import makeFoolSlideAdapter from './shared/fool-slide';

const HotChocolateScansAdapter = makeFoolSlideAdapter({
  id: 'hot-chocolate-scans',
  name: 'Hot Chocolate Scans',
  domain: 'http://hotchocolatescans.com',
  foolSlidePath: '/fs/',
});

export default HotChocolateScansAdapter;
