var path = require("path");

/**
 * GET /api/manga/13025
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
  res.setHeader("set-cookie", ["__cfduid=db97ccace8ce094ec8342f87304ffc8e31556248933; expires=Sat, 25-Apr-20 03:22:13 GMT; path=/; domain=.mangadex.org; HttpOnly"]);
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4cd56e5b6b5fab3c-YYZ");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA9TZz2/bNhQH8H/l4R16UhOR+q0eigFBi63ocmhuzWC8SozERCINkkpmBPnfBymm1uVAYIceeLMkmuLHovl9pp9xJjUQts/Y6UdhDouZsMXbSznTIOzt5Xb59pJlKS8u7o/DR1awhlV53XBMsBe2M/LopFbY4m/9o1BuMcJY6OWjAKmcBjcK6EkNwujFQr+oQWgFT9KN26VRTEfQd9vrd5P78NlQJ94N7gMMhpQTPfw4gTOkbCdUL5SjCcTf0jqhOmGho2kSPXzWvb2Am1FakHbryzptTuBGcrDJXs+OciIjt4GQnE4wyTux3t0u3bh1AqS23nphrXg9cqOQZhvbJ5rlJGkdXQJPowYyAu606UQPToNZFJDRi+pBq/PbnkY52wtM0Ek3CWzx6vwBKAlXgiRo+KqdnoVZQGl4IvhK3SgHck7A72aBq7VHeCDIH/RM8B6+0CzfW5ppbf+n7EZ5rxdMkIyT1mGLN/RA82LWniydaL20uFEbbPFaz9pI+LTcS6UxQevILRZbnuAglBEW2+8syZIiYWnCeJKxvxKcyLpDN9LRibUP1uB6Tg0HRfMq+oOOpIQV/vTdRAO2eH/EBMf1gUls0wQnqR7sOtHmZe2FZU3BMMGZ1glX1XlV4MtLgvuNnpE1dVZU66tHPS3bvdZJ92Yo/oP1t+90vx4OPzDBwejleJA9tpwzf3ge9rUScCNnAd86Uvanxge+jfffxusJtUzTT02yt00y38TJWVhH8xFbVnBWlQUrq5fkFVOGMHUUmKL2mCKEqeLAMI/JQ5gyCkxeekwWwhRxYPYnw0KYPApMtmPSECaLAsOLMyZvQhgeBYY1HlOHMCwOTO4xwdBMo8CkHlOGMFEUADzj3hIqAKLIf75//ctQylQXUcQMT31pVoaqmSiKGc52Cw9YoqhleOoTswzFfxylTLOvZKH0j6OSqb2lCIV/HIVMtf8sC2V/HHVM5RMmD/7EjMGS7t+X6r8Jw96U/nFETF75pazKg5w4MPuz4SFMFAtAXvpSpmIhTBQrQF7u0ywNYaJYAvJ9k6lsQpg0kiWg2CdaFeT8D0zK32i+6Uk6Mie4WffKJ9r25H+dqWzSs6kuAqYmIlLFd1Jopa5jIjG/J1iHsrSKipR5UiiCyphIqd+FqkNBVERF8kteHYqjPCrSnrChUMqiWsT9xKvqAIlHRdqztgxlbUykulz/", "base64"));
  res.write(new Buffer("GPX/1eL1F3z5BwAA//8DAHEtzIW4HwAA", "base64"));
  res.end();

  return __filename;
};
