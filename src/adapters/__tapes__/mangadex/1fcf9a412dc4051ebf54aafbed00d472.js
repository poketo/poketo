var path = require("path");

/**
 * GET /api/manga/13127
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d10408ab43934d533de1b92691270332d1541997622; expires=Tue, 12-Nov-19 04:40:22 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=6o0hi7capm1iti11bp01f1f8bc; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "478651f29e17a51e-NRT");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA8ybbW/jNhLHv8pALy53gDYV9azciyKPzXafiiR7i+L2sBhbY4k1TbokFcct8t0LSnJia7e6vGgBvQliibL4+8+QMxzSv3srlBV6J797c3VP+kujhXfiff6Or7Ai8/m79vbn71jEwuz4l3X1PUvCIsuCPA483yvJzDVfW66kd+Ld1QR3GxL3BOfcbn1AEChLqNw3SyphtgVbEwjCkrQBtWg/LnDFBScDm1rBjFADl+4G1yBxRaZtdF5zSYbgN1VynB/DawkIc263sKlJE2xVs0QO7nV1s0JpYK7ogRvrt4/P0e6auLfUSpQGECrdlBUBVsilsW3LG7Rw5Xq0BVyvCbVx3VloJa3r8HtaNpLDm61q+Lzm3bfXhOWO5vn5Y3htj9xbVij4nF61AlMJ12hp0Yi2T64z3ADyFZcVLJSGmhsQfEHHcNa4Hj13nBv3dlWhwSWH92hNUyvffYV7izAK6MFqWpHrunzgqjGAWjWyBGVr0rAmtRZ0fHwMPzbGguBLartscOve/o9fG2X/fd5orowTdsmFoHInX3cXKkXGhw0Xwt0wBAsiwWXV92DZ33BPfO/5nuVWkHfifdS44kvFfXjj/uw+Hnu+h9pyY70T73TJLS7RXWpsrfTBJWPRNsY7Yb5XkdRkvJP/hn7i534Y+mHkh7Efxf/zPYHGfpnXuLbkvsA5qUBZfXGe5J14P+IanR/tLi8EVt6J98vae/S9p8d+9+I8CNLA/XevRNM+Wnh7Lbw426M7ba3+URoi2RrxrtZEcIFbA5+cIuc1yorgQuMKLZ+jENtdD+aqdF9RzTzfq7Rq1l946Z2Ecbj72Pf8J7MVar4kuJ2jNHuNv4TeSbDf2F2QjRB7TaJhk2jXxPIVGYurtXfCkphlYZgk4aPvxVkUFeGYAOmeAD+rBm5r1YgS7lAsYcNtvRsNPswaC1e8qu3z9WulDcE=", "base64"));
  res.write(new Buffer("P39CbSH61yS1CPIsYmnmtEhYXuRjWiR/lRbhJLWIsriIWJI6LcIgjYsxLeK/Sgs2TS2iICiiTos0SPMXa3GNv0FJUONMoIa5kiDQ6YA+rEkrWJOg/gYJOMcZCqEGCpA5UCCLioECb3DF4b2CK5SmmcHfJEFexBnL22kiyJMoGpMg2pPAJQjXjdacynbG/IGsgbfK2D7iw7USNEmjsygtgix2xFEehcFLiT/KzsaAa02m0VgiGII1J10SkATTwFqrNXdZQql51ZDGaRo9ieIoiNij70WMxQOj54cShAOjO2Of0ULpLuE4RztFK4cpyzMWJQ4xZywLXor4dmdkaclASQJ+QDvNsRsWcZTliWMMwzRN0zFGtsd4jlbydZvd9Cb04VpZuF3rNv3b3TgjNNZM0rxhzpIkczN3FGRByl6Kfs1JzxDWqNFNzRVa5YMlvULTXRRoYEbGcjTTNHqSF0VaBI++x9IsZPkYeTAYu3e8Ig13Gu9JuNXMXa0a49ZZN91y6wzny0mamwV5kke58/QoigdJywj0pXDMmuCe4y8IKy4caklQcmNRzjnCFjRVmsw0p+owYhljrEvjs3DMz6NiD/y9snB5T25l3Rn9Eq0Bbg182Eg4b2ZTNDPL8oJlhTMzy4IsDV9My8HwXxtO3ai2rckNwVytCBBMY2CuPzdBQOVUhzULkzxkbbzKonAsIkf5YFSfo4VbQj2v+wJLa/EjAxckp2nmLMijJOrNnCUvhb3sgrGzLJYkrbN2m3pXDWpeYhuu2/E+XRsXYdzbeCwlifZLEp/aqpgz7Afn1xeKDLjxfbEhIaZr4KB3ZnZo3+wQdL/0cLqwpJ9BuYHLBxebuURLpQ83ZNbcEpxqze9pkolJix6mvY1ZMIaeDMbxO9VI66qXcI33BGdaNW5BfaW0reHSLa63r65Uo/fCNk4zPetUCMNOhWDUAeLhbKY25NLQbqHBbT+n3eAGPsg5wakr8E4WmmVZCx0WbAx6f115apZ79RJn1qcR0BYcb61aT5U3K3LW8ebpGO/+CutUdnCO9GeygBI+PEwXME57wHAMkA1LI+TKXmfkMhDTIn4dlSYEGXRDNYwPIdNDyP3MetI8cbs+irIwKkZ4wv0U8prgU632gitqgkvpAlJbETgybUWrG5KuwTnaeVfo/Fk1spquFm2i5bTIxrTYz7MuVNXu6CFcEbbbTVeur3CnKnIfp8vK+sEaxWOs2dd2P6/RkIG7jYIbnM3cQgm7TcRbXLmMekWdxZ17EJ+0ClHWz8mDwt5Ahf3Mq10q9rUg+NQW+Z2Pv3b+v3DZJ3crya7Af0Z2Q+3K8kJV7SyO8E7JJU1yH6xTJN7NB8GYIsOE7IxXFRkLtwKNGwXcwKnYuJ3ANkJL6vZ029L36Qanyx/mfVYSHpaLkkP+YSp2htYK2u2GO9d4yk6mG7DDJO9ZkzHW4V7GuW43zj88PDFOtLLdQQb9RDeoFAwgv1G79+GjxI0LbmoBr63pMpXJgrIs7kHDMVD2jU2KWz5rTzMcdfPWdBGjokVkSTGGGHzLls5PL1TV/XOmUPvPFX3nx7do1SuDk10vJfkTfDoCz4oB/JUgcsP1E6Eh8TRkr1VjJj1wk5yxnvdwdooPeYclvt05o/MuEe0/vVX3k83BkyyPetJ4jDT7RjGzjaoOrtwdMJguZZ9ZsCQco0y/KnJo2R4gmzRbH2TYYL9lwJZ8O5I6Q56jlMrCdSMtXKhNl2J2Y3ay1GkW9tSHFZzokHo/V3o+Z/emO2f3rtsdR9mdzpt4NpGkUZceMpaNIe+nTG50unz4rTt4OOkKThKHSU83atBhiQ==", "base64"));
  res.write(new Buffer("6uHIwCHl/nbpZGmjvHffQdV1QMv+PMB0068rhMij/TLHlKeqKO5sHBSjHryfQ7kVv5unHNqlpNW2K+2cuqOvb90hYKsmjx0WcY99GH3CA+zi6xB7sArgU18FJGFfwwoGR/QOOfNv7pk5j/6hPencJ8vdiecrJYTaTJeYFT1xPEKcDUs4CJ9QLJ1bP4G667Zxx5ThUs7dFlNb0vwPF2LCGynJbiMlyIMRAYZ5laO+teROtzivviGj3E8YurMtmrqrVygr4++v8+ETt3WpcXN8fDxdRfpUM8jGXCL5s3x6N6G3ydjTud2dCDe7Zn0hdCfM5+lOCkGR93qwET3iP9PjHdnJz+9BX8sK0sNgzg73Zb5GPHK+v8btiuRk6eIiZT1dMEJ3kJcdLJy6gN3Oe26fuNunmS5tf4grKcKX4l5y2VbeS05w6fpYkdWcZiRbt7UEG3eoaTF3B5CxmddA7gmUpQt+XYsZcdemXHx1FqikA2miOBlI847zV3/rL1TCOE5Yn8EM1s+Hooxkq5O1d95G8DgI8zR/IdoFd78pMIb0orOrEJbgDdrfaGK2i4I8iLOkC0hRfAgYHADu7xlLMrX6fybLswHLqeSrZgXvGoua/j6LFSwJHx+ff57mfXjjPf4BAAD//wMA9jxrk1U5AAA=", "base64"));
  res.end();

  return __filename;
};
