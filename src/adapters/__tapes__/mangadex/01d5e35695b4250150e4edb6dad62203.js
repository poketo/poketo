var path = require("path");

/**
 * GET /api/manga/13127
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:19 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d3f835d4a8aecc012e59c0086725fef411535939359; expires=Tue, 03-Sep-19 01:49:19 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=sd9huqs3eplpl9alkv2ijmar9u; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f261c9a516a-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA8ybWW/cOBKA/0pBD+tdQPGIOlqS92HgM87k8MD2rBFsFkG5VS0xzSZ7SMrtnoH/+4CS2lYrGW1eAuglcEuUxK+qWBeZP70VyhK9oz+9uXog/bnWwjvyPv3EV1iS+fRTc/vTTyxiYXr4ZV3+zJIwT9MgiwPP9woyc83XlivpHXm3FcHthsQDwSm3Wx8QBMoCSvdmSQXcb8FWBIKwIG1ALZqfC1xxwcnAplJwT6iBS3eDa5C4ItMMOq24JEPwhyo4zg/hjQSEObdb2FSkCbaqXiIH97mqXqE0MFf0yI31m8fnaHdD3FcqJQoDCKWui5IAS+TS2GbkNVq4cDPaAq7XhNq46Sy0ktZN+AMta8nh7VbVfF7x9u0VYbGjeXn+EN7YA/eVFQo+p1eNgKmAS7S0qEUzJzcZbgD5issSFkpDxQ0IvqBDOKndjF4mzo37uirR4JLDB7SmrpTvXuG+IowCerSaVuSmLh+5qg2gVrUsQNmKNKxJrQUdHh7CL7WxIPiSmikb3Lqv/+P3Wtl/n9aaK+MEu+RCULETX3sXSkXGhw0Xwt0wBAsiwWXZzWDZ3XBP/Oz5nuVWkHfk/aZxxZeK+/DW/bP7eej5HmrLjfWOvOMlt7hEd6m2ldJ7l4xFWxvviPleSVKT8Y7+G/qJn/lh6IeRH8Z+FP/P9wQa+3le4dqSe4EzUoGy/OwsyTvyfsE1OjvaXV4ILL0j78vae/K958f+9OIwmMW5++tBibp5NPd6I7w47tF9VDXcVKoWBdyiWMKG22pnDD7c1xYueFnZl+uXShuCf/6K2gL7124yc1W4t5X3nu+VWtXrz7zwjsI43P3sIH41W6HmS4KbOUrTG/w59I6C/mB3QdZC9IZEwyHRbojlKzIWV2vviCVRFAR5lMyefC8OsiSKxmQR9WThnMBlrTWnolkLr8kaeKeM7VY1XCpBkyRm0Sw=", "base64"));
  res.write(new Buffer("D9LYEUdZFAbfS/ybREeKgGtNptZYIBiCNSddEJAEU8NaqzV3nqDQvKxJ40ACZPYkkEb5QAJvccXhg4ILlKa+hx8kgiSKoyBiT74XMRYPlJ7tiyAcKN0p+4QWSrdO5RTtFLUczliWsihxiBljafC9iO92SpaWDBQk4DVaNUk1hnkcpVniGMNwNpvNxhhZj/EUreTrJgx1KvThUlm4WevGxe9unBAaayap3jBjSZI6txUFaTBj34t+yUnfI6xRI5CAEq3ywZJeoWkvCjRwT8ZyNNNUepLl+SwPnnyPzdKQZWPkwWDt3vKSNNxqfCDhMpbbStXG5VLXbUp1gvPlJNXNgizJosxZehTFg4g9An0uHLMmeOD4BWHFhUMtCApuLMo5R9iCplKTmaarDiOWMsZCF63SNByz8yjvgX9QFs4fyGXPrdLP0Rrg1sDVRsJpfT9FNbM0y1maOzWzNEhn4XfTcjD895pTu6pto3JDMFcrAgRTG5jrT3UQUDHVZc3CJAtZE6/SKByLyFE2WNWnaOGGUM+rrohqNH5g4IzkNNWcBlmURJ2a0+R7Yc/bYOw0iwVJ67QtQSCUNWpeYBOum/U+XR3nYdzpeCwlidIe9l1T+TrFXjm7PlNkwK3vsw0JMV0FB50xs339pvugsx7o8cKSfgHlBs4fXWzmEi0VPlyTWXNLcKw1f6BJJiYNejjrdMyCMfRksI7fq1pa16GAS3wgONGqdtXkhdK2gnNXWW5fXaha98I2TjM9a6UQhq0UglEDiIfeTG3IpaFtocFt59OucQNXck5w7Jo4k4VmadpAhzkbg+7Xlcdm2WsWOLU+r4A712a5sWo9Vd40z1jLm83GePsV1rFs4RzpR7KAEq4epwsYzzrAcAyQDVsj5Ho+J+QyENMgfh2VJgQZtEs1jPchZ/uQ/cx60jxxUx9FaRjlIzxhP4W8JLirVC+4oiY4ly4gNR2BA9N0tNol6Qacop23Xb6PqpbldGXRJFpOFumYLPp51pkqm649wgVh01K+cHOFW1WS+zldVtYt1igeY02/1vtphYYM3G4UXOP9vSuUsN0ouMGVy6hX1GrcmQfxSUshSjufPGjsDaTQz7yaUrHrBcFd0+F2Nv7G2f/CZZ/cVZJtd/uE7IaayvJMlY0XR3iv5JK205VIvPMHwZhEhgnZCS9LMhZuBBq3CriBY7HBbZuRXElq922a1vfxBqfLH2ZdVhLut4uSff5hKnaC1gra7Xg503jOTqYbsMMk61iTMdbhXsapbjbHrh6fGSfa2W4hg87RDToFA8hv9O59+E3ixgU3tYA31rSZymRBWRp3oOEYKPvGJsUNv292LA9avzVdxChvEFmSjyEG39Kls9MzVbZ/nCjU/ktH39nxDVr1yuBk66Uke4afjcCzfAB/IYjccr0jNCSel+ylqs2kF26SMdbx7nuneJ932OLbnSU4bRPR7tc79TDZHDxJs6gjjcdI0280M5uo6uCK3e76dCm7zIIl4Rjl7Ksmh5bNIZFJs3VBhg32WwZsybcjqVPkKUqpLFzW0sKZ2rQpZrtmJ0s9S8OOer+DE+1T93Oll7M0b9uzNO/b3XGU7QmciWcTySxq00PG0jHkfsrkVqfLh9+5w0WT7uAkcZh0dKMKHbaoHg8M7FP2t0snSxtlnfkOuq4DWvb3AaZ1v64RIg/6bY4pu6oobnUc5KMW3M+hXMXv/JRDO5e02ratnWN3vO2dO+hn1eSxwzzusPejT7iHnX8dYveqAD71KiAJux5WkOUjnNk398ycRb9uTjN2yXJ7qvFCCaE20yVmeUccjxCnwxYOwh2KpTPrZ1B33Q==", "base64"));
  res.write(new Buffer("1ijEFs7l3G0xNS3N/3AhJryRkuw2UoIsGBHAMK9y1DeW3OkWZ9XXZJQ7ptyebdHUXr1AWRq/X+fDHbdVoXFzeHg4XYl0qWaQjplE8nf59M6hN8nY86HVnRCud8O6RuhOMJ+m6xSCPOvkwUbkEf+dPN6Tnbx/D7peVjDbD+Zsf1/ma8QDZ/tr3K5ITpYuzmesowtG6Pbysr3CqQ3Yjd9z+8TtPs10aVmbmAWDSnGfdiQvmyxZ1sSqOAizWfadaGecoEJjSC/csazFXAhL8BbtH8OGRkF7mFGcDDDfc/7qRx4XD7IgTpPW9UbxPmCwB9jfHZVkKvX/VJalA5ZjyVf1Ct7XFjX9OI3lLAmfnl7+s4V39dZ7+gsAAP//AwA4D/hgIzQAAA==", "base64"));
  res.end();

  return __filename;
};
