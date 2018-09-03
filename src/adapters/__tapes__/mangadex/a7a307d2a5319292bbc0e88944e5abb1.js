var path = require("path");

/**
 * GET /api/chapter/385894
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:23 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d8ace8d0ce82b20f65b8bf6c8018be7231535939363; expires=Tue, 03-Sep-19 01:49:23 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=01i2hhl5p4kelrn9oddrkovcnu; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f3b8a4c6c1c-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA0yOu2rEMBREfyVMLWzLXr/Ub5oUKVLGwdy1hGywJSHJy4aQfw8ShKQ853Jn5gubhGiGdhgvDHE7VIh0OAje1mPfjV1VM6wUVgg0TTtQWzVLL/uh4+Nl4dQsg+SyvXVU38Bwt/t5KAh0YFhWclH5RJwjpcc93d5W6+PT8xkUGHYyejaUn65G71tYf+1iZbI6BR9kNM1pKx9H3jJob0+XRd3/0VxDVP+wybjY41AmBgjeMwTl73nVGqMLYiqnMtRFLpDqUVivp1JSpKkEgyOtZvKePiHe8eCFMxofDLs1eg7Rby43hEjxDBB4fcH3DwAAAP//AwA2sKtVVAEAAA==", "base64"));
  res.end();

  return __filename;
};
