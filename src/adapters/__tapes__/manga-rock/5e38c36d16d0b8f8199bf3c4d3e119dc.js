var path = require("path");

/**
 * GET /query/web400/info?oid=mrs-serie-153037
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept: application/json
 * accept-encoding: gzip, deflate
 * host: api.mangarockhd.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 12 Nov 2018 04:40:24 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d782630fc3a889a5dab6967b453a1d8cc1541997623; expires=Tue, 12-Nov-19 04:40:23 GMT; path=/; domain=.mangarockhd.com; HttpOnly"]);
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("cache-control", "no-cache");
  res.setHeader("etag", "W/\"eba42653aad2976c5675247b70a8d74263ad13cc\"");
  res.setHeader("expected-size", "13770");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "478651fd0df6a584-NRT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA8Wba2/bRhaG/8qAX7oLyDTnPuNv2TRNL7kUNXoJgsCgJcpiTJFakoqjBPnvO5Kd8EjFW5ymHxaBgYgezjMk531kjc58zObdosouilm2KMcyu/iYretFdmGNCc7Nsm7/Ilv3w9lQ9XV1Jq0utM9mWVuu02nZs+5dJS478axeVulouR1XXZ+O/1RWi0r81G3nqzod78v2Nrswapath32PXs4SeL1pqrFKL8d+W82yphzGq+0mjSP1nEDKBemNSWdX64RJ7ZZlM6SGi7qv5mPdtanZLBu7sWyu5qtyM1b9kA7JdHBRDfO+3tw3yi5X9arst6IeRClW9c1KDPNV1zViGLeLqh3F3aoTTWIM4rZeDDPR1Pv/160oW9H1m1XZljfVLL1aiLuuv03djKmnRbmbl32V57n4tR3rRoyrSqS2i6FbV2LbzptKdEsx3nVnu6rsz7pmkV7U7ZCOLtNYxarqUzd9WQ+VqJdiWFXfNI24rvYd1b24Lq93Qz2my8rFy+VYtaKvml3d3oiuFet0U9IT2fd16GfdpZP6b9LQDrdmEMuuFzfbelG28zT0z7fgv9t6ftvsxLJOw9yfOFTNUqQb2+z7TVe8vw3irh5Xh17b6k6sy9tqWNXLMTVb180uTw90nh7SzYGfXbzWMzPzMxlmyr5Jv/ryJF5/zOb7p62c1NIFT6fTQ6v7CRVSj12/qPrDRHyYWr91TS7F4/t2QqYm93Nj8WhMD9l4leao9/LT7JgSICVOFAkoikuJiGKKiaIARTMpsYAUOVE0oBguRUKKmijmiKK+UCyXoiBFTxQLKI5L0ZBiJooDFM+lGEixE8UDSuBSLKS4iRIAJXIpDlL8RImAIgsuBobfkPDL4/TricONf4TxNzT+EnG4AohQAJYIQCrEYSrAF1ABlihAasQxXA6UgCUSkAZxLJcDNWCJBqRFHMflQBFYIgJ5bAIzcTyXA1VgiQqkR5zA5UAZWCIDGRAncjlQB5boQEbAUQWXA31giQ9UgTiSy4E+sA==", "base64"));
  res.write(new Buffer("xAdKIo7icqAPHP2D4NgHduJwfSChDxzxgdKIw/WBhD5wxAfKIA7XBxL6wBEfKIs4XB9I6ANHfKAc4nB9IKEPHPGB8ojD9YGEPnDEB+rYB27icH0goQ8c8YGKgKO5PpDQB474QBeIw/WBhD5wxAdaIg7XBxL6wBMfaIU4XB8o6ANPPyJoyMm5SVUwqZ4kVR8bwU8krnkUTKonSdUWcdjXA5PqSVK1QxyueRRMqidJ1R5xuOZRMKmeJFUHxOGaR8GkeprUiDhc8yiYVE+Sao6NEKZPv1zzKJjUQJJqJOJwzaNhUgNJqlGIwzWPhu/cgX6c14jDNY+GPgjEB8YgDtcHGvogEB8YizhcH2jog0B8YI59ECcO1wca+iAQHxiPOFwfaOiDQHxgAuJwfaChDwLxgYmIw/WBhj4IxAe2ABzL9YGGPojEB1YiDtcHBvogEh/YkzXEYgJxhWCgECIRgtUQxDWCgUaIdInPQBBXCQYqIRIlWAtBXCcY6IRInGAdBHGlYKAUIpGC9RDEtYKBVojECvbYCnJaVLZcLRiohUi0YCMEcb1goBci8YIrEMhxxWCQGGRBxOAkBHHNYAsIImZwCoK4ZrASgogZnIYgrhmsgiBiBndiBrL8zzWD1RBE1/8tBHHNYA0EETM4B0FcM1gLQcQMzkMQ1wzWQRAxgwsQxDWD9RBEzOAiBHHNYAMEETP4EzNMi82eawYLzSCJGbyEIK4ZHDSDJGbwCoK4ZnDQDJKYwWsI4prBQTNIYgZvIIhrBgfNIIkZvIUgrhkczJEkOfIOg3L2dIBJkiRJ3v8Fij0hYJYkzdKJHaaFdM/1nYNZUjRLEYK4vvMwS4pkKRQQxPWdh1lSJEtBQhDXdx5mSZEsBYVAges7D7OkSJaChiDuBPfwXVaRd9lgIIg7vT18l1X0u3YLQVzfeWgHRewQHARxfeehGxRxQ/AYxNaQh5HVJLLhxA3Tlx6Bq9YAI6tpZCMEcSUUYGQ1iWwsIIgroQAjq0lko4QgJCF1CoKR1SSyUUFQ5IJgZDWJbNQIFAsuCEZWk8hGA0GSC4KR1bRCxkKQ4oJgZGmBXDxxw/RlTtRcEHwzpzVy0UOQ4YKgGWiZXAwQZJkgWCknaaVcjBDkuCBoBlosJ4sCkjyXBNVAC+ZkISGJ6wZYNCdp0ZwsFCRx5QAL5yQtnJOFxqScG1tY2CZpYZssTgThSW0bV0WwuE0eF7dZjGJfFYzuUX1b4TCKqyNY4iaPStwKj1FMIQVY5SaPqtyKgFGGi4IBPip0KyJGWS4KJvio1u2k6PEI5cS/nrz49t8Q+GaWjavt+rot6yadvxrHzXBxfr4sZL7u54s2r9tld76sm+p83W+6fiyb89V5PDfn6/P54/x6XD56+ry/zN9ubvZF3d27/Yj43TTpp7vL5dg++tDX9UM3ZT8eiuSzi9d/s6sqd5vr57/sivahq793+jIPT/+z++6Zfv5Vp8/z+dw8fb+Jm8Pp6d6WTV0eLuPZy9+eiMuX4tkP3z3J7mvc+3L+pcr94fE96mrxvByHbVvelNnJw79vf6a1UocVh694bu68T0/uZZOryxffX8lX7/JNe5PtZ93nAdyWbcUbgv1HQ3ic/7GJ69WrP05H8HmbwYvytlxv+78cgvsnQ/ixyRdP7Q/vn/66+NMYqvot60GEw2LBVw/h50Wu/MvLK/12fT+EN583wNzPiol6f/Rw1QcnPgz0ZJPMVwxEp38pzS9yPXyo7O53+TDx+67ZA1ISDzfm/z+SYez63eEO9fV8dXW0fYSO76Zq++psv43isMz7MLzH3bpa7E4uZWrqyZX80q33Gw==", "base64"));
  res.write(new Buffer("XlBbeVjH+zJZu+3bDjcl+5y+7ct1CVtG2mlTzw/bfg5bovZXXL0f+8POqp+31009rPY7mbJHm33V9Eyooghi7MSP20bIsH99iOZl1dfJPh/Khx1M35dtuW/2arveX9uef3XYkZVuYLttmk+f/gdf/ZMRyjUAAA==", "base64"));
  res.end();

  return __filename;
};
