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
  defaultHeaders = { ...defaultHeaders, ...headers };
}

const getOptions = (opts: RequestOptions = {}) => {
  const cookieJar = new tough.CookieJar();

  return {
    ...opts,
    // headers: {
    // ...defaultHeaders,
    // ...opts.headers,
    // 'User-Agent': userAgent,
    // },
    retry: 0,
    // retry: {
    //   statusCodes: [408, 413, 429, 500, 502, 504],
    // },
  };
};

async function gotWithCloudflare(url: string, opts?: RequestOptions) {
  const options = getOptions(opts);

  let res;

  try {
    res = await got(url, options);
  } catch (err) {
    res = await catchCloudflare(err, options);
  }

  return res;
}

export default async function get(url: string, opts?: RequestOptions) {
  return gotWithCloudflare(url, opts).catch(err => {
    if (err instanceof got.HTTPError) {
      if (err.statusCode === 404) {
        throw new errors.NotFoundError(url);
      }
      throw new errors.HTTPError(err.statusCode, err.statusMessage, url);
    } else if (err instanceof got.RequestError) {
      if (err.code === 'ETIMEDOUT') {
        throw new errors.TimeoutError(err.message, url);
      }
      throw new errors.RequestError(url);
    }
    throw new errors.PoketoError('ERROR', err.message);
  });
}
