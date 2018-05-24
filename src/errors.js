// @flow

type ErrorCode =
  | 'INVALID_URL'
  | 'UNSUPPORTED_SITE'
  | 'UNSUPPORTED_SITE_REQUEST'
  | 'NOT_FOUND';

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
    super('INVALID_URL', `Could not parse url '${url}'`);
  }
}

class NotFoundError extends PoketoError {
  constructor(url: string) {
    super('NOT_FOUND', `Could not find resource at '${url}'`);
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
  InvalidUrlError,
  NotFoundError,
  UnsupportedSiteError,
  UnsupportedSiteRequestError,
};
