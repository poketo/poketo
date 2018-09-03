var path = require("path");

/**
 * GET /reader/series/itoshi-no-muco
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * host: jaiminisbox.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:09 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=dbe4c48ea9e357c837bdfdb44413638501535939348; expires=Tue, 03-Sep-19 01:49:08 GMT; path=/; domain=.jaiminisbox.com; HttpOnly"]);
  res.setHeader("last-modified", "Mon, 03 Sep 2018 01:44:06 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-cache-status", "HIT");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448ee1fb4f5164-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+xa63PbuBH/bP8Va3Qc2ReLlORnbJGpH8md0zxuYl/Ta6fjAckVCQsEGACUrPZ6f3sHIGVTDye+6QfrQ+UZS1wu9vXbXYIA+hsXn86vf/35DWQm5+F6f/qFNAnX+4YZjuGlkTpjICR8KGMJAMfH8I6ynAnW0nAm7/p+xbjez9FQyIwp2vi1ZKOAnEthUJj29aRAAnF1FRCDd8a3uk4gzqjSaILSDNpHBPxwva9jxQoDWsUB8eNEtOOU+bQotG/t8j+9K179evElfZd8/XFEo/PsAztP9q5T/PsH71aTsO9XAsI+Z2IImcJBQKxR+tj3byvDdSTvvFjmvkKaoPJry3yTYY7av43kna/NhKMXa/16FJhJz9v1dgko5AFxd3SGaAiYSYG1Q7HWlQMPeltTvQMpjPZSKVOOtGDaKbeyBzRnfBJcM8M4Z2X+8gtGLaem9aCmValpTdW0pkoWzHmSt1RrNNoKcna16Ri1zNHLmaj9rbydw2IqNU6Ep+gIxW3lxq7X2/O6viM5GbeaQKyk1lKxlImAUCHFJJdlE50ZD5jBnBbTaNKi4Cymhknh3+WcgMuvgFxN2Z7kZS3UcxL8GX2UG1SCGlymUWn9sqn189XVEzUqrf+wNmpkPqPu1Mj8qTgamS9TyESCd/cCZ2qVzOXlI5JbTqIrZ0FzDEiKAhU1UjWquBasOUsQ6vqYGzZiOC6kMo1RY5aYLEhwxGJsu4sdYIIZRnlbx5Rj0PU6ZFkz+Vv7l9P2ucwLaljEm/3k8k2ASYo7caZkjkGXzFrhqrodSz5j/p+67nPPWyhZoDKTgMj02MWuqeF7TfARMbN9b4yRzcrlvCynaZP5MYjq6nXs2ucylV4h0m/IPKbcLMJWmQ3vZSqXj7WW3tgAPjb2sf7w7a5zq/3bryWqSd0qHrpNozX8L2ILXqZM6G+LDtfX1kZUQSa1gQDInHBysr62xgawtVUxBDBmIpFjj8uqbj1L34YXL2Br/k6hpJGx5LARQG082d5eBwBYW1t7lHvKTE4cq/18dh01lmLA0q37ku0mFA9oD7tHe8leQg9fHUQdjA==", "base64"));
  res.write(new Buffer("o16M+0fdQRL/WaMwauLFmZVLzRAnLl691rbHhDaU863t9bW1h5g0e0ehMJZCYLzwMGEdb1y44IRPHND9owN6jQF+PQmJZDKBmFOtA2LpCRsBSwIyVrQoUFkS/Xa7JGGf5akbZMuazKbVvZWPJZjnzZVcRIVA5YoOKF+sir7P8jTs+7RhbeZkERtrS1LSdmZBRyx1aUAck7u2DpXcRWyJa+Px2BvQGCMph87IUc/b9+uU91Ep6SYzA6Zyn7MhvmYDRXO8UThAhSp4rJi0oabUL4YsuUmYwthgcmMbQDCgXOMLjXGpMDCqxBeVssBKf6HQlErcFFTRXAebh2ebvR6NrUebvd7m7ulmr2f57EXvfLPXs87c33G2uJ9vN3tv5z3b7L1tGHkvgcZmQfThBQFDVYomIDcRp2JYQ15NIecaJhtiOyqNkcLTo/S1NmXBkpjGGRJwUymLFkszcwy9TnF3Yh9qFZi+g8T+a/7+XvpN88jaNE3kAYUBbcdcxsO2dBkTQl8XVEwZ8oyE76lBbWzRINWo+75lWDDlqeorWKWaLDGEM20es+IKFUMNlmWpBdOY2bwdSJVDhf/3p2dIVZz5BHI0mUwCUkhtCNA4xsK0p68FpHovCPtMFKVpzLZJ/WyvxBAYUV5aK6DgNMZM8gRVQK4lVAygnRs7TgJQkUDGDKAwqKraq9giO0OahkbZJKjQt46FsCQBbDHX/DFHqmyN9/2EjWyEXBnXF99krL6oMizm6Mypn7hkdmRBBXISNkk00VDVOFR9qXKHJvrGyOKmpoX9mienKmWiyu+AdEhNqCZl9tqxRVK58HXIkx7B07cnmmi/VuzZtzuXUk5guCwMMmcxMDGQc16arMwjQRm39PsyXnhIfM8aJ1/7zM3c2kK28zKWN/tHB/Eu7r3ax6P9xLeke3UKNfsXJt5tkVYT2UWbue0y4CRb47Luvc1uvhiuz80T+37WnZUw9TcKT0uTSdX3o/AYPlz+/Zerny4/nsI1HdJJOWT9SIVguZRxlfdtrquJkIVmuuK7zhAyWhQTSCjjE+BsgCAHzqQdoCCkaRsp25HLcDgdMkMhkelOXRga5Figgr/InBpdtjUVYDKE1LrQjrgco/LgjGpMQAqgoJByK8AqsYzappqtTw+2PlCR0rJIbDPbXp9L+SURdq1oNh+q2C5hTpUsi9l6qJnPM1oYVLoa1GRAjrmrrBlUYilu6hkFDDgODOiccpvBT22vciy4pMlcvvko/I7f3V3SdKcjqsZrm+oSD6e+P9EK+/WoBdMXwu6uyc6oGjKRHsNbajZIuEB6xBz7lnCjSBhN4KkmGaQzpeovvpj+fibvfifh7LW1YAd6ne6h1znyOq9gJmeeHdHesyPaayDaa8B3gQMUGi2qy8irheye19lbMWS7z45st4Fst1mYTOFYqqG22C6/sVro7nrdoxVDt/Ps6HYa6HYaIP6EVSteoK0Wpj2vd7BamL56bkhfPcTxVQO8nzNp5AYJF2krh2hvtRA9em5Ejx7ieNTss4qhSDZIuIT4f0y/jenhc2N6+BDHwwZ8P1LOUU02SLiMumqodldsHnzw3KgePMTxoIHfOVUbJJynrBaaXa/XXS00958bzf2HOO7PvJHqjEmxQcJl1FVDtbtiqO49N6p7D3Hca+D3hfLhBgkXSKuG58IbqvsPTRPtkmvC9NdS35jMKn9Yrqq3MhvnRG7piFZUErq9Pv8HsH/nnz6+vfzxl8+n15efPsJfTz9fnp69f3Pl7v3gO067ZVnr0ZlUxq6xQQCtho+tk3lO57Llmt/Ebp2sN/VffPrYuoY3F5fXcPbm/Q==", "base64"));
  res.write(new Buffer("py9w/dPlFby//PimacLWoBRuhX9rG/59v1Xp1OmvEEAi49KmuBcrpAbfVAm/1ao8bm2fWD7PLcMH0JoLSKu6S/VExBCA3W962A61d7Sy9Jbvt+DlYiReQsuriC4LMI/scq5uPcjYujcvRVPbps8m1zT9SHPcatl9utb2Pzr/hN9+g+/w2p1Jx7vt2dIVyXnGeLKV6K/blcL/bG9tn6w/nEcSsv71s9vRARQ04gjv6Ihe1VkiwR6ZcIuoC0ne8Oy1wsHNVFx9KknIgeRcjkkYy9zZCoVdqcUEoglcVIOr2ro35Ik7CZE0RubPs5lQ6V6+n3BflvXWyeyKsrV+IKWpNombfc3uH1WkcP2Ucxfu3K5TwwCpKW3ImF3yZhrqIxtAFd4fj6iXuZmCoow40xkq7cHlACayBLu/mAAVU65asL0lI0OZwAQyVLhjT1VolqCCqJwwkTrm6sQU5TBCpZkUegekcnfsiQEORlGhudsz3oFxhgLoiDJu88iD64yKoYaBVFadAl0W9vCNB4+vutsY5ai13RolDQ6b2+F6v1A43d9LmC44nRyDkAJPLBSFsjhURwb/CwAA//8=", "base64"));
  res.write(new Buffer("AwD0B4D7SigAAA==", "base64"));
  res.end();

  return __filename;
};
