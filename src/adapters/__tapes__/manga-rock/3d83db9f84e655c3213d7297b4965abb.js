var path = require("path");

/**
 * GET /query/web401/info?oid=mrs-serie-153037
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: api.mangarockhd.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Wed, 21 Nov 2018 23:37:07 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d7ce52b1ce5372ea8283537477366c9f41542843426; expires=Thu, 21-Nov-19 23:37:06 GMT; path=/; domain=.mangarockhd.com; HttpOnly"]);
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("cache-control", "no-cache");
  res.setHeader("etag", "W/\"5a17082d38d44dd1b5e071c34c40003b1c3ed989\"");
  res.setHeader("expected-size", "13770");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "47d6fb7a0e6fa572-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA8Wba2/bRhaG/8qAX7oLyDTnPuNv2TRNL7kUNXoJgsCgJcpiTJFakoqjBPnvO5Kd8EjFW5ymHxaBgYgezjMk531kjc58zObdosouilm2KMcyu/iYretFdmGNCc7Nsm7/Ilv3w9lQ9XV1Jq0utM9mWVuu02nZs+5dJS478axeVulouR1XXZ+O/1RWi0r81G3nqzod78v2NrswibIe9j16OUvg9aapxiq9HPttNcuachivtps0jtRzAikXpDcmnV2tEya1W5bNkBou6r6aj3XXpmazbOzGsrmar8rNWPVDOiTTwUU1zPt6c98ou1zVq7LfinoQpVjVNysxzFdd14hh3C6qdhR3q040iTGI23oxzERT7/9ft6JsRddvVmVb3lSz9Goh7rr+NnUzpp4W5W5e9lWe5+LXdqwbMa4qkdouhm5diW07byrRLcV4153tqrI/65pFelG3Qzq6TGMVq6pP3fRlPVSiXophVX3TNOK62ndU9+K6vN4N9ZguKxcvl2PVir5qdnV7I7pWrNNNSU9k39ehn3WXTuq/SUM73JpBLLte3GzrRdnO09A/34L/buv5bbMTyzoNc3/iUDVLkW5ss+83XfH+Noi7elwdem2rO7Eub6thVS/H1GxdN7s8PdB5ekg3B3528VrPzMzPZJgp+yb96suTeP0xm++ftnJSSxc8nU4Pre4nVEg9dv2i6g8T8WFq/dY1uRSP79sJmZrcz43FozE9ZONVmqPey0+zY0qAlDhRJKAoLiUiiikmigIUzaTEAlLkRNGAYrgUCSlqopgjivpCsVyKghQ9USygOC5FQ4qZKA5QPJdiIMVOFA8ogUuxkOImSgCUyKU4SPETJQKKLLgYGH5Dwi+P068nDjf+Ecbf0PhLxOEKIEIBWCIAqRCHqQBfQAVYogCpEcdwOVAClkhAGsSxXA7UgCUakBZxHJcDRWCJCOSxCczE8VwOVIElKpAecQKXA2VgiQxkQJzI5UAdWKIDGQFHFVwO9IElPlAF4kguB/rAEg==", "base64"));
  res.write(new Buffer("HyiJOIrLgT5w9A+CYx/YicP1gYQ+cMQHSiMO1wcS+sARHyiDOFwfSOgDR3ygLOJwfSChDxzxgXKIw/WBhD5wxAfKIw7XBxL6wBEfqGMfuInD9YGEPnDEByoCjub6QEIfOOIDXSAO1wcS+sARH2iJOFwfSOgDT3ygFeJwfaCgDzz9iKAhJ+cmVcGkepJUfWwEP5G45lEwqZ4kVVvEYV8PTKonSdUOcbjmUTCpniRVe8ThmkfBpHqSVB0Qh2seBZPqaVIj4nDNo2BSPUmqOTZCmD79cs2jYFIDSaqRiMM1j4ZJDSSpRiEO1zwavnMH+nFeIw7XPBr6IBAfGIM4XB9o6INAfGAs4nB9oKEPAvGBOfZBnDhcH2jog0B8YDzicH2goQ8C8YEJiMP1gYY+CMQHJiIO1wca+iAQH9gCcCzXBxr6IBIfWIk4XB8Y6INIfGBP1hCLCcQVgoFCiEQIVkMQ1wgGGiHSJT4DQVwlGKiESJRgLQRxnWCgEyJxgnUQxJWCgVKIRArWQxDXCgZaIRIr2GMryGlR2XK1YKAWItGCjRDE9YKBXojEC65AIMcVg0FikAURg5MQxDWDLSCImMEpCOKawUoIImZwGoK4ZrAKgogZ3IkZyPI/1wxWQxBd/7cQxDWDNRBEzOAcBHHNYC0EETM4D0FcM1gHQcQMLkAQ1wzWQxAxg4sQxDWDDRBEzOBPzDAtNnuuGSw0gyRm8BKCuGZw0AySmMErCOKawUEzSGIGryGIawYHzSCJGbyBIK4ZHDSDJGbwFoK4ZnAwR5LkyDsMytnTASZJkiR5/xco9oSAWZI0Syd2mBbSPdd3DmZJ0SxFCOL6zsMsKZKlUEAQ13ceZkmRLAUJQVzfeZglRbIUFAIFru88zJIiWQoagrgT3MN3WUXeZYOBIO709vBdVtHv2i0EcX3noR0UsUNwEMT1nYduUMQNwWMQW0MeRlaTyIYTN0xfegSuWgOMrKaRjRDElVCAkdUksrGAIK6EAoysJpGNEoKQhNQpCEZWk8hGBUGRC4KR1SSyUSNQLLggGFlNIhsNBEkuCEZW0woZC0GKC4KRpQVy8cQN05c5UXNB8M2c1shFD0GGC4JmoGVyMUCQZYJgpZyklXIxQpDjgqAZaLGcLApI8lwSVAMtmJOFhCSuG2DRnKRFc7JQkMSVAyyck7RwThYak3JubGFhm6SFbbI4EYQntW1cFcHiNnlc3GYxin1VMLpH9W2FwyiujmCJmzwqcSs8RjGFFGCVmzyqcisCRhkuCgb4qNCtiBhluSiY4KNat5OixyOUE/968uLbf0Pgm1k2rrbr67asm3T+ahw3w8X5+bKQ+bqfL9q8bpfd+bJuqvN1v+n6sWzOV+fx3Jyvz+eP8+tx+ejp8/4yf7u52Rd1d+/2I+J306Sf7i6XY/voQ1/XD92U/Xgoks8uXv/Nrqrcba6f/7Ir2oeu/t7pyzw8/c/uu2f6+VedPs/nc/P0/SZuDqene1s2dXm4jGcvf3siLl+KZz989yS7r3Hvy/mXKveHx/eoq8Xzchy2bXlTZicP/779mdZKHVYcvuK5ufM+PbmXTa4uX3x/JV+9yzftTbafdZ8HcFu2FW8I9h8N4XH+xyauV6/+OB3B520GL8rbcr3t/3II7p8M4ccmXzy1P7x/+uviT2Oo6resBxEOiwVfPYSfF7nyLy+v9Nv1/RDefN4Acz8rJur90cNVH5z4MNCTTTJfMRCd/qU0v8j18KGyu9/lw8Tvu2YPSEk83Jj//0iGset3hzvU1/PV1dH2ETq+m6rtq7P9NorDMu/D8B5362qxO7mUqaknV/JLt95veA==", "base64"));
  res.write(new Buffer("QW3lYR3vy2Tttm873JTsc/q2L9clbBlpp009P2z7OWyJ2l9x9X7sDzurft5eN/Ww2u9kyh5t9lXTM6GKIoixEz9uGyHD/vUhmpdVXyf7fCgfdjB9X7blvtmr7Xp/bXv+1WFHVrqB7bZpPn36H4a3+2HKNQAA", "base64"));
  res.end();

  return __filename;
};
