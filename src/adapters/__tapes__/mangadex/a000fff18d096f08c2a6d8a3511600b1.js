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

  res.setHeader("date", "Mon, 13 Aug 2018 04:05:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=decf4b53510178a4eea4423b1fa1712c11534133121; expires=Tue, 13-Aug-19 04:05:21 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=6tf31iprbtmc3288atac6sd1bp; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44984d8bdc7e9384-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA0yOu2rEMBREfyVMLWzLWr/Ub5oUKVLGwdy1hGSwJSHJy4aQfw82hKQ853Jn5guLghR90w8XhrxsOmXaAiRv6qFrh7aqGSwlCwkhmp6aSsyd6vqWD5eZk5h7xVVza6m+geHu133TkGjBMFsKWceDOMeRntfj9mZ9zE/Pe9JgWMmZydH5dHVmXZL9tbNXhzVH8EbO0HRs5cPAGwYT/R5OUXd/NNWQ1T8UJ85+27TLCZJ3DEnH+7nK5hySHMuxTKI4C5R+FD6asVSUaSzBEMjoiWKkT8h3PHgRnMEHw+qdmVKOSzgbUqa8J0i8vuD7BwAA//8DACzvRJRUAQAA", "base64"));
  res.end();

  return __filename;
};
