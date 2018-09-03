var path = require("path");

/**
 * GET /r/api/reader/comic/stub/talentless-nana/format/json
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: helveticascans.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:28 GMT");
  res.setHeader("server", "Apache");
  res.setHeader("x-powered-by", "PHP/7.0.30");
  res.setHeader("set-cookie", ["ci_session=vF9za601qen%2BK1O9cUerEiuZxfQulDovTkX8dlRYjlbU0olie%2FsHb3VHEMLuD38O54znzrSVpEHWU1Yv8CJZFQeqG1qkiwsSBVd6hVH%2BKRbYUPmqDkO5I14SJT0gffDfMjA1LOidaByxKdS37JHSpoePweUPEL4OgP8QrmrEcmAXfB73HCpibyi1FC6nbA99EJSIxQ7mUkQAp%2BHEKnzcnGVGHajevqq0nDNjpabacQ7whQGwp2UCcelfOe1yyX%2Ffm5vZpLvlCmXe85MWR7rREW96b0x5zx6qj071tt2Pajyl51lLiDCZBdeVAYp20DGGrCFp65DzpCY427%2FxUBOESA%3D%3D; expires=Mon, 03-Sep-2018 03:49:28 GMT; Max-Age=7200; path=/","ci_session=J5e%2BP%2B%2F5WMj6c8JLB1Jq3MmUsP9kPD88Juk2MemY%2BO3FrABPTz%2FFphpqs0lIVDy3Qw6jMDFmZrFvzUzJjL60i2BJfHyGh54m2krPiFq8d1yFhmD9lhbRg9iwZ6mnTwG2ImLginpF5rU3sa8mjSuzOyZgPOiOGT6ubvdXNbkvVz0d3BbwM0WnFt5S7IYF%2BHnnL%2B8sv3lapRI9eYTxemNy1eTBNzU3nVZldfCaMyLsLK5TrXpbLcYoFaMbYJbPwhY3Wtb6I7yspeZMLuokB7qteR9FzgD66CwI59TbaRiqWwsfBDVnxV3cDlty4igToQQyY1pnrjbTeJyAC%2FMc9lQX9w%3D%3D; expires=Mon, 03-Sep-2018 03:49:28 GMT; Max-Age=7200; path=/"]);
  res.setHeader("last-modified", "Mon, 03 Sep 2018 01:49:29 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("content-length", "2378");
  res.setHeader("content-type", "application/json");
  res.setHeader("x-varnish", "398367408");
  res.setHeader("age", "0");
  res.setHeader("via", "1.1 varnish (Varnish/6.0)");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("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", "base64"));
  res.end();

  return __filename;
};
