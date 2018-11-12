var path = require("path");

/**
 * GET /query/web400/pages?oid=mrs-chapter-100259395
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: api.mangarockhd.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:24 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("content-length", "103");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d63e6d3ba35382d903ebff6f035a66d6f1541997624; expires=Tue, 12-Nov-19 04:40:24 GMT; path=/; domain=.mangarockhd.com; HttpOnly"]);
  res.setHeader("cache-control", "no-cache");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("etag", "W/\"0fbdab05d9031e572552335a689178e0becc0dc1\"");
  res.setHeader("expected-size", "103");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4786520039daa572-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAC/6pWSs5PSVWyMtBRSkksSVSyilbKKCkpKLbS108zMNTLLUpOydPLzEvL10/LzEnVzy0CUcX6mfpm+nn6OfohxnrGTlEhfuYFpnq5RZlKsbWAAAAA//+d602ZUQAAAA==", "base64"));
  res.end();

  return __filename;
};
