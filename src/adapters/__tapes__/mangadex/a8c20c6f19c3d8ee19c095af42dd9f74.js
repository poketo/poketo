var path = require("path");

/**
 * GET /api/manga/19729
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:24 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=ddc6d6e30c77fbcfacca36fb886db8b3a1541997624; expires=Tue, 12-Nov-19 04:40:24 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=rv9vmpld8qkoglvu0nk3s3ev1p; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "478651fe1cf79493-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA9SaW2/bNhSA/wrBl71oKQ/v9MvQFdiGFUMe2rdmCBibsdnpYpBUmqzwfx90y2JjIIZChZQ3SzqW+eE75OGR9RVXtt5bvPmKt82DC7dtKPEG37zxld27ePOmv3zzBoyi5urzcf8TCEoVoxwkLvDOxW3wx+SbGm/wL6Gp0K8+lBH5Gv3cPLq4QX/Y4H+IaO9DeR+8q3cFeht8tAUqm+giOriAKlc1wbuImnuUDg4dbUwoHYJz6MnZEAvk623Z7ny9R7Ysh/inMdoHVPp7h1Kzd+ngwhX6rfniHlwokE8otaGOqGm7+9mE7lx3j22wfz91YyybB4e++HRAsalcUzuUgq3j1tW72P9ScLas+nEdmxj9nS99errCBU4+lQ5v8LuDc+G+LdHbqnbRW1xgG5KPCW/w9V8t+mgrW7Xx4LsLbTo04T8uxGRTG/EGCrx3dXARbz5BIQqqCwYF038WuLQx3W4P9phcdweCu1P1/ra2VTeM3+3R1i666fR9afd4gz8f8anAz1/7irnSwHX36aEp2/6rHL+IwFS9gJvutm123eH+Dhd4H5r2eOt3eEONmQ7HUbwLzePjj9cPLrwIvKV4Q14GdifqtixfhLDLEDaFJF+5mGx1xBsQHLiUVJtTgbkkwGkORK4YhGktmCK6AxEaFORAxKpBBNVE9CCUS5VNLb5mEKYU0axPLUKIyKYWWzMIEQoE56cCM8GUyBqhKwahWhBGTJdaDKRWPAcCawaRDIRh5FRgqgDMOQg7ByFXa57ulGuhGemSi3IKTGVR1gzCuNGKiFOBQXHKRQYEzJpBgDFDZAfCjREsx6FXzAHKcE2BdbNdUybVPCBCyguQ97by6GO3yyttv2/9PlqMIFJS6PILDM2m15p3XCA1By5kvwhTKeU8IItpkZRpKdWo5bw20nOaNe8fBy2q46CEKDkTyGJaQFNpNBu10Bw=", "base64"));
  res.write(new Buffer("zZrL46CF9uVRcCrUPCCLaeGEKUZGLZClWfPevtfCNExa+Dwgi2ohwoxaZI5mzZ3KoEWSSQubB2RZLUBHLSJHs+a+a9DSd8K9lplAFtUCMO7EIDv319xFXmghZB6QJbVI+VxbsnN/zY3koIWSkYPOw7GUlYGm7+87mvMcgzOaNTfFPQblesAgZhaMRZ1QDsOjCq5lhmbNHT4FxkGLsT4SPQvGslLYOFGIysCsvr2nZOyHiZgFY1EnoCeY3DxZfW8PRowYbBaMZZ30/w/1i1euoqz6wXe3eAk+LV4wC8bCUqaKonL1cc19/SDleREms2AsK2XIsE5KLsX+fzMMQC9ozt/PuGABoS9p8Afnn9o2ePyNgij0s58So2ZBWlKQJiAnQbl0o69L0NC9aKNnQVp2BtFJkMzRwKsSNDZk2shZkBYVRJSZBOXWA/KaBA27Na6JEuzbmHbu3JBS+gLqQwrN4dAm9GFr6/i93q/SkjDFT6d/30nD1+/x6R8AAAD//wMArzzjIycoAAA=", "base64"));
  res.end();

  return __filename;
};
