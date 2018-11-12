var path = require("path");

/**
 * GET /api/reader/comic/stub/all_rounder_meguru_/format/json
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: reader.silentsky-scans.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 301;

  res.setHeader("location", "https://reader.silentsky-scans.net/api/reader/comic/stub/all_rounder_meguru_/format/json");
  res.setHeader("connection", "close");
  res.setHeader("content-length", "0");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
