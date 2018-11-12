var path = require("path");

/**
 * GET /api/chapter/385894
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:27 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d46f9eaf09ff5be244a3c88e6fef869751541997626; expires=Tue, 12-Nov-19 04:40:26 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=mlrlmgfi0c0ilkdrokh5d0vt6f; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4786520eab16950b-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA0yOu2rEMBREfyVMLWzLWr/Ub5oUKVLGwdy1hGSwJSHJy4aQfw82hKQ853Jn5guLghR90w8XhrxsOmXaAiRv6qFrh7aqGSwlCwkhmp6aSsyd6vqWD5eZk5h7xVVza6m+geHu133TkGjBMFsKWceDOMeRntfj9mZ9zE/Pe9JgWMmZydH5dHVmXZL9tbNXhzVH8EbO0HRs5cPAGwYT/R5OUXd/NNWQ1T8UJ85+27TLCZJ3DEnH+7nK5hySHMuxTKI4C5R+FD6asVSUaSzBEMjoiWKkT8h3PHgRnMEHw+qdmVKOSzgbUqa8J0i8vuD7BwAA//8DACzvRJRUAQAA", "base64"));
  res.end();

  return __filename;
};
