var path = require("path");

/**
 * GET /manga/urami_koi_koi_urami_koi
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: mangakakalot.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 301;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:22 GMT");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("expires", "Mon, 12 Nov 2018 05:40:22 GMT");
  res.setHeader("location", "https://mangakakalot.com/manga/urami_koi_koi_urami_koi");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "478651f397509535-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
