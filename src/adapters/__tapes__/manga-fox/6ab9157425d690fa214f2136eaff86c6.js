var path = require("path");

/**
 * GET /manga/komi_san_wa_komyushou_desu/c172/chapterfun.ashx?cid=565455&page=1&key=72382f4ad4bd67cf
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * referer: http://localhost:57171/manga/komi_san_wa_komyushou_desu/c172/
 * accept-encoding: gzip, deflate
 * host: fanfox.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Sun, 02 Dec 2018 02:12:22 GMT");
  res.setHeader("content-type", "text/plain; charset=utf-8");
  res.setHeader("content-length", "768");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d13eeb7d6c404499c40d612089ea672e41543716742; expires=Mon, 02-Dec-19 02:12:22 GMT; path=/; domain=.fanfox.net; HttpOnly","image_time_cookie=565455|636793423426438877|0; domain=fanfox.net; expires=Sun, 02-Dec-2018 04:12:22 GMT; path=/","dm5imgpage=565455|1:0; domain=fanfox.net; expires=Mon, 03-Dec-2018 02:12:22 GMT; path=/","SERVERID=node2; path=/"]);
  res.setHeader("cache-control", "private, max-age=600");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("last-modified", "Sun, 02 Dec 2018 02:12:22 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-aspnet-version", "4.0.30319");
  res.setHeader("x-powered-by", "ASP.NET");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-headers", "*");
  res.setHeader("access-control-allow-methods", "GET, POST, PUT, DELETE");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "482a44a92ae99559-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAEAO29B2AcSZYlJi9tynt/SvVK1+B0oQiAYBMk2JBAEOzBiM3mkuwdaUcjKasqgcplVmVdZhZAzO2dvPfee++999577733ujudTif33/8/XGZkAWz2zkrayZ4hgKrIHz9+fB8/IvLLrNw6Xy+nbVEtt1ajbDQdvR3lo9mdX5x/Zj+f3vnFdd6ua/rtcfZ7fPTRo3xrldVNfrZst6Z3szt37nyytTX9bPq7Z3eO7t3/PV63dbG8GJ/X1eJkntUn1Szfmn6y9/DOo+m4reTbrXuf3rnzSw6L863f9eOPx3W+KrNpvnX397s7ku/v3PnFV/OipBe3t+/Mvkc/73z/s7ffm37/Z34Gvx++/ex7Fr3coJdSw+//ku8feqibrz7+fX/fq08+/iWH0892D3/JoQNNCADqndVnK4vFMr9KX+UXp+9WW/Ta5ONPqOmdT/jX0ccXH98Z8RuHAjhdHf6SrY/b9Jy62kvzzz5aPrp7txk/GN+7", "base64"));
  res.write(new Buffer("u3/3/t1P70635+OduxcfHe6lu59976O7i/HD3+Pgs+oXTj7LPhp9dLfkP9/yn98/XG/tpcVnO4fF493x6rD45JM7v/gXbRWffbZz5xfvfq/4/mcfxWF/gi8P61+CH5/l/Ncv+el095fspbPD2WeE2uHHo3u7+N/HP7OiKV/nP3OZ1T+zzNufadqqzn9mkS0vsp/ZfbB78PBnzrPlefXuZ9rqbb78mZ9eXfzM7v39ew8+/XR/Z+dn2rb8md2dn/mZVfHuZ2aL+8Uiu8iJ1j8zrRarOm+afEZA9n7mZ4Q2P/Pg4F52fv7w/s7OZPrpzsF073x/ev/hvYf7Wf7g/uTe/U/z6STfyXZ+5nxvZ/dgd3f3/u+/u7N3cH/v9997uB/78N7PzNt29TP38gezaba7c3Dv4OH0fDKdziaTafbpXp5PHu4cPLw/zXc/nU4fPPyZMl9etPOfKc4Jw2VbLGngP0P4Mm/8zHlVfzxuVmXRbn38MzStO6Nf/Evu3En+H1URZfYUAwAA", "base64"));
  res.end();

  return __filename;
};
