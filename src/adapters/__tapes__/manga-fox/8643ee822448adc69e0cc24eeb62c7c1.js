var path = require("path");

/**
 * GET /manga/hanebado/c026/chapterfun.ashx?cid=565986&page=3&key=24716494127b706f
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * referer: http://localhost:57171/manga/hanebado/c026/
 * accept-encoding: gzip, deflate
 * host: fanfox.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Dec 2018 01:43:00 GMT");
  res.setHeader("content-type", "text/plain; charset=utf-8");
  res.setHeader("content-length", "750");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d8b03f28352992371b4c402247fc5b1c21543801380; expires=Tue, 03-Dec-19 01:43:00 GMT; path=/; domain=.fanfox.net; HttpOnly","image_time_cookie=565986|636794269805723695|0; domain=fanfox.net; expires=Mon, 03-Dec-2018 03:43:00 GMT; path=/","dm5imgpage=565986|3:0; domain=fanfox.net; expires=Tue, 04-Dec-2018 01:43:00 GMT; path=/","SERVERID=node2; path=/"]);
  res.setHeader("cache-control", "private, max-age=600");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("last-modified", "Mon, 03 Dec 2018 01:43:00 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-aspnet-version", "4.0.30319");
  res.setHeader("x-powered-by", "ASP.NET");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-headers", "*");
  res.setHeader("access-control-allow-methods", "GET, POST, PUT, DELETE");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "483257038837a5f6-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAEAO29B2AcSZYlJi9tynt/SvVK1+B0oQiAYBMk2JBAEOzBiM3mkuwdaUcjKasqgcplVmVdZhZAzO2dvPfee++999577733ujudTif33/8/XGZkAWz2zkrayZ4hgKrIHz9+fB8/IvLLrNw6Xy+nbVEtt1ajbDQdvR3lo9mdX5x/Zj+f3vnFdd6ua/rtcfZ7fPTRo3xrldVNfrZst6Z3szt37nyytTX9bPq7Z3eO7t3/PV63dbG8GJ/X1eJkntUn1Szfmn6y9/DOo+m4reTbrXuf3rnzSw6L863f9eOPx3W+KrNpvnX397s7ku/v3PnFV/OipBe3t+/Mvkc/73z/s7ffm37/Z34Gvx++/ex7Fr3coJdSw+//ku8feqibrz7+fX/fq08+/iWH0892D3/JoQNNCADqndVnK4vFMr9KX+UXp+9WW/Ta5ONPqOmdT/jX0ccXH98Z8RuHAjhdHf6SrY/b9Jy62kvzzz5aPrp7txk/GN+7", "base64"));
  res.write(new Buffer("u3/3/t1P70635+OduxcfHe6lu59976O7i/HD3+Pgs+oXTj7LPhp9dLfkP9/yn98/XG/tpcVnO4fF493x6rD45JM7v/gXbRWffbZz5xfvfq/4/mcfxWF/gi8P61+CH5/l/Ncv+el095fspbPD2WeE2uHHo3u7+N/HP7OiKV/nP3OZ1T+zzNufadqqzn9mkS0vsp/Z/fTTnXs/c54tz6t3P9NWb/Plz/z06uJndu/v3zu4v3ews/MzbVv+zM6nP/Mzq+Ldz8wW94tFdpETrX9mWi1Wdd40+exndvboe6HNz9zbe7h/MN27f293N5/sPNj5dPpw/3wy2b23Oz2gz7KH5zsPJ7uf7v3M5Q51TP/s/cy8bVc/s39/L9t/cDC5f282O7i/v//ppwfZXja5t5c9nOUP88lBPnl478H9/GfKfHnRzn+mOCcMlm2xpIH9DOHDc/8z51X98bhZlUW79fHP0LTtjH7xL7lzJ/l/AOnbcxz0AgAA", "base64"));
  res.end();

  return __filename;
};
