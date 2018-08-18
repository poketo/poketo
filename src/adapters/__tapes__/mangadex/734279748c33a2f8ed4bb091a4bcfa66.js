var path = require("path");

/**
 * GET /api/manga/12545
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Sat, 18 Aug 2018 00:11:33 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=daa64d28d35a4470c614ee32eaf9708271534551093; expires=Sun, 18-Aug-19 00:11:33 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=8uutmsfv0lln9dcsbjv3fsra6s; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44c029ee8a4d9625-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA2yOwWrDMBAFfyW881JXjk0SXXJuQzC0udXFLM5GUbBlIa17Cfn34kLppdcZePPuGDk4hr2jn74kdXMaYNEWfmQnuS1+dFuYsq7qp1t0e1ObndlU2+0GhLPkPvmofgqwAEG9DgKLU+KQL5JW7zqfJWgGgZP6rLBo3l6OzalZHf3IgRcz63VK/5msrHOGLQlOQpIM+1HTjoyh0lC5prL6JAycteuvHFWWlWcsKLgu8LiceeXIQbL84svADha3iMdfAc0Bj28AAAD//w==", "base64"));
  res.write(new Buffer("AwBT/ZojDwEAAA==", "base64"));
  res.end();

  return __filename;
};
