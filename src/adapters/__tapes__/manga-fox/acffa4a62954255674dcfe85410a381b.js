var path = require("path");

/**
 * GET /manga/hanebado/c026/chapterfun.ashx?cid=565986&page=39&key=24716494127b706f
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * referer: http://localhost:57171/manga/hanebado/c026/
 * accept-encoding: gzip, deflate
 * host: fanfox.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Dec 2018 01:43:06 GMT");
  res.setHeader("content-type", "text/plain; charset=utf-8");
  res.setHeader("content-length", "698");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d82774501c883b2485424d1cbbb6c098a1543801386; expires=Tue, 03-Dec-19 01:43:06 GMT; path=/; domain=.fanfox.net; HttpOnly","image_time_cookie=565986|636794269864936441|0; domain=fanfox.net; expires=Mon, 03-Dec-2018 03:43:06 GMT; path=/","dm5imgpage=565986|39:0; domain=fanfox.net; expires=Tue, 04-Dec-2018 01:43:06 GMT; path=/","SERVERID=node1; path=/"]);
  res.setHeader("cache-control", "private, max-age=600");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("last-modified", "Mon, 03 Dec 2018 01:43:06 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-aspnet-version", "4.0.30319");
  res.setHeader("x-powered-by", "ASP.NET");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-headers", "*");
  res.setHeader("access-control-allow-methods", "GET, POST, PUT, DELETE");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "483257293ed7941b-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAEAO29B2AcSZYlJi9tynt/SvVK1+B0oQiAYBMk2JBAEOzBiM3mkuwdaUcjKasqgcplVmVdZhZAzO2dvPfee++999577733ujudTif33/8/XGZkAWz2zkrayZ4hgKrIHz9+fB8/IvLLrNw6Xy+nbVEtt1ajbDQdvR3lo9mdX5x/Zj+f3vnFdd6ua/rtcfZ7fPTRo3xrldVNfrZst6Z3szt37nyytTX9bPq7Z3eO7t3/PV63dbG8GJ/X1eJkntUn1Szfmn6y9/DOo+m4reTbrXuf3rnzSw6L863f9eOPx3W+KrNpvnX397s7ku/v3PnFV/OipBe3t+/Mvkc/73z/s7ffm37/Z34Gvx++/ex7Fr3coJdSw+//ku8feqibrz7+fX/fq08+/iWH0892D3/JoQNNCADqndVnK4vFMr9KX+UXp+9WW/Ta5ONPqOmdT/jX0ccXH98Z8RuHAjhdHf6SrY9/UTqlrvbS7LOP3j66e7cZPxg=", "base64"));
  res.write(new Buffer("H9x9ePfTu/fu7m/fH+/cnXx0uJfufva9j+7+9Hjxe5SfzX/h+WcXHxGqW3tp8dnOYfF4d1wfFp98cucXr7aKzz7bufOLd79XfP+zj+LAPsGXh9UvwY/PMv7rlyzT3V+yl84OZ58RLocfj/Ye4n8f/8yK5nid/8xlVv/M7qef7tz7mZ1Pf2Zn79OfWWTLi+xnzrPlefXuZ5Z5+zNNW9X5z6yKdz8zrRarOm+afPYzs8X9YpFd5ETRn/mZ86r+mbYtf2b3/v69g/t7Bzs7P3Ow++D8IMsePsxnD3eyewe72f380/Pdg/29nfzTT++dTw728xk1+Jmfudy5d/Az87Zd/Uxbvc2XP/PTq4ufERpSf8u2WBKSxfnPUEc8dT9T5suLdv4zH4+bVVm0Wx//DFF+Z/SLf8mdO8n/A8Fenca3AgAA", "base64"));
  res.end();

  return __filename;
};
