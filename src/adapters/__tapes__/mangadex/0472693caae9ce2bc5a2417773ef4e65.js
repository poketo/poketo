var path = require("path");

/**
 * GET /api/manga/12545
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 404;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:26 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d39f766d7c624317d1164be74e2c03b941541997625; expires=Tue, 12-Nov-19 04:40:25 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=0n9k4ihveoulok3uni3872kuqu; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "478652077a1ca518-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA6pWKi5JLCktVrJS8k3MS09U8HRRSMlPLVbIyy9RSK3ILC7RU6oFAAAA//8DAMW/z1AlAAAA", "base64"));
  res.end();

  return __filename;
};
