var path = require("path");

/**
 * GET /reader/series/itoshi-no-muco
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: jaiminisbox.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 04:05:19 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d1510b3236f14a76d6ab08fde86c926321534133118; expires=Tue, 13-Aug-19 04:05:18 GMT; path=/; domain=.jaiminisbox.com; HttpOnly"]);
  res.setHeader("last-modified", "Mon, 13 Aug 2018 04:05:19 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-cache-status", "EXPIRED");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44984d77c82c6c88-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+xa63PbuBH/bP8Va3Qc2ReLlORnbJGpH8md0zxuYl/Ta6fjAckVCQsEGACUrPZ6f3sHIGVTDye+6QfrQ+UZS1wu9vXbXYIA+hsXn86vf/35DWQm5+F6f/qFNAnX+4YZjuGlkTpjICR8KGMJAMfH8I6ynAnW0nAm7/p+xbjez9FQyIwp2vi1ZKOAnEthUJj29aRAAnF1FRCDd8a3uk4gzqjSaILSDNpHBPxwva9jxQoDWsUB8eNEtOOU+bQotG/t8j+9K179evElfZd8/XFEo/PsAztP9q5T/PsH71aTsO9XAsI+Z2IImcJBQKxR+tj3byvDdSTvvFjmvkKaoPJry3yTYY7av43kna/NhKMXa/16FJhJz9v1dgko5AFxd3SGaAiYSYG1Q7HWlQMPeltTvQMpjPZSKVOOtGDaKbeyBzRnfBJcM8M4Z2X+8gtGLaem9aCmValpTdW0pkoWzHmSt1RrNNoKcna16Ri1zNHLmaj9rbydw2IqNU6Ep+gIxW3lxq7X2/O6viM5GbeaQKyk1lKxlImAUCHFJJdlE50ZD5jBnBbTaNKi4Cymhknh3+WcgMuvgFxN2Z7kZS3UcxL8GX2UG1SCGlymUWn9sqn189XVEzUqrf+wNmpkPqPu1Mj8qTgamS9TyESCd/cCZ2qVzOXlI5JbTqIrZ0FzDEiKAhU1UjWquBasOUsQ6vqYGzZiOC6kMo1RY5aYLEhwxGJsu4sdYIIZRnlbx5Rj0PU6ZFkz+Vv7l9P2ucwLaljEm/3k8k2ASYo7caZkjkGXzFrhqrodSz5j/p+67nPPWyhZoDKTgMj02MWuqeF7TfARMbN9b4yRzcrlvCynaZP5MYjq6nXs2ucylV4h0m/IPKbcLMJWmQ3vZSqXj7WW3tgAPjb2sf7w7a5zq/3bryWqSd0qHrpNozX8L2ILXqZM6G+LDtfX1kZUQSa1gQDInHBysr62xgawtVUxBDBmIpFjj8uqbj1L34YXL2Br/k6hpJGx5LARQG082d5eBwBYW1t7lHvKTE4cq/18dh01lmLA0q37ku0mFA9oD7tHe8leQg9f", "base64"));
  res.write(new Buffer("HUQdjKNejPtH3UES/1mjMGrixZmVS80QJy5evda2x4Q2lPOt7fW1tYeYNHtHoTCWQmC88DBhHW9cuOCETxzQ/aMDeo0Bfj0JiWQygZhTrQNi6QkbAUsCMla0KFBZEv12uyRhn+WpG2TLmsym1b2VjyWY582VXESFQOWKDihfrIq+z/I07Pu0YW3mZBEba0tS0nZmQUcsdWlAHJO7tg6V3EVsiWvj8dgb0BgjKYfOyFHP2/frlPdRKekmMwOmcp+zIb5mA0VzvFE4QIUqeKyYtKGm1C+GLLlJmMLYYHJjG0AwoFzjC41xqTAwqsQXlbLASn+h0JRK3BRU0VwHm4dnm70eja1Hm73e5u7pZq9n+exF73yz17PO3N9xtrifbzd7b+c92+y9bRh5L4HGZkH04QUBQ1WKJiA3EadiWENeTSHnGiYbYjsqjZHC06P0tTZlwZKYxhkScFMpixZLM3MMvU5xd2IfahWYvoPE/mv+/l76TfPI2jRN5AGFAW3HXMbDtnQZE0JfF1RMGfKMhO+pQW1s0SDVqPu+ZVgw5anqK1ilmiwxhDNtHrPiChVDDZZlqQXTmNm8HUiVQ4X/96dnSFWc+QRyNJlMAlJIbQjQOMbCtKevBaR6Lwj7TBSlacy2Sf1sr8QQGFFeWiug4DTGTPIEVUCuJVQMoJ0bO04CUJFAxgygMKiq2qvYIjtDmoZG2SSo0LeOhbAkAWwx1/wxR6psjff9hI1shFwZ1xffZKy+qDIs5ujMqZ+4ZHZkQQVyEjZJNNFQ1ThUfalyhyb6xsjipqaF/ZonpyplosrvgHRITagmZfbasUVSufB1yJMewdO3J5pov1bs2bc7l1JOYLgsDDJnMTAxkHNemqzMI0EZt/T7Mn5yv55a4+Rrn7mZW1vIdl7G8mb/6CDexb1X+3i0n/iWdK9OoWb/wsS7LdJqIrtoM7ddBpxka1zWvbfZzRfD9bl5Yt/PurMSpv5G4WlpMqn6fhQew4fLv/9y9dPlx1O4pkM6KYesH6kQLJcyrvK+zXU1EbLQTFd81xlCRotiAgllfAKcDRDkwJm0AxSENG0jZTtyGQ6nQ2YoJDLdqQtDgxwLVPAXmVOjy7amAkyGkFoX2hGXY1QenFGNCUgBFBRSbgVYJZZR21Sz9enB1gcqUloWiW1m2+tzKb8kwq4VzeZDFdslzKmSZTFbDzXzeUYLg0pXg5oMyDF3lTWDSizFTT2jgAHHgQGdU24z+KntVY4FlzSZyzcfhd/xu7tLmu50RNV4bVNd4uHU9ydaYb8etWD6QtjdNdkZVUMm0mN4S80GCRdIj5hj3xJuFAmjCTzVJIN0plT9xRfT38/k3e8knL22FuxAr9M99DpHXucVzOTMsyPae3ZEew1Eew34LnCAQqNFdRl5tZDd8zp7K4Zs99mR7TaQ7TYLkykcSzXUFtvlN1YL3V2ve7Ri6HaeHd1OA91OA8SfsGrFC7TVwrTn9Q5WC9NXzw3pq4c4vmqA93Mmjdwg4SJt5RDtrRaiR8+N6NFDHI+afVYxFMkGCZcQ/4/ptzE9fG5MDx/ieNiA70fKOarJBgmXUVcN1e6KzYMPnhvVg4c4HjTwO6dqg4TzlNVCs+v1uquF5v5zo7n/EMf9mTdSnTEpNki4jLpqqHZXDNW950Z17yGOew38vlA+3CDhAmnV8Fx4Q3X/oWmiXXJNmP5a6huTWeUPy1X1VmbjnMgtHdGKSkK31+f/APbv/NPHt5c//vL59Pry00f46+nny9Oz92+u3L0ffMdptyxrPTqTytg1Ngig1fCxdTLP6Vy2XPOb2K2T9ab+i08fW9fw5uLyGg==", "base64"));
  res.write(new Buffer("zt68//QFrn+6vIL3lx/fNE3YGpTCrfBvbcO/77cqnTr9FQJIZFzaFPdihdTgmyrht1qVx63tE8vnuWX4AFpzAWlVd6meiBgCsPtND9uh9o5Wlt7y/Ra8XIzES2h5FdFlAeaRXc7VrQcZW/fmpWhq2/TZ5JqmH2mOWy27T9fa/kfnn/Dbb/AdXrsz6Xi3PVu6IjnPGE+2Ev11u1L4n+2t7ZP1h/NIQta/fnY7OoCCRhzhHR3RqzpLJNgjE24RdSHJG569Vji4mYqrTyUJOZCcyzEJY5k7W6GwK7WYQDSBi2pwVVv3hjxxJyGSxsj8eTYTKt3L9xPuy7LeOpldUbbWD6Q01SZxs6/Z/aOKFK6fcu7Cndt1ahggNaUNGbNL3kxDfWQDqML74xH1MjdTUJQRZzpDpT24HMBElmD3FxOgYspVC7a3ZGQoE5hAhgp37KkKzRJUEJUTJlLHXJ2YohxGqDSTQu+AVO6OPTHAwSgqNHd7xjswzlAAHVHGbR55cJ1RMdQwkMqqU6DLwh6+8eDxVXcboxy1tlujpMFhcztc7xcKp/t7CdMFp5NjEFLgiYWiUBaH6sjgfwEAAP//AwBKkGBwSigAAA==", "base64"));
  res.end();

  return __filename;
};
