var path = require("path");

/**
 * GET /Yotsubato!/21
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * cookie: viewer=1
 * accept-encoding: gzip,deflate
 * host: raw.senmanga.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:08 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=daf4cd2863897d7c44f25ef2cb2f6c5401535939348; expires=Tue, 03-Sep-19 01:49:08 GMT; path=/; domain=.senmanga.com; HttpOnly; Secure","PHPSESSID=h2hkld77eoqpqh6lsea9j3du81; path=/; domain=raw.senmanga.com; secure; HttpOnly"]);
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
  res.setHeader("cf-ray", "45448edd58f66bf8-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA7RZbXPbNhL+rl+xYWdO9owpSqldJ7GomzhxJmnSxGc7vdxkOp4luCRhgQALgJLVy/33G4Ck3vyWNun4AwVg8ewbsLtYjx+9/PDi4j+nJ1DYUkx6Y/cBgTKPA5KBmyBMJ72x5VbQ5ENVmUewP9yHE62VhhDOcA5f4Jwk/IIyx3HUEPbGJVkEVqA2ZOOgtln4JOimC2urkH6v+SwOPoUfn4cvVFmh5YmgAJiSlqSNgzcnMaU5LXdJLCkOZpzmldJ2jXDOU1vEKc04o9AP9oBLbjmK0DAUFI+2QKa0mCudrmGcEaZeGa8GfJCCS4Ll7DlDadrZLayUDNO8slzJh/C2dpYq4YLCOSUhVlXIsMJNCyzIbG3JlcoFhYZbCmekecYZbnF+eXZ2mu2/neOUTq6K92+vPp3r2Rm7ePry4GTxuj6Z/po/Pj1++8dw9jyAaNIbN+KD0SwOIpbKkOU8wqoykfN9lL66+OXXevpYHH+UP58ePk8Oq3/N/j3LPp2+GVyZYDKOGoDJWHA5BU0iDoxdCDIFkQ3ALiqKA0vXNmLGBFBoyuLAHQHzLIo0zgeGZOmsNGCqdDSR3z5w1JPe90PVZCol", "base64"));
  res.write(new Buffer("DZ99f+gKGYWZQFN8d+ir32vSi4Hbic4fg5LLjknruTXUK5xhMxs0Dr0T+2oJ7QA3HPnNwM4cfwPsrab4viywtoqpshJk6TtDa8KU9J8CnfRmqCFBQ5e1FhDDnQyCI0/Ky/whyoiXeXDUWxMhakN8otLFpDdO+Qx4GgdzjVVFussBpP1s8zNo6bQSFAcSZzxvw5Cj8WNHUgt/EyZjbE/6SrdnQuVc7vRNoeb93aNgMubABBoTB5wpGfplZyk+gXfu9zjCyTgSfAvxToNsAxbcWKUXHSRaMhY+Vqn78Sexo5RrYg4tusEmUWpqWibnpDkZENzYDQ7dBkOoWeEMldTWKrk5H1qV54LAWShsSdtz0pD7CFCh3ODfYY4jt+S82xBPeuNM6RKQOT/do1sDEAVQki1UGge5C1zIGFU23Mrn3tslyTpcqeKORSvQ8qJeXrrshFyuTs5NkoyTSLd1Wlv3l9+tc1nV6zcmaHOjCWD9+saByrJgy6bN3kzzvLABzFDUFAcBVAIZFUqkpOPgQkFDDcY7cM/zApQpFNwCSUu6Ub0hS9R1ANqVM5pSn1E729+hycp9rd8bXUydlNwlCVdBxcF550l+C0SnDlPtJVnz89LzKZ+tfZz73bc75r2Hz7k2JlpaULucM+Zl/kCo42UeZUSpFy58/OT68ZNBJXNXa7hb0EmwdgiYINTuaCxl9YGjGTgxna0vVLUUJbEyZFwzVyy11jpGNgWrwJM1av1gVRVMbl6RZrqxkpfooSjsIuvlazQLyeLux5cv8Pm3o147GlS1KXY+919zY9GagbGobX8P+qO90eHB/v7B4d7+3rD5Gw5Hw+Fw2P9t987tGRrud99HZDWy6WXBrXGknnInq6W/3zu78F+fEAoDMaSK1SVJO2Ca0NKJIDfa6Tf69XePoDA+q0IM/S3t+37RCwAxWF3TUa8wA6PdcKcfRWY0HBStSE2mGx1cohlcmb6TaMk7J9syNseLC8zfY0k7fXea+7ufh7/Bly/wAK3LT552d+Ayk0xfFFykO4XZPer9b3dn92gtp0nVFaXdIY8CsKhzF7wuE4Fy2h7mtu6NjFOBs9GGMsNBzrN/ti78x2g4CgCFe3FQwlTdBIJEaR82hsGkifJL3r3twC5xlqDeCOwuet4f1n18TVCvxfRvW15FColNqldZFjKUMzSNPKvU3cG4tDGj4K/kXVVSmw9fq5L+3lT7bjvVfgWHuqkBogcqhodLhWdRhJKXtAl/A5ZhSRpb1Oduw/2YmdJ1uYXZRb1Xbs3cZKFKd3laHg3R/Uwa7NuZHAuV3+JW3ZVnbn0NvQ3eEl3wfjjJNJnUs1py3GoqfHXaESpXTa7xt/QmTBvt1+6HUYyjCHw2bKeyZPthNp/PBxkycifOMzsn2UCuHCGEmkNtQEl41ZLelnyy1dpaBloxt/Nt5nbOrSW9wfcM57ezvmiIb017y6V1xl1QuDcdN0W/M9022Yqoezb4wj1M1HVYqrSx7Hq95/08ORWEhuCc5xK4dHn7hZKWy5p697wVCp6SeyusJFCGwsRKqGohwraoa83ywi02Twc4Vte3WYRpZcy2PVbadMWGSn3Z6cvndo5K5KJ9ozxcUrd0XUFdKWMDIMmaqF/WwvIKtfUVWpiixS2j1aFfybWqq9sL4I369cQJ1xXF1AxuKYw3K9Ybat/HtEJjmv7ZBuPT5XTDe0X27ewFJiQgUzoOmNXiUlNJZeLyb1eethNLISatyI0sK/q26B81gWcLzGLCZUrXcTAa/tjlZVYQm7oqfwLnFhcgVJ5TCu5N6sX6KgVuK/Un71TuYVa1+1ax7oawnA==", "base64"));
  res.write(new Buffer("Rm05E+QF1xsPcf/sVjbMVC39I6oYTVZt2mfwXll45dYejaNiNOl9UK6Re1EQnGJOsFC1dwgZSynM0YBUFjzYo5VQLfv748BNS9wRKDKl7M33oDvOzdSk91wIsAWBv0mQEdpae7uDLbiBOSWuDwqoCSqtKtJ2ASpzW7iGqk4ENwVpMxgnGqLJm8yrKfiUUkDZkbbobkkl/o2aQkGa9lxH1XDX90jqBZe5J/4ZK5RkCGakDVfS7IHSfkUohgKsRmmE74XswdzhAM6QC9fYHcBFgXJq3Cl2/DSYunKt7MGtVqsuXQ8x+Ip32l/Ij9FmuNv4fFWnK4rM4QDT1Hmi63D9OBxG7dTlnKc52cGV+aGqE57GGsOD4eHTw6fJwWj/4Cf2U4YbfbCo7T5F/v8Q/wcAAP//AwBQEfTWlxgAAA==", "base64"));
  res.end();

  return __filename;
};
