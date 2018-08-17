// @flow

import got from 'got';
import errors from './errors';

type RequestOptions = {
  headers?: Object,
  json?: boolean,
  timeout?: number,
};

async function get(url: string, opts?: RequestOptions) {
  try {
    return await got(url, opts);
  } catch (err) {
    if (err instanceof got.HTTPError) {
      if (err.statusCode === 404) {
        throw new errors.NotFoundError(url);
      }
      throw new errors.HTTPError(err.statusCode, err.statusMessage, url);
    } else if (err instanceof got.TimeoutError) {
      throw new errors.TimeoutError(err.message, url);
    } else if (err instanceof got.RequestError) {
      throw new errors.RequestError(url);
    }

    throw new errors.PoketoError('ERROR', err.message);
  }
}

export default get;
