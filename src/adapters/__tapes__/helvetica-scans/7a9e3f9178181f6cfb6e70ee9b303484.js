var path = require("path");

/**
 * GET /r/api/reader/comic/stub/talentless-nana/format/json
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: helveticascans.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:44:57 GMT");
  res.setHeader("server", "Apache");
  res.setHeader("x-powered-by", "PHP/7.0.32");
  res.setHeader("set-cookie", ["ci_session=Cpv64XhkbLWpv1TCieYEmm3bOc9gfo7tNBfxP2srtS0OzuEpq378Qsww21aliiDcLmsMx%2BTtg%2F02blJ5U3n5A%2BlJhImVIUqLLmMA%2BzJ1WS1YdrMm7K7WHFJfKJIZPibS2ksR6bL6z0XGT6a4dkC4l8nPntRVvdnPesdTYCc5Sj0ID9hPWyP7wRp5r9UrEcJ%2FDMjCQpjgD%2Fcfj%2F1OgxH53Q5jfGY3N7vVxyVoJRHETszzXVOXmo1Aw7z4tIvEI%2F6JFp47IRiVKMFiTyWbeZyFDYPykLU5dqBaFqa3nwX%2FrEK0Y%2FsO1eOnwWuDj83kzfttTNw%2FliX7wliMQ9FddNBy%2BN7jdJHQ9YsvMyIUHqjaZuMfd9EDZ%2BFGA50CEML%2B2A3x; expires=Mon, 12-Nov-2018 06:44:57 GMT; Max-Age=7200; path=/","ci_session=NTnWELPyL7yV%2BwN0Lg%2F%2FL%2F4QoA%2FJLN4LFVVRzKcOtSlIcW3Ls9I%2B2nVEu8EiXzlc%2FEdCvQKbTYYbRvzrkozfQwui1Fgl5FCBqLJ8FHvLpPOuTXA%2BH5rnUNlpzQZYZgSETR58qHfjZBPOL3W7rvpKIuXRt4aS1r3JnPGHnBzlDPGg9aS1EM0azIsqt9GJUKCrdIAsjOs6JjXLmiP%2BurLXqjeUsyi%2BOoQoSFI5Pnnu%2BNF5aggyjSufLPNKOJ9PbWtx%2FQEb06HduOVC67kGuzVwt4C53Gku62Yv%2FuF4ASnF4RGkV8cQ1Mbiso%2BSq0m%2B9HK7qN9izhRb0UBujJxWCfdJhQ%3D%3D; expires=Mon, 12-Nov-2018 06:44:57 GMT; Max-Age=7200; path=/"]);
  res.setHeader("last-modified", "Mon, 12 Nov 2018 04:44:57 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("content-length", "2489");
  res.setHeader("content-type", "application/json");
  res.setHeader("x-varnish", "658591444");
  res.setHeader("age", "0");
  res.setHeader("via", "1.1 varnish (Varnish/6.1)");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
