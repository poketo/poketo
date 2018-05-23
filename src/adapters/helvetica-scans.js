// @flow

import makeFoolSlideAdapter from './shared/fool-slide';

const HelveticaScansAdapter = makeFoolSlideAdapter({
  id: 'helvetica-scans',
  name: 'Helvetica Scans',
  domain: 'http://helveticascans.com/',
  foolSlidePath: '/r/',
  timeZone: 'UTC',
});

export default HelveticaScansAdapter;
