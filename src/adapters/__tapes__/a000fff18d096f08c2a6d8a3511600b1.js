var path = require("path");

/**
 * GET /api/chapter/385894
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 03:48:42 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=ded48fb8d2ad60c774e51056d6c670cd91534132122; expires=Tue, 13-Aug-19 03:48:42 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=rl1fb92e8rff8cbc5qdheg77u8; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44983523acdb6cbe-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA0yOTWuEMBRF/0q566ATNX5kP9100UWXtcgbE6KgSUjiMKX0vxcDpV2e83j33i+sCrLuRT80DGnddUy0e0guqqFrh/ZSMSwUF0jUtehJXOq5U13f8qGZOdVzr7gSt5aqGxjubjt2DYkWDPNCPulwEuc409N23t4WF9LT8xE1GDayZrKUn67WbGtcfu3s1GnNGbyTNTSdW/kwcMFggjt8FlX3R1MFefmHdcbZ7bu2KULyjiHqcM+rlpR8lGM5lrEpcoHSj8IFM5aKEo0lGDwZPVEI9An5jgcvvDX4YNicNVNMYfW5ISZKR4TE6wu+fwAAAP//AwCpeFu8VAEAAA==", "base64"));
  res.end();

  return __filename;
};
