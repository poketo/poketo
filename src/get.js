// @flow

import got from 'got';
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
  return {
    ...opts,
    headers: {
      ...defaultHeaders,
      ...opts.headers,
      'User-Agent': userAgent,
    },
  };
};

async function get(url: string, opts?: RequestOptions) {
  try {
    return await got(url, getOptions(opts));
  } catch (err) {
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
  }
}

export default get;
