var path = require("path");

/**
 * GET /manga/komi_san_wa_komyushou_desu/c172/chapterfun.ashx?cid=565455&key=72382f4ad4bd67cf
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: fanfox.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Sun, 02 Dec 2018 02:00:58 GMT");
  res.setHeader("content-length", "0");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d32587b6713a9720bf39b3e7029fd48c11543716058; expires=Mon, 02-Dec-19 02:00:58 GMT; path=/; domain=.fanfox.net; HttpOnly","SERVERID=node2; path=/"]);
  res.setHeader("cache-control", "private");
  res.setHeader("x-aspnet-version", "4.0.30319");
  res.setHeader("x-powered-by", "ASP.NET");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-headers", "*");
  res.setHeader("access-control-allow-methods", "GET, POST, PUT, DELETE");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "482a33f69d819547-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
