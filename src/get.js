// @flow

import got from 'got';
import errors from './errors';

type RequestOptions = {
  json?: boolean,
  timeout?: number,
};

async function get(url: string, opts: RequestOptions) {
  try {
    return await got(url, opts);
  } catch (err) {
    switch (err.name) {
      case 'HTTPError':
        if (err.statusCode === 404) {
          throw new errors.NotFoundError(url);
        }
        throw new errors.HTTPError(err.statusCode, err.statusMessage, url);
      case 'TimeoutError':
        throw new errors.TimeoutError(err.message, url);
      default:
        throw err;
    }
  }
}

export default get;
