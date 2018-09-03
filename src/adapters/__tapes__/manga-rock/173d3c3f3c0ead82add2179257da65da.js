var path = require("path");

/**
 * GET /query/web400/pages?oid=mrs-chapter-100259395
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: api.mangarockhd.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:19 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("content-length", "103");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d93fc6ee4fc3aa9aa01566157ccf2d2251535939359; expires=Tue, 03-Sep-19 01:49:19 GMT; path=/; domain=.mangarockhd.com; HttpOnly"]);
  res.setHeader("cache-control", "no-cache");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("etag", "W/\"0fbdab05d9031e572552335a689178e0becc0dc1\"");
  res.setHeader("expected-size", "103");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f237e981e65-SJC");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAC/6pWSs5PSVWyMtBRSkksSVSyilbKKCkpKLbS108zMNTLLUpOydPLzEvL10/LzEnVzy0CUcX6mfpm+nn6OfohxnrGTlEhfuYFpnq5RZlKsbWAAAAA//+d602ZUQAAAA==", "base64"));
  res.end();

  return __filename;
};
