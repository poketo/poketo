var path = require("path");

/**
 * GET /api/manga/21117
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
  res.setHeader("set-cookie", ["__cfduid=d24927aafb2c44643bdcfca962bd585d31556248933; expires=Sat, 25-Apr-20 03:22:13 GMT; path=/; domain=.mangadex.org; HttpOnly"]);
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4cd56e585a033048-YYZ");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA8xaTY/bNhD9KywPyUWxRYr6cg4BkjRotwkSJAGKoi4WtETL3JUoVaR2Nwk2v73Q13psdRX1UIAXrZamZb33ZoYzQ37DBVcZx5tvOClvRH3Z1Dne4O1aFjwTervuPt6uKSEkXF1V2Qviez4LvJhS7OBU6KSWlZGlwhv8oS4Nz0oltXHQx3LHTekgqRFHuqlEjbSoZdloB6WCp88qrhykBDdoXwt+jW4PZTc51yUyB4FywbVB+1zcyV0uEFcpSrhCStyIGtWCp+1zpWl4++uoltnBrNAvUqNG7YXIpcq674i7qhZay1LlQmu054lAGb8R6CCL7neUTK4VLwR6UqRcH563b16u0HslUMq/IHOQuhtChRBGo6zM9+2DV6vVTy+wg400ucAb3E4x6ImRhdDP0VuuRb0TvMAO5rWR2uANftNcyYJfS/SZp9yU+iDbTxtzKOvHPtWGm0bjDXVwJlQtNN786TuRQ5njEcfz/nJwzrW5TA68MqJ9TBDidkxlly0ovMEXvOJKaDEO73Oe4Q2+qrCDD0IZLvHGdXAu1bVu7aBo8AYT5roRa1+v+Io3+GBMpTfb9XZ9e3u74gX/WqpVUq6uqu06q7brqi7TJjHb9Us3DN9+oO/CCDu44K0tEdeL4gjf3zv44S2/YY8EcRy0dzdl3nQv6mEwA1MGyN02LiOivXq8u/b3aXtlYXfvHke8qLv6qPtDjkOMdvfdle1GQpIybX+jbrCDs7psqkuZ4k1Ixv8GHonLzAHpvxuegomXtGPvOLMdUE2egyne+RRvnNJZi+FFhTfEp4FHIhKG907Pjj/HjnfOjteB6lhg3b23P17ZDpFnrOcD0vUYmT2Bu/7eTp6CaOSJzfFEz3maQqZH5npaBjOBFLmWkkBHErw5Esg5CXug7+A4dgL0vREgmQPongOkQEcx0XePgIMIwIU4xofBB/qA4iIwBD3N0iDCgnsHU5+6cxGWxIC1XxXiqJIqOZwhynYniPzgDNEFl4VU8qn+vivvvv8/oEjohdSnZLQFdymqo8cP+kcgBPZLArFTQS8eFJxbBUgEsFKVoorL2kG+OXR31irpjkpG8WJ0z6DnRsg/+f8Hi5+lEtNB4rkFjISAhDdlXciUt+nwm1LYKi+LHuSNliI7T2GGSByCZbqP0DEI3XAqg0GbTnJBbqcJ0DFO0xOi6ClRwaTMKFVXurzf74XS", "base64"));
  res.write(new Buffer("8sZeUyDxaArhUoSdKTyah3XyU2gjfX4v7BSYhIPAZA6+D+C/FknO676oLffod25tGPfiYBQ3WIoOZJ8+cGE68XDmA4mZneK60SCuOwcf1rEv205H2ZhW2VuLlQ3ZqKy/FBoo0TuPZH3atQcBeXfU/d8KdZCtezEM/Jaq3y/fJI7nKIJ1+qtSGZ4Ya1X3/VF1thTSXEkNAzejVoroxsEgYjSHGDYR3pVG3nTh2VodvYe47C1F1emYzKZT/ZIcgNJpb6em0ajpbMoBeyKfDwJ9EkktusDcZlawf2unyOQhRNOlMLvUiYAgDCvjfjmmaNIZCierdQr8va+2BAKlFwPm4lrcPXPD0VBm0xfYW/pkmvSLrSZB47FZFpGlgCartjdpqfemAmMDAW3TxE5pg1HaufwFdoo+KX5tbRlFg4cyyl2IpxM2BNL5NodsPxrkmks8okkZfIc+WrwOUzZu5YTxQliPFbeLmh6wNI7OUzJbY/CRo9MMjJxwFK7Oi0iaghWMTPdxLEXrDnbuzYEFUC9Kqdqd7DYneZU3O1ttnURj7RCGC6GBfRqoH2zf/qhgRKAztAPftrOn7w49fRLTGYqCE1O/aIoKZTLj6Bn6+c7U3FoDCLwBHJkDd1oNJ3mjLQ7ghI17zGGwEBQIwf2CGz1mwpaa6NjUcGcAQwNtlOBaKqG1tSrSMXkK/YWgjl1KWBz1hU2fGw+BZhK+TvaOTw6gwEfY2dFy6eDCZ7typzzBnt8fZfOVqzYNa9Mxaw2AjPtRIVsIrFXJJZPjMul/zsPs36Jwu0ZCq/pcAnbaxmxqLdBrsWus1dyN3VFzbyGszukZ8NXerQXsi5ycBpkeHxkcnoGEBG5Qw7msq8oYszlbdYciOppL6eh5VfZUo6Ks26zVWuMIHwICXYhsQWF20gSbHirzrOyUhHE8lN7RXIoDu4i/orRUTw2qcv6lOw27slZn9hAEyEJwnc576Oy9TzMy0T6aHCuD3bHkkRNj8IThOIn+IEZYajhue6R3PKCM3/+G7/8BAAD//wMAuKW78k4uAAA=", "base64"));
  res.end();

  return __filename;
};
