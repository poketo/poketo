var path = require("path");

/**
 * GET /api/chapter/37052
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
  res.setHeader("set-cookie", ["__cfduid=d636a0aba61ab1f05c0dadaf941c3905a1534131193; expires=Tue, 13-Aug-19 03:33:13 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=njgj643kq034i9fndrt5tps1mc; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44981e7869859384-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA0zTS2vcMBSG4b8SzlrMWHeNtiFQ6KKb7jLFqLLGdvANSw4TSv97Gbf+0t17ji+PMPgX9Q15aSstGJV+TLmEcSHPNbe2Uo5fGHUhd+RJqhgrbivVpBRjNBerg1bNLTqZbioaYvQ+D9uYyBMnRrELS0nrv6n0ZXhc+d6lpy+hpNs2PD2HQoyGMLX1FPbnXqZ26HN3bOPcPLbtT2I0hqkN9eO0XHJhGbXrvC37QijxOdaCfPXfKPcxzuOYppLJT9swMMppfd/P1pWyZH89X89ZnnajSffTvLbXcxNKuJ6J0RLaVId1DR/kX+nOT29LS4zu4rRMe8hjo47QR5gj7HGzO+JyBK9QHIWXc4lSKI0yKAgcBIchYAgYAoaAIWAIGAKGgCFgCBgShoQhPz8SDAlDwpAwJAwJQ8JQMBQMBUPBUDAUDAVDwVAwFAwNQ8PQMDQMDUPD0DA0DA1DwzAwDAwDw8AwMAwMA8PAMDAMDAvDwrAwLAwLw8KwMCwMC8PCcDAcDAfDwXAwHAz31/jBaJints5l7Zf9b80llC2Tp29f6fcfAAAA//8DAFVb9/mjBAAA", "base64"));
  res.end();

  return __filename;
};
