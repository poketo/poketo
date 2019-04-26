var path = require("path");

/**
 * GET /api/manga/19729
 *
 * user-agent: got/9.6.0 (https://github.com/sindresorhus/got)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 26 Apr 2019 03:22:13 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d28eb0c36b531137bbf2fe51ba2ab03f11556248933; expires=Sat, 25-Apr-20 03:22:13 GMT; path=/; domain=.mangadex.org; HttpOnly"]);
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4cd56e59d803ca96-YYZ");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA9SbbY/buBGA/4rAL/2irGdIDl8MFMVdiuuhQZADEqAt6sLg2lxbG70YlLzOJtj/XlC272K3EAJDgZhPu5YJWY/mIWc4lr+wytUbx+Zf2Kp58mG5DyWbs8WsqNzGt4tZ//ZihlZze/e42/wFSRqjNCliOVv7dhWKXVc0NZuzX0JTZX8rQtlmRZ393Hzy7Tx760LxpzbbFKF8CIWv13n2Uyhal2dl0/o22/qQVb5qQuHbrHnIuq3Pdq7tsm4bvM+evQttnhX1qtyvi3qTubI8jn8+jS5CVhYPPuuaje+2PtxlvzYH/+RDnhVd1u1D3WbNPp7Pddm9j+dYBff5OV5j2Tz57FB026xtKt/UPuuCq9uVr9dt/0nBu7Lqr2vXtG1xX5RF93zHctYVXenZnL3eeh8e9mX2U1X7tnAsZy50RduxOXv3cZ99cJWr9u22iG/su20T/s8bbee6fcvmmLONr4Nv2fzfmFPOTS4wF+Y/OStd2y1XW7frfDwDsHio3ixrV8XL+Lvbudq3/nz4oXQbNmePO5azra87V7A55Kws6o9tDHa1Z3OGgriS8cKqz2zOtl23a+eL2WJ2OBzuXOU+N/Xdqrl73C1mm91itgvNer/qFrOfQf+m+T/fvv7XYhb8w59bH4O3DIflerdsDyxn/v7xf07o75vm42O8zv6M/v5xMRNWG9SLGctZ5aJ4CAIVZzkL7nBxhlVTFatXB1d+9OFu1VTxSN35umsXs7XvXFEuZm/++vofy7e/gAIAkAAY/y6VWczYy0vOfr97XxhpawSP/z015b6/g1HnP+6v4F/F+HxTV806vtzcs5xtQrPfLYs1mws6vzrF4vWzq7P3nXfVV+OWvA/AHwPjgXpfll8NEddDxHlIV1S+7Vy1Y3MkkmSVseolZxRB6IJDXnJgwhwcQXGjI4cAIWGIA9Ll6NdDjT0HShRygIPbb+bg1l6DhObTp1fvnnz4TiBKKS05f8mZtEYgDoGYlEGkNCRARhBtUJohEJ0yCEqluLERRAFKPgSiEgYRxpDQYCIIGdSDalHSIMQNUA/CpdKDasmUQYTWYESvFgDQoFoiZRAgHaf8S84ECU2DEeEJg3BDIMBGtQQqowfzCKYMogSSFfCSM64R7SWIuASBu5SnO5eGzDGTcMlR6EGUlEGEtEYDveQMteSSBkAw5SKFoxAWFPVFiiUxxJFyjYLa", "base64"));
  res.write(new Buffer("SsNRxNluuFB6HBBS6grkjauK7EPc1pau36h/n7BYAqU4Rr/Q8kG9Uq64UBmJklS/CHOl1Dggk4VFcWGU0qewXOZGfkmTcv14DIuOHBxAq5FAJgsLGq6sEaew8CGalNPjMSy8T48kOelxQCYLiwShBZzCgoM0Kdf2fViEwXNY5Dggk4YFyJ7CooZoUt6pHMOi4BwWMQ7ItGHB2C4io6S8FWftL3G0Nlc8v3748Or9ytXtd2pEEkqp6DztaYgj5Q3k0a9+S9/7NRLIpH4hxlWMtOIEN+JM75dEi4ZOtTEOrsYp7+uv/AIYB2RKv5Tqsz0pREU34kzvF1cERtLJr8F1OOUexdEvDicOPg7HVHodafrWEcnYO7oRZ3q9oK9azunxctbjBUfKjaM+HlyaIwbYUTAmlYvLPjcKZaS6jWZyt6TVoFDhsS0pzRBHyt08jkKiIX6Sy4yCMa1col+5uBW3BmV6uYzigvRp3wh6ACP5liSHUw8PaBSMSd3C40Mf3HKlbqNJwS3g4vdsMoSRfF8V7al0BDEKxrRu9d/NE9qbaaZ3SwvDLclzUhyquJL+8jQmRZLnpIijYEwsV19xIcFgxUUpy6W0MlyfKy49VAen3OM+ytUXKVEuGAVjWrn6mUJglaLbaBKQi4MQAGe5hqb8tze4EfkVxuVD5lcsSOaahr33xfN+Hwp2o2gc+0zPwepRkKYUzQD2zw6D1NLeRjO9aESW7DG1RNGGpj//sUQ7tr+MNaMgTbui8aNo4vqBkG+mSUA0CUJIexJNDUUFfyjRQJ5EU6MgTSoa9Jt8Ai4V3EaTgGhIBgWdRRvKM/AjiXbcXUoDmsRtTNPHBo0CoWX8FdH5t1rs3Rv28l8AAAD//wMA6gT0lj83AAA=", "base64"));
  res.end();

  return __filename;
};
