// @flow

import makeFoolSlideAdapter from './shared/fool-slide';

const KireiCakeAdapter = makeFoolSlideAdapter({
  id: 'kirei-cake',
  name: 'Kirei Cake',
  foolSlideBaseUrl: 'https://reader.kireicake.com/',
});

export default KireiCakeAdapter;
