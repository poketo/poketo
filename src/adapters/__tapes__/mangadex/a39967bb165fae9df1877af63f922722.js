var path = require("path");

/**
 * GET /api/manga/12545
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=dcead3df12322bf41d132ee723b2fe5c51535939362; expires=Tue, 03-Sep-19 01:49:22 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=adnnjaq7nj23tuurio56jlki32; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f370cba6d8a-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA2yOwWrDMBAFfyW881JXjk0SXXJuQzC0udXFLM5GUbBlIa17Cfn34kLppdcZePPuGDk4hr2jn74kdXMaYNEWfmQnuS1+dFuYsq7qp1t0e1ObndlU2+0GhLPkPvmofgqwAEG9DgKLU+KQL5JW7zqfJWgGgZP6rLBo3l6OzalZHf3IgRcz63VK/5msrHOGLQlOQpIM+1HTjoyh0lC5prL6JAycteuvHFWWlWcsKLgu8LiceeXIQbL84svADha3iMdfAc0Bj28AAAD//wMAU/2aIw8BAAA=", "base64"));
  res.end();

  return __filename;
};
