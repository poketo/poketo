var path = require("path");

/**
 * GET /api/manga/13025
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 03:33:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d17091ed74ea9aa0bbf909a3eb3e08e101534131192; expires=Tue, 13-Aug-19 03:33:12 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=93t0f482385po3uddb0e93aoh9; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44981e73697f9625-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA9TZz2+kNhQH8H/l6R32xCbY/GYPVaVoV+1qm8PmtqlGb8EBJ2CPbJN0FOV/ryBjmuZgqYcefBvAePjMMO/78DzjTGogbJ+x04/CHBYzYYu3l3KmQdjby+3w7SXLUl5c3B+HX1jBGlbldcMxwV7Yzsijk1phi7/2j0K5xQhjoZePAqRyGtwooCc1CKMXC/2iBqEVPEk3bodGMR1B322vP0zu0xdDnfgwuE8wGFJO9PDzBM6Qsp1QvVCOJhB/SeuE6oSFjqZJ9PBF9/YCbkZpQdptLuu0OYEbycEme907yomM3C6E5HSCSd6J9d3t0o3bJEBqm60X1orXLTcKabZr+0yznCStV5fA06iBjIA7bTrRg9NgFgVk9KJ60Op82tMoZ3uBCTrpJoEtXp0/ACXhSpAEDd+007MwCygNTwTfqBvlQM4J+M0scLXOCA8E+YOeCT7CV5rlR0szreP/kN0o7/WCCZJx0jps8YYeaF7MOpOlE62HFjdqgy1e61kbCZ+Xe6k0JmgducViyxMchDLCYvuDJVlSJCxNGE8y9meCE1l36EY6OrHOwRpc96nhoGheRb/TkZSwwu++m2jAFu+P+JLgft4zsqbOimp99ainZTt1vYfezew/Jz9bp/t1c/iJCQ5GL8eD7LHlnPnN81VcKwE3chbwvSNl3ww+cGzTt4PXHWqZpjdDsvdDMj/EyVlYR/MRW1ZwVpUFK6uX5BVThjB1FJii9pgihKniwDCPyUOYMgpMXnpMFsIUcWD2b4aFMHkUmGzHpCFMFgWGF2dM3oQwPAoMazymDmFYHJjcY4KhmUaBST2mDGGiaAB4xr0l1ABEkf98//mXoZSpLqKIGZ761qwMdTNRNDOc7RYesETRy/DUJ2YZiv84Wplmr2Sh9I+jk6m9pQiFfxyNTLU/loWyP44+pvIJkwcfMWOwpPvvpfp3wrB3rX8=", "base64"));
  res.write(new Buffer("HBGTV76UVXmQEwdm/254CBNFAchL38pULISJogLk5X6bpSFMFCUg3xeZyiaESSMpAcV+o1VBzn/ApPyd5ruepCNzgpt16XuibYn9/zOVTXo21UXA1EREqvhOClXqOiYS82uCdShLq6hImSeFIqiMiZT6Vag6FERFVCRf8upQHOVRkfaEDYVSFlUR9zdeVQdIPCrSnrVlKGtjItXly8s/f73i9Vd8+RsAAP//", "base64"));
  res.write(new Buffer("AwCRsyNxhx8AAA==", "base64"));
  res.end();

  return __filename;
};
