// @flow

import makeFoolSlideAdapter from './shared/fool-slide';

const PhoenixSerenadeAdapter = makeFoolSlideAdapter({
  id: 'phoenix-serenade',
  name: 'Phoenix Serenade',
  foolSlideBaseUrl: 'https://reader.serenade.moe/',
});

export default PhoenixSerenadeAdapter;
