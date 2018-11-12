var path = require("path");

/**
 * GET /reader/series/itoshi-no-muco
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip, deflate
 * host: jaiminisbox.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:23 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=dd91d735a1769d0582f42f0d9fbec6a671541997622; expires=Tue, 12-Nov-19 04:40:22 GMT; path=/; domain=.jaiminisbox.com; HttpOnly"]);
  res.setHeader("last-modified", "Mon, 12 Nov 2018 04:40:23 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-cache-status", "EXPIRED");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "478651f30a2aa52a-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+xa63PbuBH/bP0Va3YcWReLlGQ7folMbSe5c5rHTexreu10PCC5ImGBAAOAktV7/O0dgJRMvXy+6QfrQ+UZSwQX+/rtLkEs+ttvPl/e/PzjW0h1xoJGf/qFJA4afU01w+BKC5VS4AI+FpEAgNNTeE9oRjltKrgQ932vJGz0M9QEUq3zNn4r6Mh3LgXXyHX7ZpKjA1F55Tsa77VnZJ1BlBKpUPuFHrSPHfCCRl9FkuYalIx8x4ti3o4S6pE8V57Ry/v8Pj/5+c3X5H387fsRCS/Tj/QyPrhJ8J8f3TvlBH2vZBD0GeVDSCUOfMcopU49765UXIXi3o1E5kkkMUqv0szTKWaovLtQ3HtKTxi6kVKvR76e9Nx9d98Bicx37B2VImoH9CTHyqBIqdKAB7nNqdyB4Fq5iRAJQ5JTZYUb3gOSUTbxb6imjNEie/kVw6YV03wQ0yzFNKdimlMhS+o8yVqiFGplGFm92mSMSmToZpRX9pbWLmAx5RrF3JVkhPyuNGPf7R24Xc8OWR53yoFICqWEpAnlvkO44JNMFHV05iygGjOST71J8pzRiGgquHefMQdsfPnO9ZTsSVZWTF3LwZuTR5hGyYnGVRKlUi/rUr9cXz9RolTqT0sjWmRz4s61yJ6KoxbZKoGUx3g/YziXq85CXK7h3LQcbTpzkqHvJMhREi1kLYsrxorRGKHKj4VpI4rjXEhdmzWmsU79GEc0wra92APKqaaEtVVEGPpdt+OsKib/aP903r4UWU40DVm9nly99TFOcC9KpcjQ7zrzWtisbkeCzan/l679zGhzKXKUeuI7Ijm1vqtL+KMiuIbNfN0bY2iicjUtzUhSJ14HUZW9llx5TCTCzXnyCM9TwvQybKXa8EEkYvVco+mtceC6uevqw+NV5055d98KlJOqVDxUm1pp+F/Y5qxIKFePsw4aW1sjIiEVSoMPzgJz56yxtUUHsLtbEvgwpjwWY5eJMm9dM96CFy9gd/FOLoUWkWCw7UOlvNNqNQAAtra21lJPiZ0zS2o+X2xFjQQf0GR3lrLdmOAr0sPu8UF8EJOj", "base64"));
  res.write(new Buffer("k1dhB6OwF+HhcXcQR39VyLWcuFFq+BI9xIn1V6/ZcilXmjC222psbS27OyaatKMBURMe+c6AMIVzD7g7MiIlqRPsDgoeGQt2x3sQt+AXMO5U4EPsRhKJxrcMM+R6t1lOabbOQLlKRuBD0/NiZHRk4CKxxEiMUJbPkqPO0aFH4i/V2J16rZXfPdw/OTrudjq9bq/bNHyMVobRgl72ntUffNCywDPYjd0EdaWMupjckOQTyXC3aRYTzda/Ov+GX3+FdUShiCeWqOWSPEceX6aUxbuqdQa/tSro9yAWUWFmts5mToV6Qc6NiZxjtPSEph13nNuIC544oftnJ/RqE7xqZWfMgogRpXzHjMd0BDT2nbE0VkozRB5/BjlBn2aJnWRqpTOfqzOz1mWt6y7UsZBwjtJWMiBsudT0PZolQd8jNW1Ty8sJGuWQFOZxx8mIJja3HEtkr41BBbMeW2HaeDx2ByTCUIihVXLUcw+9qo54KKWwK8QBlZnH6BBf04EkGd5KHKBE6a+rUEoTXagXQxrfxlRipDG+NVXVt6n1QmFUSPRNmL4ohfmG+wuJupD8NieSZMrfObrY6fWIzbWdXm9n/3yn1zN05qJ3udPrGWNmd6wu9ue7nd67Rct2eu9qSs44kEgvsT5644AmMkHtO7chI3xYQV6uyxeeQnSI7bDQWnBXjZLXShc5jSMSpeiAXZ8atGiS6lPodfL7M7NSKMH0LCTmX/33H4XfNI6MTtNAHhAYkHbERDRsCxsxAfRVTviUIEud4APRqLRJGiQKVd8zBEuqPFV8CauQkxWKMKr0Oi2uUVJUYEhWajD1mYnbgZAZlPj/8ZoXiYxSz4EMdSpi38mF0g6QKMJct6fvWk75shX0Kc8LXavwTrVgKtk4MCKsMFpAzkiEqWAxSt+5EVASgLJm7FkOQHgMKdWAXKMsc68kC82yc+oaaYKgRN8YFsCKADDJXNFHDIk0Od73YjoyHrJpXF08Slh+EalpxNCqUy1jnPmZOeHInKA+RGIFZY5DWZdKc0isbrXIb6uxoF/RZEQmlJfx7TsdpxooV7rm2pKFQlr3dZwnrWumr6QkVl4l2DWvzDakLMNglRtERiOgfCAWrNRpkYWcUGbGZ2n85Ho91cbyVx61y+E2F+2siMTt4fGraB8PTg7x+DD2zNBMnERF/4Oxe5cn5dvBss7MVBmwnI1yaXems12EB42FxXffS7vzHKb2hsF5oVMh+14YnMLHq3/+dP3D1adzuCFDMimGtB/KAAyV1DbzHqe6nnCRK6pKupsUISV5PoGYUDYBRgcIYmBV2gMCXOi2FqId2giH8yHVBGKR7FWJoUCMOUr4m8iIVkVbEQ46RUiMCe2QiTFKFy6IwhgEBwISCTMMjBBDqEyomfx0Yfcj4Qkp8tgUs1ZjIeRXeNiWovl4KH27gjiRosjn86EivkxJrlGqclKdAMuV0/wsGgl+W60oYMBwoEFlhJkIfmp5FWPOBIkX4s1D7nW87v6KojudURZeU1RXWDi1/YlamK+1Gkzfsrv7Or0gckh5cgrviN52gqWhNeqYV69b6QThBJ6qkkYyl6re8tv+7xfi/ncnmL82GuxBr9M9cjvHbucE5mLm2RHtPTuivRqivRp8b3CAXKFBddXwZiF74HYONgzZ7rMj260h260nJpU4FnKoDLarb2wWuvtu93jD0O08O7qdGrqdGog/YFmKl8Y2C9Oe23u1WZiePDekJw9+PKmB92MqtNh2guWxjUO0t1mIHj83oscPfjyu11lJkcfbTrBi8P+YPo7p0XNjevTgx6MafN8TxlBOtp1g1eimodrdsA==", "base64"));
  res.write(new Buffer("dfCr50b11YMfX9XwuyRy2wkWRzYLza7b624WmofPjebhgx8P595IVUoF33aCVaObhmp3w1A9eG5UDx78eFDD7ythw20nWBraNDyX3lDtf6iraLZcY6q+FepWp0b4w3ZV1bBc05u0DVTvOzB/l58/vbv6/qcv5zdXnz/B38+/XJ1ffHh7be9951lK07is5KhUSG322ExvsWZj82yR0ppsqBZPBjTPGnX5bz5/at7A2zdXN3Dx9sPnr3Dzw9U1fLj69LauwkM3tQW/zPq/Vpz6ZnqqVYNxfWs1Vt8eaYqau3Nt0ZkMc2fWlG3Cy2VPvISmWw7aKMAsNNu5qvnAY3em3lM6rY/Trmm4xupbqxT4W2u3ddZ4OOTFRfXrR9vRAeQkZAjvyYhcV1EiwJxDsZuoS0Fes+y1xMHtlF111IuLgWBMjJ0gEpnVFXKzU4sxhBN4U04uc2umyBM7CaHQWmTP00woZa/uJ8zSsmqdzO8oG+0HQuiySVyva6Z/VA4FjXPGrLszs08NAyS6MC6jZsubKqjOwQCRODtzUm1zUwl5ETKqUpTKhasBTEQBpr8YA+FTqoqxuSVCTSjHGFKUuGeOqigao4SwmFCeWOLyGBphMEKpqOBqD4S0d8wxDAZaEq6Y7RnvwThFDmREKDNx5MJNSvhQwUBII06CKnJzosmF9bvuxkcZKmVao06NwsR20OjnEqf9vZiqnJHJKXDB8cxAkUuDQ3kO878AAAD//wMAp176qp8pAAA=", "base64"));
  res.end();

  return __filename;
};
