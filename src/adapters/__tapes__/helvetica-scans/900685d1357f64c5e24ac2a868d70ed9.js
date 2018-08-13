var path = require("path");

/**
 * GET /r/api/reader/comic/stub/talentless-nana/format/json
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: helveticascans.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 04:05:21 GMT");
  res.setHeader("server", "Apache");
  res.setHeader("x-powered-by", "PHP/7.0.30");
  res.setHeader("set-cookie", ["ci_session=sHSqDchlfpzLoEeI38hxiPLK3hTpZEjUBQmUnOlTIqizROMY5G00tlYc1Um1td5Wl9bfT0UbME7YCgO6DSWEpebZK7VhQwJ6Rovd3TBWMz%2Br1w4LTG59o%2BK%2F36CANUv%2Fr2ZMJ6BzkGG14iFq04CLm9TLDA6J861x3n%2Bo2aN3UDsPNlcEjIREzKPdL0xLVoiaUXFMNfP8m4DxL52v6MOE%2FLf5TWa%2BrxzuCLeZcajCdepyZgdYH9G%2BQpIZkL8Y%2FPQ1D4V%2FeyWDCI3CU%2BV95uVuulV2u03pj4Ypi95ixHXM5G4vAIUqZSueSeNFsLGwFJIsT4wOltmsS0U7bbSokv537w%3D%3D; expires=Mon, 13-Aug-2018 06:05:21 GMT; Max-Age=7200; path=/","ci_session=Vae9t0a1ajUVVr%2BL%2B4CJJ3p0PtsuGV5Yy%2FTIzyK4DaP9W24swrLroY2Tr81roU4paAraqXItaNDyRFb3lVg6443364ZT0LJ0Agfq8cjFq1uvFHTjRGtkFnOF3VzAMvS%2FXQFqTOjwRKOFX9yzUIVs4onsfxaXOrcrszQ6CK1GoJAYsgQwAxZ5w38wSbyrVlvf6qnrpykpXZhcvFuiBENxMyVzNoRdcAGiyjF%2FSb%2FDVkyPo2%2FhaULrYg0QHfmsH7sqGUe%2F0GqeMnxTMiH%2FuIj2Dn%2BCMZsn72YyU97%2B0Z3FZK3LdbULQuLagiuqwIaO3iOVRAAOmyScXA9fHJOKMwWjMA%3D%3D; expires=Mon, 13-Aug-2018 06:05:21 GMT; Max-Age=7200; path=/"]);
  res.setHeader("last-modified", "Mon, 13 Aug 2018 04:05:21 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("content-length", "2296");
  res.setHeader("content-type", "application/json");
  res.setHeader("x-varnish", "832051909");
  res.setHeader("age", "0");
  res.setHeader("via", "1.1 varnish (Varnish/6.0)");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+2dS4+jSBKA/0rKl74UZfLF6za7M6NuadUaaUerkdajUgLpMtMYPDyqtrbV/30jwdi4bFNjXPT6EFU+GBIik4gg8lM+wl9nUb5OolnwdZbEs4Cyu1mm1noWzH5Vqc6qVJcl+awyNbublVUdQkG1K7CytqDOkj/N3TPpc6mVsG0aSR8KVkkc6wwKbDhQdbXKCzj4R56XOsxfzLmiSsoKzn3Ki4T8XBf1ixEY6zIqkk2V5ObmTxVJSlKtNHnRqiDM/u23e/IT3Loiz6okqixVnVY6JuELWedZWenCXK4q8pzXaUzgCTWpchJq8iXLnzO4g3ww4n7K9PqF5EvysV6rLKlePtyTTxnJi1gX5oZYq5Q8J1BPtWpaUGhV3ZFyo6MESspoledpaeRviqSEBoCoSutMPZoWNDfq/1SFAoFJpooXosIkTapEQ6EuNFnmxVrH9+TXlS412eh8k+o78rzKSaTONLm1io4/3JGVinsCm+eNmueN9fKlUVdRg5VMo6DdcNnL/SIz/z+Akh7NBbtK27aW9UYXmarqAh5ukz83D2EUDCqpqzTRxZ35nmRx8pTEtdENNNVcUUKbTHPzTDc6aER36gFjbpJKQ3ufEqg3y0EC1KJ3euxpBR6izPWTLoxSQOVbu5dVXjSGyuuCbIq8Uo95Bo7TKktVlV5vqrI12RJsRDrrJu3zd/Y1Jszrx1VTXpdNYxNQZ5omjzqLNDxeTMylmzpVxvuISuGZ7sElq1W9DjOVpMabwcHvN9kjnI5qaNs6WqkNeB0UwSljVVV1Th+Da26/R8Z9tHlPmE1dy3YsWxLGA84DZspTVValbt8X+LOaD7HtoPmY92wT7wV4ls0sxgn1A+EE0u0qaF4xCUc6TtoD3jX/oS5M81dVtSmDxXwxX+n0SVdJpMpIZeU9OPJiXizmUQ46ySrzBWJDuZi/euUfDt5zKG6E97SyrNO0TP6r44dJ6+3VCK/m8q9UUeoCfOJI8mI++wb6a81YzoJ/f8W4iHER4yLGRYyLu7jYBUPhy7s2PD400Y0yo0it1u2hOfojB/dpDxsL7/yAmnhZh/sTpvgpT+smttLG2tljDZECDsHkJ8LuPuJSy7aq/vlXAVc6XujE7uuAexhFX/nwsD8KdrE/tgIcU069VsAZf5QX2AskxCespbPFnDYf81gJFIGwf+XpPSV/b1VOaEAOdBlDGE1zFT/81aq7G4ar/9a6RNuXGpvse9CPnVzyTyN4b89dhVa5Ldi/IGdb1EaWeg3XfV7Mf4DDpIj2BxWE8NbTtieWKoJONv9yfKbxnBP2Z5ZNiS3AdoHgY+KRNAIgHnEQcBiPaN/+VFzgAEa5vcJWY0bvv3+7Q3hBeEF4QXhBeDmGF8md0fDCxsLL31T0BUJG9GUfcKFTscLe6V64lSF1uXZsuhTXogt8hOm6wJ/ohd54unzvjazvjezd0IUNoAsLSF+TE5ALQ3JBckFyQXJBckFyuTVy8bzR5MKvG3aBWPJU9oYNyC8Q7gjdB2G+G4nRsfVU9kZlrA1catHDsOyGjs+WVFBJrycc5hHqBIIC5IwZnOkESBBAv8fgDB8gHB6QtzQ+AfVwpB6kHqQepB6kHqSeG6Mexx4/2SSmoB62D8LiDephh2HZCwXV0gt97+opKfA7n1A3sP3W6S6mnk6AgHLxPahHDFCPGKYeNg31CKQepB6kHqQepB6knlujHs5HU48cpB52nno+mle1eaRtuIUewVrtTvZCreKCa5cqaevrSYa5hDEI/4GU40iGecRmAXizPf34DVvM5RHJsB3JyIDstfjezLKtG5kFmQWZBZkFmQWZ5aaYRdqjmcUZyyy/FPlmZRpOfixMp3g0MwVeY226i6y4uejknFS4ZFJyN1byaqbxLQpIQgMhRzJNI4DKQAjo2YY99X2YxhlgGicg57U8AeM4yDjIOMg4yDjIOMg4t8Y4jhjNOO77Mk5vHso9yzivZqCiZegt/ZAp37mecbhtEAV6JXvUuptOgNy6+uTjNu4A47jnGGeKuadtW5BxkHGQcZBxkHGQcW6KcdzxK26892Ucvg+/3lnG4YehOFYuEzryHJddyTgUHNEjZtM2YI4YwTg7AdL+Hhu/gSu8AcbxzjEOn4ZxPGQcZBxkHGQcZBxknFtjHH/8OI4/lnGG1rj2SMd/Y1XxK97Ryo1c3/N87l3PO8w2a3GAd+jlXVwrgDbzVmY5zrDXvg/v+AO84w+vKp6IenykHqQepB6kHqQepJ4box6Xjd9B3qSPGYU9n3VU5OCDEcSg16tzzAiJle0vOLkyZ7mMlOMqbrOjEHwp4dAmEx8LuBy3W7wVYHaL24F0znvoRd3ZMOJQe4BxqB2Qk/qdgGyahiDaINog2iDaINog2twU2ogr0GY4KfElaNNblGNQ4RhtDhfkKMqEp6iQYXT1ZBU1gzc2Dyj0aHQc2hgBwpQ3Q0lnPNR/P7I5TlPcIxt6gmwmWo1DMWExkg2SDZINkg2Sza2RjXcN2QxnLOYXkE1vgoqyU2RzOC2lvKVLWaTdqHGq8WTTOZjZTkVbBxzpoW5ge0EzhDTtMhwOQHGcxZjvyYadIJspZqO6hiDZINkg2SDZINkg2dwU2fjjf4qBDmc0voRsRI9s+CmyEYdkE9nLiLqhS+3rfp4BHEw0vZFZXdz2Rhd76E6AG/DpN1EZoDjOXtwjG36CbMREZINJi5FskGyQbJBskGxujWx8h44nm+GsxZeQjeyRjThFNvKQbLTypJK2H6nrlhK3vRE3s1Emg80osukEyO1a5OnJ5jhDcY9sxAmykRORDSYmRrJBskGyQbJBsrk1sqHwNx5thlMTD6DN0Eae/viNfGPv1OFQjvmdTRX6jAkWXQs87W9804A7Y36RoRNAZQAy2EAe43faO2U44ziRcQ945PDuqalGdTDBMbIPsg+yD7IPss/NsQ9oeTz7DKc4Hsk+/REe5w32ORzsCUVkSy/WvsOvnsZyLdrsqhJ2QC/Pk9MJMOwDnj99vmPDGccJj3vs4wyzz1TjPpj4+P/KPr9/+x9X16c4DZMAAA==", "base64"));
  res.end();

  return __filename;
};
