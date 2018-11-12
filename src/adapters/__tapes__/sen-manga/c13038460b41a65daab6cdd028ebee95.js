var path = require("path");

/**
 * GET /Yotsubato!/21
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * cookie: viewer=1
 * accept-encoding: gzip, deflate
 * host: raw.senmanga.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:28 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d8f7e579c02468b2d638125c945107a6d1541997627; expires=Tue, 12-Nov-19 04:40:27 GMT; path=/; domain=.senmanga.com; HttpOnly; Secure","PHPSESSID=2sd9r36fia0kp0cagpau6hvhb0; path=/; domain=raw.senmanga.com; secure; HttpOnly"]);
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-powered-by", "Fat-Free Framework");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("x-xss-protection", "1; mode=block");
  res.setHeader("x-content-type-options", "nosniff");
  res.setHeader("pragma", "no-cache");
  res.setHeader("cache-control", "no-cache, no-store, must-revalidate");
  res.setHeader("expires", "Thu, 01 Jan 1970 00:00:00 +0000");
  res.setHeader("strict-transport-security", "max-age=5184000; includeSubDomains; preload");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "478652157e21947b-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA7RZX28buRF/16dg9oDKBrRaKWefk1irIk4cJJdc4ibONUVwMGa5s7u0uOQeyZWsuxRoY/Qr9KVF0Yc+tsAVaZ/abyM0n6Mgd1f/LNu5Sw4BsiI5/M0fDmeG48GN+8/uHf/m6JBkJufD1sB+CAeRhh4Kz04gxMPWwDDDcfisKPQNstPbIYdKSUV88hwm5A2Zvf3P7PwdmZ3/ZXb+bvb274Ogom8NcjRAaAZKowm90iT+La+ZzowpfPy2ZOPQe+W/vOvfk3kBhkUcPUKlMChM6D06DDFOcb5LQI6hN2Y4KaQyS4QTFpssjHHMKPpu0CFMMMOA+5oCx7C/BjLC6USqeAkjB5ECUTDRHQUTUg2l4EzgYqKTKMTvmEg7MRqkho3RIoDoCFClkZ2II9CsIwWSgiFFu1OjcJvXRIhRU8UKw6RYEkMhxM60Fb+5VItfmmSokADXkjjqBt8urvHIZcQ4+hOMfCgKn0IBqyaeol7bkkqZcvQ1M+iPUbGEUViT8f7z50fJzuMJjPDwNHv6+PTVCzV+To9v3989nD4sD0dfpzePDh5/1xvf9UgwbA0qRYlWNPQCGgufpiyAotCB9bEgfnD8", "base64"));
  res.write(new Buffer("1dfl6CY/eCm+PNq7G+0Vvxr/epy8OnrUPdXecBBUAMMBZ2JEFPLQ02bKUWeIxiNmWmDoGTwzAdXaI5nCJPSsj+k7QaBg0m1M1KUytzSB29611MPWp0NVqAspNBt/eugCKPoJB519cujTb0tU067dCfY8ujkTDZP65JZQT2EM1axXHeil2KdzaAu4cpAfDWzN8TPAbjTFp2UBpZFU5gVHg58Y2kYDVD8KdNgagyIRaDwpFSchuZSBt+9IWZ5eRxmwPPX2W0siBHUqiWQ8HbYGMRsTFofeREFRoGpyDSo3W/30ajolOYaegDFL6zBkadzYkpTc3YThAGpPX+h2h8uUia22zuSkvb3vDQeMUA5ahx6jUvhu2VqKDcns/B+ztz/M3v5tdv5uEMBwEHC2BnypXdZxM6aNVNMa+f2ff/f+jz+8/9O/7P/nf/jfX//5I/GDmCmkFjG4wCqScqRrRi9QMdSEM21WODQbNIKimbVZVBojxeq8b2SaciTWWH5NWrtMRe6CQQFihX+DOQjskj3oinjYGiRS5QSoPbIrdKsAAo/kaDIZh15qYxhQioXx12oHd/A5itJfqGI9pBZofmdPTmyiAiYWTnSRJGHI43WdltZdHLDrTBTl8uXx6jSpPbJ8k0NPJom3ZtNqb6JYmhmPjIGXGHoeKThQzCSPUYXesSQVNdHuADuOFwERk4wZgsKgqlSvyCJ55hFlSyeFsUuuje0v0WRxfPW5V7roMsqZzRe2Wgu92dt/z87/Ozv//bKPLaE0GlFZX5mlo54ffszGSx/rAfbbeHrreldXWgdzIyqbgQYsT68JfCxPgwQxdsL5N2+d3bzVLURqKw97ERoJlvyAcgRlvWMuqwsj1cCKac19LIu5KJERPmWK2tKpNtgB0BExkjiySq3PjCy84cVbUk1XVnISXReTbZw9eQh6KmjY/Hjzhrz+Zr9Vj7pFqbOt1+2HTBswuqsNKNPukHa/09/b3dnZ3evsdHrVv16v3+v1eu1vti/dnoBmbvdVREYBHZ1kzGhL6ii3klK4K761Tb536SHTJCSxpGWOwnSpQjB4yNGOttqVfu3tfZJpl2NJSNpr2rfdohOAhMSoEvdbme5qZYdb7SDQ/V43q0Wq8l5/9wR091S3rURz3imamrE+mB5D+hRy3Gpbb25vv+59Q968IdfQ2mzlaLe7Nk+J+F7GeLyV6e391m+3t7b3lzKckE2J2jh54BEDKrXx6yTiIEa1M9dVcKCtCoz2V5TpdVOW/LI+wl/0e32PALcPHIyoLKtYEEnlIkfPG1aBfs67tR7bBYwjUCux3QbQqyO7C7ERqKWw/nHLi0ghoEr8Mkl8CmIMupJnkcgbGHBvK++npF+ZY50SH8ocf95s+2Q9234Ah7KIwaAOrikcXlZkV6DfCQIQLMdV+AuwFHJUUKPetRuuxkykKvM1zCbqPbBr+iILmdvLU/OoiK5mUmFvZnLAZbrhWFVTrNn1JfQ6eAuwwfv6JFMlU8dqznFzK+ODsw+XqaxSjrusl6LVsX/ptmhJGXDP5cZ6KonWH22TyaSbAEXrf47nCxRfuYbC4lg4lxNSaiIFeVCTbkpFyWJtKR8tmJvJOnMzYcagWuH7HCabWR9XxBuT4HxpmXETIq5MztWDwJpunWxB1DwpXFHvR/LMz2VcWXa5AHSnPjziCBrJC5YKwoTN4vekMEyU2LriHZGxGO07YiGB1OhHRpCi5Nyvq7zaLPfsInlid5IDebbJIlRJrdftsdCmKT1k7OpQV0/Xc5gD4/X75foau6ZrKuxCauMRFLTKAXnJDStAGVev+TEYWDNa6buVVA==", "base64"));
  res.write(new Buffer("ybLYXBGvFLSHVrimSsZqsKFSXi1hL6h9FdMCtK6adyuMj+bTFe8F2cez5xAhJ4lUoUeN4icKc8wjm42bYrWemAsxrEWuZFnQ16+AfhWG1sAMREzEeBZ6/d7nTZamGdKRLfuH5IWBKeEyTTEmTAwCJ9YHKbCp9h8+kamDWVTya6W7HZL5NCjDKEcnuFp5pLsnuTR+IkvhXlVZf7hoFd8hT6UhD+zajUGQ9YetZ9I2k48zJEeQIpnK0h0IaoMxmYAmQhriwG4shKrZXx0HLlrikkCRSGkuPhCtO1dTw9ZdzonJsO4EJwimVM7uxGRMkwlGtkdKQCEplCxQmSmRid3CFCnKiDOdodLdQaRIMHyUODU5G2FMQDSkNbpdkpF7tMauvdux3VbNbE8kKqdMpI74SyhAoEYyRqWZFLpDpHIrXFLgxCgQmrs+SYdMqjbxGBi3Td8uOc5AjLT1YstPEV0Wto/e3Wi14sT2F70PeLX9hDQZrIa7lc8HdcGCQO91IY7tSTTdr897vaCeOpmwOEXTPdWfFWXE4lCBv9vbu713O9rt7+x+Qb9IYKVHFtSdqcD9LeT/AAAA//8DAJB89MUbGQAA", "base64"));
  res.end();

  return __filename;
};
