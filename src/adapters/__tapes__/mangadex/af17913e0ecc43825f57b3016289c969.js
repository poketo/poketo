var path = require("path");

/**
 * GET /api/manga/19729
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 04:05:20 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=dcb0c825001a65cff24a9dbc6f8c69a191534133120; expires=Tue, 13-Aug-19 04:05:20 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=7l2bc1fdjhol9v6b0bhasf74uj; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44984d8279276d12-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA9Say27jNhRAf4Xgphs14fuhTTEdoC06KLLo7JoiYGxG5lQPg6QySQP/e0E90tgoiKJQIWVniVc0Dw7Jyyv7BTamrQwsX+Cue7T+rvc1LOHttWtMZcPt9dB8e421JPrqy7H6DnNCJCUMC1jAvQ07747RdS0s4Q++a8CPztcBuBZ83z3ZUIJfjHffBFA5Xz94Z9t9AT54F0wB6i7YAA7Wg8Y2nXc2gO4BxIMFRxMiiAdvLXi2xocCuHZX93vXVsDU9Rj/PEU7D2r3YEHsKhsP1l+Bn7qv9tH6ArgIYu/bALo+9WciuLepj503fz6nMdbdowVfXTyA0DW2ay2I3rRhZ9t9GL7JW1M3w7iOXQju3tUuPl/BAkYXawtL+PFgrX/oa/ChaW1wBhbQ+OhChCW8+aMHn01jmj4cXGro46Hz/9AQool9gCUuYGVbbwMsf8MFL4gqKC6o+r2AtQnxbncwx2hTDwimW21115omDeNnczStDXa+/VCbCpbwyxGeCvj62AtkhAmp0qfHru6HRxl8EwEJewM397br9umyuocFrHzXH+/cHpZE6/lyGsVH3z09fXvzaP2bwDsCS/Q2MN1o+7p+E0IvQ+gcEl1jQzTNEZaYUyolUlSfCsgQQpzkQOiWQRCXmDN2KiDlVPKsEbJhEKI4okirBIKFkiwHgrcMIijmmqJTAYnEWJ+D0HMQdMW3jMIUVxSlyUUYwVRmUbYMQplWEvFTAbFkhPEMCNZbBsGUaiQSCNOa0xyH2jAHlpopgmla7YpQIZcB4UJcgHwyjQOfUyquzXC4+H+0aI6EIDjNL6xJdnrJLWsRimHGxbAJEyHEMiCraRGEKiHkpOU8N5JzGrF5LTJxEISkWAhkNS1YEaEVnbSQHM2W0+OohQzpkTPC5TIgq2lhiEqKJi04S7Pls/2ghSo8a2HLgKyqBXE9aRE5mi1XKqM=", "base64"));
  res.write(new Buffer("FoFmLXQZkHW1YDJp4TmaLdddo5ahEh60LASyqhaMp5MYzq79LVeRF1oQWgZkTS1CvOaW7NrfciE5aiFo4iDLcKxlZaQZ6vtEcz7H8BnNloviAYMwNWIgvQjGqk4Iw+OrCqZEhmbLFT7BlGHFp/yI1CIY60qh00JBMgOz+fKeoKkeRnwRjFWdYDXD5NbJ5mt7rPmEQRfBWNcJV/Pmlcsom37xnTYvzubNCy+CsbKUOaPIXH7ccl0/SnndhNEiGOtKGWdYkpKbYv++GMaYXNCc/4h+wYK5uqSBv1r33Pfewf8oiOBh9ROk5SJIawpSCItZUG66kfclaKxelFaLIK27gsgsSORo8LsSNBVkSotFkFYVhKSeBeX2A/SeBKXT2unv/9rAm0/w9BcAAAD//wMAHajDL/8kAAA=", "base64"));
  res.end();

  return __filename;
};
