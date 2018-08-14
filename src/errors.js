// @flow

type ErrorCode =
  | 'INVALID_URL'
  | 'UNSUPPORTED_SITE'
  | 'UNSUPPORTED_SITE_REQUEST'
  | 'TIMEOUT'
  | 'HTTP_ERROR';

class PoketoError extends Error {
  code: ErrorCode;
  constructor(errorCode: ErrorCode, message: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = errorCode;
  }
}

class InvalidUrlError extends PoketoError {
  constructor(url: string) {
    super('INVALID_URL', `Unable to parse url '${url}'`);
  }
}

class HTTPError extends PoketoError {
  statusCode: number;
  url: string;

  constructor(statusCode: number, message: string, url: string) {
    super('HTTP_ERROR', message);
    this.statusCode = statusCode;
    this.url = url;
  }
}

class NotFoundError extends HTTPError {
  constructor(url: string) {
    super(404, 'Not Found', url);
  }
}

class TimeoutError extends PoketoError {
  constructor(message: string, url: string) {
    super('TIMEOUT', message);
  }
}

class UnsupportedSiteError extends PoketoError {
  constructor(site: string) {
    super('UNSUPPORTED_SITE', `Site at '${site}' is not supported`);
  }
}

class UnsupportedSiteRequestError extends PoketoError {
  constructor(siteName: string, operationName: string) {
    super(
      'UNSUPPORTED_SITE_REQUEST',
      `${siteName} does not support ${operationName}`,
    );
  }
}

export default {
  PoketoError,
  HTTPError,
  InvalidUrlError,
  NotFoundError,
  TimeoutError,
  UnsupportedSiteError,
  UnsupportedSiteRequestError,
};
