var path = require("path");

/**
 * GET /query/web401/pages?oid=mrs-chapter-100259395
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: api.mangarockhd.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 21 Nov 2018 23:37:07 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("content-length", "103");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d210b11b3c7b5e87a3385b82a7371785e1542843427; expires=Thu, 21-Nov-19 23:37:07 GMT; path=/; domain=.mangarockhd.com; HttpOnly"]);
  res.setHeader("cache-control", "no-cache");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("etag", "W/\"0fbdab05d9031e572552335a689178e0becc0dc1\"");
  res.setHeader("expected-size", "103");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "47d6fb7d1b7a94d5-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAC/6pWSs5PSVWyMtBRSkksSVSyilbKKCkpKLbS108zMNTLLUpOydPLzEvL10/LzEnVzy0CUcX6mfpm+nn6OfohxnrGTlEhfuYFpnq5RZlKsbWAAAAA//+d602ZUQAAAA==", "base64"));
  res.end();

  return __filename;
};
