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

  res.setHeader("date", "Mon, 13 Aug 2018 03:40:23 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=dbff2034c8155bc7f2e37004bd4a2acca1534131623; expires=Tue, 13-Aug-19 03:40:23 GMT; path=/; domain=.jaiminisbox.com; HttpOnly"]);
  res.setHeader("last-modified", "Mon, 13 Aug 2018 03:40:23 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-cache-status", "EXPIRED");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "449828f4dd3e6ce2-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+xa63PbuBH/bP8Va3Qc2ReLlORnbJGpH8md0zxuYl/Ta6fjAckVCQsEGACUrPZ6f3sHIGVTDye+6QfrQ+UZS1wu9vXbXYIA+hsXn86vf/35DWQm5+F6f/qFNAnX+4YZjuGlkTpjICR8KGMJAMfH8I6ynAnW0nAm7/p+xbjez9FQyIwp2vi1ZKOAnEthUJj29aRAAnF1FRCDd8a3uk4gzqjSaILSDNpHBPxwva9jxQoDWsUB8eNEtOOU+bQotG/t8j+9K179evElfZd8/XFEo/PsAztP9q5T/PsH71aTsO9XAsI+Z2IImcJBQKxR+tj3byvDdSTvvFjmvkKaoPJry3yTYY7av43kna/NhKMXa/16FJhJz9v1dgko5AFxd3SGaAiYSYG1Q7HWlQMPeltTvQMpjPZSKVOOtGDaKbeyBzRnfBJcM8M4Z2X+8gtGLaem9aCmValpTdW0pkoWzHmSt1RrNNoKcna16Ri1zNHLmaj9rbydw2IqNU6Ep+gIxW3lxq7X2/O6viM5GbeaQKyk1lKxlImAUCHFJJdlE50ZD5jBnBbTaNKi4Cymhknh3+WcgMuvgFxN2Z7kZS3UcxL8GX2UG1SCGlymUWn9sqn189XVEzUqrf+wNmpkPqPu1Mj8qTgamS9TyESCd/cCZ2qVzOXlI5JbTqIrZ0FzDEiKAhU1UjWquBasOUsQ6vqYGzZiOC6kMo1RY5aYLEhwxGJsu4sdYIIZRnlbx5Rj0PU6ZFkz+Vv7l9P2ucwLaljEm/3k8k2ASYo7caZkjkGXzFrhqrodSz5j/p+67nPPWyhZoDKTgMj02MWuqeF7TfARMbN9b4yRzcrlvCynaZP5MYjq6nXs2ucylV4h0m/IPKbcLMJWmQ3vZSqXj7WW3tgAPjb2sf7w7a5zq/3bryWqSd0qHrpNozX8L2ILXqZM6G+LDtfX1kZUQSa1gQDInHBysr62xgawtVUxBDBmIpFjj8uqbj1L34YXL2Br/k6hpJGx5LARQG082d5eBwBYW1t7lHvKTE4cq/18dh01lmLA0q37ku0mFA9oD7tHe8leQg9f", "base64"));
  res.write(new Buffer("HUQdjKNejPtH3UES/1mjMGrixZmVS80QJy5evda2x4Q2lPOt7fW1tYeYNHtHoTCWQmC88DBhHW9cuOCETxzQ/aMDeo0Bfj0JiWQygZhTrQNi6QkbAUsCMla0KFBZEv12uyRhn+WpG2TLmsym1b3SxxLM8+ZKLqJCoHJFB5QvVkXfZ3ka9n3asDZzsoiNtSUpaTuzoCOWujQgjsldW4dK7iK2xLXxeOwNaIyRlENn5Kjn7ft1yvuolHSTmQFTuc/ZEF+zgaI53igcoEIVPFZM2lBT6hdDltwkTGFsMLmxDSAYUK7xhca4VBgYVeKLSllgpb9QaEolbgqqaK6DzcOzzV6PxtajzV5vc/d0s9ezfPaid77Z61ln7u84W9zPt5u9t/OebfbeNoy8l0BjsyD68IKAoSpFE5CbiFMxrCGvppBzDZMNsR2Vxkjh6VH6WpuyYElM4wwJuKmURYulmTmGXqe4O7EPtQpM30Fi/zV/fy/9pnlkbZom8oDCgLZjLuNhW7qMCaGvCyqmDHlGwvfUoDa2aJBq1H3fMiyY8lT1FaxSTZYYwpk2j1lxhYqhBsuy1IJpzGzeDqTKocL/+9MzpCrOfAI5mkwmASmkNgRoHGNh2tPXAlK9F4R9JorSNGbbpH62V2IIjCgvrRVQcBpjJnmCKiDXEioG0M6NHScBqEggYwZQGFRV7VVskZ0hTUOjbBJU6FvHQliSALaYa/6YI1W2xvt+wkY2Qq6M64tvMlZfVBkWc3Tm1E9cMjuyoAI5CZskmmioahyqvlS5QxN9Y2RxU9PCfs2TU5UyUeV3QDqkJlSTMnvt2CKpXPg65EmP4OnbE020Xyv27NudSyknMFwWBpmzGJgYyDkvTVbmkaCMW/p9GS88hr5njZOvfeZmbm0h23kZy5v9o4N4F/de7ePRfuJb0r06hZr9CxPvtkirieyizdx2GXCSrXFZ995mN18M1+fmiX0/685KmPobhaelyaTq+1F4DB8u//7L1U+XH0/hmg7ppByyfqRCsFzKuMr7NtfVRMhCM13xXWcIGS2KCSSU8QlwNkCQA2fSDlAQ0rSNlO3IZTicDpmhkMh0py4MDXIsUMFfZE6NLtuaCjAZQmpdaEdcjlF5cEY1JiAFUFBIuRVglVhGbVPN1qcHWx+oSGlZJLaZba/PpfySCLtWNJsPVWyXMKdKlsVsPdTM5xktDCpdDWoyIMfcVdYMKrEUN/WMAgYcBwZ0TrnN4Ke2VzkWXNJkLt98FH7H7+4uabrTEVXjtU11iYdT359ohf161ILpC2F312RnVA2ZSI/hLTUbJFwgPWKOfUu4USSMJvBUkwzSmVL1F19Mfz+Td7+TcPbaWrADvU730OsceZ1XMJMzz45o79kR7TUQ7TXgu8ABCo0W1WXk1UJ2z+vsrRiy3WdHtttAttssTKZwLNVQW2yX31gtdHe97tGKodt5dnQ7DXQ7DRB/wqoVL9BWC9Oe1ztYLUxfPTekrx7i+KoB3s+ZNHKDhIu0lUO0t1qIHj03okcPcTxq9lnFUCQbJFxC/D+m38b08LkxPXyI42EDvh8p56gmGyRcRl01VLsrNg8+eG5UDx7ieNDA75yqDRLOU1YLza7X664WmvvPjeb+Qxz3Z95Idcak2CDhMuqqodpdMVT3nhvVvYc47jXw+0L5cIOEC6RVw3PhDdX9h6aJdsk1YfprqW9MZpU/LFfVW5mNcyK3dEQrKgndXp//A9i/808f317++Mvn0+vLTx/hr6efL0/P3r+5cvd+8B2n3bKs9ehMKmPX2CCAVsPH1sk8p3PZcs1vYrdO1pv6Lz59bF3Dm4vLaw==", "base64"));
  res.write(new Buffer("OHvz/tMXuP7p8greX3580zRha1AKt8K/tQ3/vt+qdOr0VwggkXFpU9yLFVKDb6qE32pVHre2Tyyf55bhA2jNBaRV3aV6ImIIwO43PWyH2jtaWXrL91vwcjESL6HlVUSXBZhHdjlXtx5kbN2bl6KpbdNnk2uafqQ5brXsPl1r+x+df8Jvv8F3eO3OpOPd9mzpiuQ8YzzZSvTX7Urhf7a3tk/WH84jCVn/+tnt6AAKGnGEd3REr+oskWCPTLhF1IUkb3j2WuHgZiquPpUk5EByLsckjGXubIXCrtRiAtEELqrBVW3dG/LEnYRIGiPz59lMqHQv30+4L8t662R2RdlaP5DSVJvEzb5m948qUrh+yrkLd27XqWGA1JQ2ZMwueTMN9ZENoArvj0fUy9xMQVFGnOkMlfbgcgATWYLdX0yAiilXLdjekpGhTGACGSrcsacqNEtQQVROmEgdc3ViinIYodJMCr0DUrk79sQAB6Oo0NztGe/AOEMBdEQZt3nkwXVGxVDDQCqrToEuC3v4xoPHV91tjHLU2m6NkgaHze1wvV8onO7vJUwXnE6OQUiBJxaKQlkcqiOD/wUAAP//", "base64"));
  res.write(new Buffer("AwCxk8vySigAAA==", "base64"));
  res.end();

  return __filename;
};
