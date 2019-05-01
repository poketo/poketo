// @flow

import got from 'got';
import { catchCloudflare } from '@ctrl/cloudflare';
import tough from 'tough-cookie';
import pkg from '../package';
import errors from './errors';

type RequestOptions = {
  headers?: Object,
  json?: boolean,
  timeout?: number,
};

const version = process.env.NODE_ENV === 'test' ? 'test' : pkg.version;
const userAgent = `${pkg.name}/${version} (${pkg.repository})`;

export let defaultHeaders = {};

export function setDefaultHeaders(headers: Object) {
  console.log(instance.defaults);
  instance.defaults.options = got.mergeOptions(
    instance.defaults.options,
    { headers },
  );
}

const cookieJar = new tough.CookieJar();

const instance = got.extend({
  cookieJar,
  headers: {
    'User-Agent': userAgent,
  },
  retry: {
    statusCodes: [408, 413, 429, 500, 502, 504],
  },
  hooks: {
    beforeError: [
      err => {
        const { response } = err;

        if (err instanceof got.HTTPError) {
          if (err.statusCode === 404) {
            return new errors.NotFoundError(err.url);
          }
          return new errors.HTTPError(err.statusCode, err.statusMessage, err.url);
        } else if (err instanceof got.RequestError) {
          if (err.code === 'ETIMEDOUT') {
            return new errors.TimeoutError(err.message, err.url);
          }
          return new errors.RequestError(err.url);
        }

        return new errors.PoketoError('ERROR', err.message);
      },
    ],
  },
  mutableDefaults: true,
});

export default instance;
