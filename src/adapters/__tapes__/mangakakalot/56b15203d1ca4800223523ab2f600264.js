var path = require("path");

/**
 * GET /chapter/urami_koi_koi_urami_koi/chapter_5
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: mangakakalot.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 301;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:27 GMT");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("expires", "Mon, 12 Nov 2018 05:40:27 GMT");
  res.setHeader("location", "https://mangakakalot.com/chapter/urami_koi_koi_urami_koi/chapter_5");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "47865212915b94b7-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
