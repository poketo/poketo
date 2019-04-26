var path = require("path");

/**
 * GET /api/chapter/385894
 *
 * user-agent: got/9.6.0 (https://github.com/sindresorhus/got)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 26 Apr 2019 03:22:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d0fc5911ab03ac2921b911cf97aeef5a51556248933; expires=Sat, 25-Apr-20 03:22:13 GMT; path=/; domain=.mangadex.org; HttpOnly"]);
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4cd56e5cee1ecaa6-YYZ");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA0yOTWuEMBRF/0q566BGJ35kP9100UWXtcgbExJBk5DEYUrpfy8KpV2e83j33i8sCrLpRT9cGPKy6ZRpC5Bc1EPXDm1VM1hKFhJNI3oSVTN3qutbPlxmTs3cK67EraX6Boa7X/dNQ6IFw2wpZB0P4hxHel6P25v1MT8970mDYSVnJkfn09WZdUn2185eHdYcwRs5Q9OxlQ8DFwwm+j2cou7+aKohq3/YnDj7bdMuJ0jeMSQd7+cqm3NIcizHMoniLFD6UfhoxlJRprEEQyCjJ4qRPiHf8eBFcAYfDKt3Zko5LuFsSJnyniDx+oLvHwAAAP//AwCzJ7R9VAEAAA==", "base64"));
  res.end();

  return __filename;
};
