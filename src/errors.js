// @flow

type ErrorCode =
  | 'ERROR'
  | 'HTTP_ERROR'
  | 'INVALID_ID'
  | 'INVALID_URL'
  | 'REQUEST_ERROR'
  | 'UNSUPPORTED_SITE'
  | 'UNSUPPORTED_OPERATION'
  | 'TIMEOUT';

class PoketoError extends Error {
  code: ErrorCode;

  constructor(errorCode: ErrorCode, message: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = errorCode;
  }
}

class InvalidIdError extends PoketoError {
  constructor(id: string) {
    super('INVALID_ID', `'${id}' is not a valid Poketo ID`);
  }
}

class InvalidUrlError extends PoketoError {
  constructor(url: string) {
    super('INVALID_URL', `Unable to parse '${url}'`);
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

class RequestError extends PoketoError {
  constructor(url: string) {
    super('REQUEST_ERROR', `Failed to make a request to '${url}'`);
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
  constructor(url: string) {
    super('UNSUPPORTED_SITE', `Site '${url}' is not supported`);
  }
}

class UnsupportedOperationError extends PoketoError {
  constructor(siteName: string, operationName: string) {
    super(
      'UNSUPPORTED_OPERATION',
      `${siteName} does not support ${operationName}`,
    );
  }
}

export default {
  PoketoError,
  HTTPError,
  InvalidIdError,
  InvalidUrlError,
  NotFoundError,
  RequestError,
  TimeoutError,
  UnsupportedSiteError,
  UnsupportedOperationError,
};
