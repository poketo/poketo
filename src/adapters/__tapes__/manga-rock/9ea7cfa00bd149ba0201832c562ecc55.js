var path = require("path");

/**
 * GET /query/web400/info?oid=mrs-serie-153037
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: api.mangarockhd.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:18 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d0e06a92479d51e2ab96375715946f3641535939358; expires=Tue, 03-Sep-19 01:49:18 GMT; path=/; domain=.mangarockhd.com; HttpOnly"]);
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("cache-control", "no-cache");
  res.setHeader("etag", "W/\"167699a818aa622c20863567c6586d76928c6b0f\"");
  res.setHeader("expected-size", "13770");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f1fe9991e71-SJC");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA8Wba2/bOBaG/wqhL7MLOIpIird863Y6nUsvgwnmUhRFoNhyrEYXryQ3dYv+96WctDr24B2c6XxYFAFqheJDSXwfx/Thx2TZrcrkIlskq2IskouPSVOtkguT597aRdJNL5KmH86Gsq/KM2l0pl2ySNqiiaclz7p3pbjsxLNqXcajxW7cdH08/lNRrkrxU7dbbqp4vC/a2+RCxw6bYerRyUUEN9u6HMv4cux35SKpi2G82m3jOGLPEaSsly5X8eyyiZjYbl3UQ2y4qvpyOVZdG5stkrEbi/pquSm2Y9kP8ZCMB1flsOyr7X2j5HJTbYp+J6pBFGJT3WzEsNx0XS2Gcbcq21HcbTpRR8YgbqvVsBB1Nf2/akXRiq7fboq2uCkX8dVK3HX9bexmjD2tiv2y6Ms0TcWv7VjVYtyUIrZdDV1Til27rEvRrcV4153ty6I/6+pVfFG1Qzy6jmMVm7KP3fRFNZSiWothU35T1+K6nDqqenFdXO+HaoyXlYqX67FsRV/W+6q9EV0rmnhT4hOZ+jr003TxpP6bOLTDrRnEuuvFza5aFe0yDv3zLfjvrlre1nuxruIwpxOHsl6LeGPrqd94xdNtEHfVuDn02pZ3oiluy2FTrcfYrKnqfRof6DI+pJsDP7l4rRf5wi2kXyjzJv7qy5N4/TFZTk9bWaml9Y5Op4dW9xPKxx67flX2h4n4MLV+6+pUisf37YSMTe7nxurRGB9y7lSco87JT4tjioeUMFMkoCguJSBKns0UBSiaSQkZpMiZogEl51IkpKiZkh9R1BeK4VIUpOiZYgDFcikaUvKZYgHFcSk5pJiZ4gDFcykGUuxM8YASuBQLKW6mBECRGRcDw5+T8Mvj9OuZw41/gPHPafwl4nAFEKAADBGAVIjDVIDLoAIMUYDUiMOUgMugBAyRgMwRh6kBl0ENGKIBaRCHKQKXQREYIgJ5bIJ85jBV4DKoAkNUIB3iMGXgMigDQ2QgPeIwdeAyqANDdCAD4CimD1wGfWCIDw==", "base64"));
  res.write(new Buffer("VIY4TB+4DPrAEB8oiThMH7gM+sDSPwiOfWBmDtcHEvrAEh8ojThcH0joA0t8oHLE4fpAQh9Y4gNlEIfrAwl9YIkPlEUcrg8k9IElPlAOcbg+kNAHlvhAHfvAzhyuDyT0gSU+UAFwNNcHEvrAEh/oDHG4PpDQB5b4QEvE4fpAQh844gOtEIfrAwV94OhHBA05KTepCibVkaTqYyO4mcQ1j4JJdSSp2iAO+3pgUh1JqraIwzWPgkl1JKnaIQ7XPAom1ZGkao84XPMomFRHkxoQh2seBZPqSFLzYyP4+dMv1zwKJtWTpOYScbjm0TCpniQ1V4jDNY+G79yefpzXiMM1j4Y+8MQHeY44XB9o6ANPfJAbxOH6QEMfeOKD/NgHYeZwfaChDzzxQe4Qh+sDDX3giQ9yjzhcH2joA098kAfE4fpAQx944gOTAY7h+kBDHwTiAyMRh+uDHPogEB+YkzXEbAZxhZBDIQQiBKMhiGuEHBoh0CW+HIK4SsihEgJRgjEQxHVCDp0QiBOMhSCuFHIohUCkYBwEca2QQysEYgVzbAU5LyobrhZyqIVAtGACBHG9kEMvBOIFmyGQ5YohR2KQGRGDlRDENYPJIIiYwSoI4prBSAgiZrAagrhmMAqCiBnsiRnI8j/XDEZDEF3/NxDENYPJIYiYwVoI4prBGAgiZrAOgrhmMBaCiBmshyCuGYyDIGIGGyCIawbjIYiYwZ2YYV5sdlwzGGgGSczgJARxzWChGSQxg1MQxDWDhWaQxAxOQxDXDBaaQRIzuByCuGaw0AySmMEZCOKawcIcSZIjZzEoZU8HmCRJkuTcX6DYEwJmSdIsndhhXkh3XN9ZmCVFsxQgiOs7B7OkSJZ8BkFc3zmYJUWy5CUEcX3nYJYUyZJXCOS5vnMwS4pkyWsI4k5wB99lFXmX9TkEcae3g++yin7XbiCI6zsH7aCIHbyFIK7vHHSDIm7wDoPYGnIwsppE1p+4Yf7Sw3PV6mFkNY1sgCCuhDyMrCaRDRkEcSXkYWQ1iWyQEIQkpE5BMLKaRDYoCApcEIysJpENGoFCxgXByGoS2ZBDkOSCYGQ1rZAxEKS4IBhZWiAXTtwwf5kTNBcE38xpjVxwEJRzQdAMtEwueAgyTBCslJO0Ui4ECLJcEDQDLZaTWQZJjkuCaqAFczKTkMR1Ayyak7RoTmYKkrhygIVzkhbOyUxjUsqNLSxsk7SwTWYngpi/qbpf1mGhYHCPi9sMRrGvCkb3qL4tsxjF1REscZNHJW6ZwyimkDyscpNHVW6ZxyimkjwsdJNHhW5ZwCimlDysdZNHtW4nRY9HKCv+9eTFt/+GwDeLZNzsmuu2qOp4/mYct8PF+fk6k2nTL1dtWrXr7nxd1eV502+7fizq8815OM/Pm/Pl4/R6XD96+ry/TN9ub6ai7u7dNCJ+N3X86e5SObaPPvRV9dBN0Y+HIvnk4vXf7KpM7fb6+S/7rH3o6u+dvk790//sv3umn3/V6ct0ucyfvt+G7eH0eG+LuioOl/Hs5W9PxOVL8eyH754k9zXufbH8UuX+8PgedZV4XozDri1uiuTk4d+3P9NaqcOKw1c8N3vexyf3sk7V5Yvvr+Srd+m2vUmmWfd5ALdFW/KGYP7REB6nf2xDs3n1x+kIPm8zeFHcFs2u/8sh2H8yhB/rdPXU/PD+6a+rP42hrN6yHoQ/LBZ89RB+XqXKvby80m+b+yG8+bwB5n5WzNT7o4erPjjxYaAnm2S+YiA6/otpfpHq4UNp9r/Lh4nfd/UEiEk83Jj//0iGsev3hzvUV8vN1dH2ETq+m7Lty7NpG8VhmfdheA==", "base64"));
  res.write(new Buffer("j7umXO1PLmVu6siV/NI104YX1FYe1vG+TNZu97bDTck+p2/7oilgy0A7ravlYdvPYUvUdMXl+7E/7Kz6eXddV8Nm2smUPNpOVdMLobLMi7ETP+5qIf30+hDNy7Kvon0+FA87mL4v2mJq9mrXTNc28a8OO7LiDWx3df3p0/8ANPVgTso1AAA=", "base64"));
  res.end();

  return __filename;
};
