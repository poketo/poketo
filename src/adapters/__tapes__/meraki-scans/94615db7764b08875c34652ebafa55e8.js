var path = require("path");

/**
 * GET /manga-rss/ninja-shinobu-san-no-junjou
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: merakiscans.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 04:05:18 GMT");
  res.setHeader("content-type", "text/xml;charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d6a3c2ad4d4b31f48485f6c5fb74dbdcd1534133118; expires=Tue, 13-Aug-19 04:05:18 GMT; path=/; domain=.merakiscans.com; HttpOnly"]);
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0");
  res.setHeader("x-cache", "HIT from Backend");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44984d75145e9402-SJC");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA8yabW+jRhDHv8qeK/XV2bBg/ECxpejSh6t6eVHnFFVRdFrDxmDjBcHS1N++s9hJ8CU2YGarShHHKWiZmf3/2M3O38vynPzNszxKxKxnDcze3PNDJgSP556MZMznX3jGNhFZ+Ezk5E/ucyHJ1zRgkueesX/EiyOxmYdSpq5hbMvnc/X4wE+2xpaJFevDewzPKJ/zAp77WZRKeOd8P2C8IywIeEDg3amEcDyj+pAXwxgFW/E5FzDI83+8aFv+U2TxqZc/pX0/ERJesY/D8BPI1pBLYYhIrNk32/rHHKzTlWeoUQ4pH7J8DoYkj+RGPU0WYSSSZdHPmSAiIb8XYp0UpBy5US3Kd/bz11H6Iumvy1FeqmMcsook3z4HdO7tfWKbcPn84w+mPf1pC7+RhB3ivf/55vqhc2S2adB3J8/7cP/p+ur26t5jJMz446x36eg9UsY463XKFEZh2YrLWe/bElSy6SmJrEie+ScjeyMQuwxorDTRIyGPViEMRx2zR56iQIZwb5pY0S6TLODZrGf2DJh3NveWGdz8X2vZUYSH9B4e5t/BnRbLa/iazBeF+EjomCx4SiwTbizLdeCHkq+3nzzj+TGPCz9O8iLjBJCdkctmNuZitZ9Nawip7lKoVwmesU45/F5NyJ7A5hxaU7gMBoObpDNy1lQncuXoDWXymhQOXerdKHRVA0MHCatCzQVzER7DESYelanRgscELjfwYbjLErHqjshEKyKTFgI4SgwJkwkWJt8Fh48KYqXaCag9MtSl1DXHeMRM9BIzhsstbMc35NckCQTPm225z07XWCs24xZieJsdEjtjLHbeixAfIOyaXSCqWpR+ySJAyTlafSzTBSTRWBrrZWkEl7uQSRIkPCdS3W05E92BGmkFatRCHCdSRKJqhEXVyTDx0dJSvUuFVgvZbVgAZMPKejV16dClFh5kI72QOftviyRRTrY7EgWcxd0Jc7QS5rTQyHv5IeHlYOH1foz4bOHX7SJx1VJ1xwOgyj5auqjt2g4eVY5eqoYq8SjjebLlJOVZnggWR3LXnayhVrKGLRRyKkckuoZYdJ2OE58wPfW7WGz161fBgTTreJPouHSER9pQL2m2OsSU+1PMnLA4JqpfQB6TDNbwwWDQnThbK3F2C8XU5YpEno1FXn28+ATqrWdnMdYS+SVRJyC0sqMcuXSM+mebrZdIqw==", "base64"));
  res.write(new Buffer("XPRhxYcflbkMOVHNx+4kWlpJtFoo51SOSARaWASejhOfPD31u1hsDc8azcraZ7um4zqIu0xLL2kULn/BLYPY1kUuP3RHjGpFjLaQyJvkkNiiWGy9EyA+VMgVay+oeoyY/EjMaWXBmqgtpIXY5aJ6MVJ98EXIX5ZtQRis2jAoWUUZwmGIVjOG1cJAUJMpEmBYZozaaPFp01nLjiJsdt5vTirLmal6Z7AnReNQrxmDTo92z8qQAoGkceRD3EFnDKlWgwZtYT84nygOhRTLtFEXLDqEOivZTYDNugFmtXsN20lFIRqCVK/hg6p+/W+7aNPQKXp2HrW6PWgLD0MlKyS4JoaNA1c1MnySsGrUQjTNzvbN0REjw4nr4J1vVGZHCyOqG/+ZsG25Qya7pMjUyPCRiEENLJYhyXja/dyRarV90BYWhoYZI7GFZQVpHDU+d/9FbZFE2nBbSY95nbomXoeA6rWRUNXd/4O/LOuSxRvClkkhSZ74Ps+6k6rVT0JbOCJqc0ViFMtY0iBefDr11rOzGJt1CKwJuSpWByLHynOCaJKkej0n1DnaZ8uMRTBh3f3FVKvrhLZwT5zIEIk+LN/JySjxmdNRuwtF1qwvYI1f+bJM15m6Np6ni+p1n1BlCFjw+DHKQ5wjTKrVdUJbuCbe5IbE1BDrL7q38eHThFuv1mJq1hKwRhWCLNVZQ+xhV+ZLC0FlI588sVzsPyCSxFEOEaAsU1oNJbSFAeJcmkhc2YZJbRSwzsaKzxhqGf8FAAD//w==", "base64"));
  res.write(new Buffer("tJ1Rb9owEMe/ivc+kRgn0ORhE+rWPawtSJ22RxQgpREhRk4ytn76xS3bGCQZtv/3BdDd+X66s++fwwC33sy77LY2DI96w0h/csZ9HHlHJ0qCnp7of/yxzKrG4zeHD1JvkwIwACCVj3AD+UOnjyDohqhi1m0nHjia+Fkn22WP/cPgnzZRYIvckLbI6Wn/t8ZGtZCJWkFKG6l8hBuIIc6dA7GFko+0GYiHChwx84S68LblH1WsK90r+sCZGa18ROiKPa2eUsVm2bJqLHSfnQnSFlEY9DYt3oF2dgjvYN18ny7mC73BRkF2eLRZjN/bgY6hRZJddg/j0RFbo9gfxxwnCek5RRLWdL2+fl3yw5oyzb7KvN6mbKbk1n2FhyBtEIVBg9PrJ4i/oVek+/nPNFHzJjdGEPT6zcZDSBdSpzy0AzOMwwAHZuvxkjCpq7748MAmqnqJxaSu5FoluydAHSTtJ4VBd9TjJYhH7iW/f3LuRxAc+2zGw0gVTYf0swMxiANghWw7V5LrnFaQfkk2KVtLuWJLreGWj+zO/bsbTipg5gai204fQZc73/PFYFe4X+667cTf8WjiZ51sF37hdvRwwsNYDwiADyd/z5GCNC0TvZVyU7JZqh7TpV6GeZMV7qCRKpQNZLVdDmIoi0CQdVsJZ4wkdrZJZgeYH/u4AXZEypfWkz7Uu6a1vpdlleTrbOmMFqkY2UBn2+IbhqorEFWtBsKBQkfMIqGsMOIRsk5dkWKkJaCfMpWzmdyn6r0zQqR6ZAPJ7IlfGHzGIHzOjIOjg4yUYQLZITOKA9xj/pgUGa3OnBZNpY2Yfjkp2TR3nzuTqoMNxKxtzmHgGYHgabcQThA8ZjZJZcuSj3uaGJGypPWXd0lTavXF8LrOq1olObtJyyr7DlgxR6r1NZCr9ruJ4SsE8fU/W+GkEcbRLfns6BOxwH32EpLSp1WbE7bJitVLCXfGjVQAbKBnPfELw1cA4uvMODhQyEgZJpAdMjwOcQUrIEXmVXmZbFnCPud19ew+vSIdXhlMW04cAw2sQNCcW4cfTSFjZZpEdtxAF3ULUm70LPxevmXbdCtV9pyyrHLfmUO6Msdgy8u5b6AtOSB6Wg3EL8YBR8wioaww8qNYRLj9N6QY6Tn2YDCYFGxyWPwDadxoFbkGo8dW90BzW9TYtsNG/MwWHze75LKjiiNfIbgFVd6ffzz0VFm++wUAAP//", "base64"));
  res.write(new Buffer("AwDfgIObFHEAAA==", "base64"));
  res.end();

  return __filename;
};
