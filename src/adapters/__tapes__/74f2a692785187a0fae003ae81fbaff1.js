var path = require("path");

/**
 * GET /query/web400/info?oid=mrs-serie-153037
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: api.mangarockhd.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 03:26:53 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=dc645b0a8c713a489a641519b6f33a3dc1534130813; expires=Tue, 13-Aug-19 03:26:53 GMT; path=/; domain=.mangarockhd.com; HttpOnly"]);
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("cache-control", "no-cache");
  res.setHeader("etag", "W/\"3e981efd69831419cd32a4151ad646eb67fd212c\"");
  res.setHeader("expected-size", "13770");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "4498152dec056bb0-SJC");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA8Wba2/bOBaG/wqhL7MLOIpIird863Y6nUsvgwnmUhRFoNhyrEYXryQ3dYv+96WctDr24B2c6XxYFAFqheJDSXwfx/Thx2TZrcrkIlskq2IskouPSVOtkguT597aRdJNL5KmH86Gsq/KM2l0pl2ySNqiiaclz7p3pbjsxLNqXcajxW7cdH08/lNRrkrxU7dbbqp4vC/a2+RC+0XSDFOPTi4iuNnW5VjGl2O/KxdJXQzj1W4bxxF7jiBlvXR5HFlfNhET262LeogNV1VfLseqa2OzRTJ2Y1FfLTfFdiz7IR6S8eCqHJZ9tb1vlFxuqk3R70Q1iEJsqpuNGJabrqvFMO5WZTuKu00n6sgYxG21Ghairqb/V60oWtH1203RFjflIr5aibuuv43djLGnVbFfFn2Zpqn4tR2rWoybUsS2q6FrSrFrl3UpurUY77qzfVn0Z129ii+qdohH13GsYlP2sZu+qIZSVGsxbMpv6lpcl1NHVS+ui+v9UI3xslLxcj2WrejLel+1N6JrRRNvSnwiU1+HfpountR/E4d2uDWDWHe9uNlVq6JdxqF/vgX/3VXL23ov1lUc5nTiUNZrEW9sPfUbr3i6DeKuGjeHXtvyTjTFbTlsqvUYmzVVvU/jA13Gh3Rz4CcXr/UiX7iF9Atl3sRffXkSrz8my+lpKyu1tN7R6fTQ6n5C+dhj16/K/jARH6bWb12dSvH4vp2Qscn93Fg9GuNDzp2Kc9Q5+WlxTPGQEmaKBBTFpQREybOZogBFMykhgxQ5UzSg5FyKhBQ1U/IjivpCMVyKghQ9UwygWC5FQ0o+UyygOC4lhxQzUxygeC7FQIqdKR5QApdiIcXNlAAoMuNiYPhzEn55nH49c7jxDzD+OY2/RByuAAIUgCECkApxmApwGVSAIQqQGnGYEnAZlIAhEpA54jA14DKoAUM0IA3iMEXgMigCQ0Qgj02QzxymClwGVWCICqRDHKYMXAZlYIgMpEccpg5cBnVgiA5kABzF9IHLoA8M8Q==", "base64"));
  res.write(new Buffer("gcoQh+kDl0EfGOIDJRGH6QOXQR9Y+gfBsQ/MzOH6QEIfWOIDpRGH6wMJfWCJD1SOOFwfSOgDS3ygDOJwfSChDyzxgbKIw/WBhD6wxAfKIQ7XBxL6wBIfqGMf2JnD9YGEPrDEByoAjub6QEIfWOIDnSEO1wcS+sASH2iJOFwfSOgDR3ygFeJwfaCgDxz9iKAhJ+UmVcGkOpJUfWwEN5O45lEwqY4kVRvEYV8PTKojSdUWcbjmUTCpjiRVO8ThmkfBpDqSVO0Rh2seBZPqaFID4nDNo2BSHUlqfmwEP3/65ZpHwaR6ktRcIg7XPBom1ZOk5gpxuObR8J3b04/zGnG45tHQB574IM8Rh+sDDX3giQ9ygzhcH2joA098kB/7IMwcrg809IEnPsgd4nB9oKEPPPFB7hGH6wMNfeCJD/KAOFwfaOgDT3xgMsAxXB9o6INAfGAk4nB9kEMfBOIDc7KGmM0grhByKIRAhGA0BHGNkEMjBLrEl0MQVwk5VEIgSjAGgrhOyKETAnGCsRDElUIOpRCIFIyDIK4VcmiFQKxgjq0g50Vlw9VCDrUQiBZMgCCuF3LohUC8YDMEslwx5EgMMiNisBKCuGYwGQQRM1gFQVwzGAlBxAxWQxDXDEZBEDGDPTEDWf7nmsFoCKLr/waCuGYwOQQRM1gLQVwzGANBxAzWQRDXDMZCEDGD9RDENYNxEETMYAMEcc1gPAQRM7gTM8yLzY5rBgPNIIkZnIQgrhksNIMkZnAKgrhmsNAMkpjBaQjimsFCM0hiBpdDENcMFppBEjM4A0FcM1iYI0ly5CwGpezpAJMkSZKc+wsUe0LALEmapRM7zAvpjus7C7OkaJYCBHF952CWFMmSzyCI6zsHs6RIlryEIK7vHMySIlnyCoE813cOZkmRLHkNQdwJ7uC7rCLvsj6HIO70dvBdVtHv2g0EcX3noB0UsYO3EMT1nYNuUMQN3mEQW0MORlaTyPoTN8xfeniuWj2MrKaRDRDElZCHkdUksiGDIK6EPIysJpENEoKQhNQpCEZWk8gGBUGBC4KR1SSyQSNQyLggGFlNIhtyCJJcEIysphUyBoIUFwQjSwvkwokb5i9zguaC4Js5rZELDoJyLgiagZbJBQ9BhgmClXKSVsqFAEGWC4JmoMVyMssgyXFJUA20YE5mEpK4boBFc5IWzclMQRJXDrBwTtLCOZlpTEq5sYWFbZIWtsnsRBDzN1X3yzosFAzucXGbwSj2VcHoHtW3ZRajuDqCJW7yqMQtcxjFFJKHVW7yqMot8xjFVJKHhW7yqNAtCxjFlJKHtW7yqNbtpOjxCGXFv568+PbfEPhmkYybXXPdFlUdz9+M43a4OD9fZzJt+uWqTat23Z2vq7o8b/pt149Ffb45D+f5eXO+fJxej+tHT5/3l+nb7c1U1N29m0bE76aOP91dKsf20Ye+qh66KfrxUCSfXLz+m12Vqd1eP/9ln7UPXf2909epf/qf/XfP9POvOn2ZLpf50/fbsD2cHu9tUVfF4TKevfztibh8KZ798N2T5L7GvS+WX6rcHx7fo64Sz4tx2LXFTZGcPPz79mdaK3VYcfiK52bP+/jkXtapunzx/ZV89S7dtjfJNOs+D+C2aEveEMw/GsLj9I9taDav/jgdwedtBi+K26LZ9X85BPtPhvBjna6emh/eP/119acxlNVb1oPwh8WCrx7Cz6tUuZeXV/ptcz+EN583wNzPipl6f/Rw1QcnPgz0ZJPMVwxEx38xzS9SPXwozf53+TDx+66eADGJhxvz/x/JMHb9/nCH+mq5uTraPkLHd1O2fXk2baM4LPM+DA==", "base64"));
  res.write(new Buffer("73HXlKv9yaXMTR25kl+6ZtrwgtrKwzrel8na7d52uCnZ5/RtXzQFbBlop3W1PGz7OWyJmq64fD/2h51VP++u62rYTDuZkkfbqWp6IVSWeTF24sddLaSfXh+ieVn2VbTPh+JhB9P3RVtMzV7tmunaJv7VYUdWvIHtrq4/ffof/A4De8o1AAA=", "base64"));
  res.end();

  return __filename;
};
