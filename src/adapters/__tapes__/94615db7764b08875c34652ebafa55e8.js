var path = require("path");

/**
 * GET /manga-rss/ninja-shinobu-san-no-junjou
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: merakiscans.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 03:36:43 GMT");
  res.setHeader("content-type", "text/xml;charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=ddcdd7dbdefb5cb7bb444d7b6045c02341534131403; expires=Tue, 13-Aug-19 03:36:43 GMT; path=/; domain=.merakiscans.com; HttpOnly"]);
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0");
  res.setHeader("x-cache", "HIT from Backend");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44982398609693de-SJC");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA8ydfW/bOBLGvwrrA/avxhIlyy86x4eg3e7uXZsWl+wWi6IIaJuxFcuSIVGbzX76I22nleM3UXpmcUDgOohAzQzn56E4j9lhlufsD5nlUZpctry22xoNJ3ORJDIeDVWkYjn6IDOxiNjNRCQ5+6+cyESxX1dToWQ+dDaXDOMoWYzmSq1Cx1mur8/N5e1JunSWIpmJC30fZ+isrxtOZT7JopXS9xxtBoyfmJhO5ZTpe6+UNmfolC8axnqMQszkSCZ6kOdfhtFy/U+Rxcdu/ri6mKSJ0rfY2OFMUu2to8aJk0TJg7jzvT/d9sNqNnTMKFuXt14+G8PSe3ZtrmY38yhJx8VFLhKWpOzfRfKQFmw9cqVYrO95kX8f5SJJLx7Wo3yLjrP1KlJy+WzQqbtfMN/VL7/88A/XH/xzqf+imNja++XH67dfG1vmuw4/OHnDV1/evL26vfoyFGyeyfvLVt3RW2xt42Wrkad6FJHNpLps3Y11lixaJkVmLM8mRy3bSxB/bVDP5ESLzWU0m+vheOC22GM0VXP93nVR1o7TbCqzy5bbcvS8i9FwnOk3/6+xbJiEW/e+fh29gHtVjN/qT5PRTZG8ZrzHbuSKea5+43lhoH84+/X2zdB5vmwok0mc5kUmmUb2ktWb2Vgms81seh3t6tNKx2sNnvOwkvrvZkI2BFbn0Bvol3a7fZ02Rs4bUCK3Hr1imnx3CkOXuTeErrJhcJBQEaqeMLXw6HSReJSmhgSPvn651h8Mn7M0mTVHpE+KSN8iAXYcA2HSR2Hywjg8KsBI2SWQPTI85Dx0ezhi+rTE9PTLrV6OL9hPaTpNZF5tyX1yunqk2PQskmHfOxA7PRQ7hyzEA4SOWY2kOovSuyzSKAU71cdzQ40kjKUeLUtd/fJ5LhSbpjJnyrxbSpE0B6pLClTXIjmOuAiiqoui6qiZeLRIolc30c5CdjsvNGSdUr0ahLwTcg8HWZcWsmDz2aJYlLPlE4umUsTNCQtICQsscuSQfyC8AhReh23Es4WPW63kOkvVZznVVPk7pYv7oR/gqApoqeoYx6NM5ulSspXM8jQRcaSempPVISWrY5Ehx3wE0dVB0XXcTjxhNPGrnWzn61chNWne7iIxCHkXR1qHljTfbGKqzS5mzkQcM9MvYPdppmt4u91uTpxPSpxvkTHnfAWR56PIO28vnkDaeDZOxrNEfkjNDggvrSi7Ie9BH9t8WiK9ddHXFV//GM/VXDLTfGxOokdKomeROcd8BBHooQg8bieePJr41U62inuNbqn2+aEbhAFwlenRksb1y+/6rdC2PRS5etUcMU6KGLdIkT3nQGxxFFsHDMRDBY6YfUKdx0io18wdlApW3ywhPWCXi9NiZPrgN3P5rWwnTOiqrQdlsygDbIaQijE8CwHBGU9BgKHEGGetxdNGGcuGSVhtv9/tl8qZa3pnek0K45BWjMEHO6tnI0jRhqziaKLtnjbGkJMKNLiF/OC0oxgKOUq0cc5YOISUkWyWgNW6AW65e62Xk4ZCGIKcVvDBTb/+56doUVEpenIeSdUe3ELDUPIKBFff8TFwlS3Dk4SKkUXSVNvbd7s7jHT6YYDb3yjNDgkjphv/CxPL9QqZPaVFZkbWHxKxzgYRqznL5Kr5viMnlX1wCwlDRY9BbKGkIJWtxnP3d8QWlKQVl5V8l9dB6OI6BJxWRsJNd/+9/FbWlYgXTIzTQrE8nUxk1pxUUj0Jt1BEnPUVxChKWFLBXjydtPFsnIzVOgRen10Vsy2RPaM5AYokOa3mhAc762yViUhPWHN9MSdVnXAL9cQRD0H0oXQnR63EM0cRu5pJVq0v4PW+8+W5YTAIfZymi9OqT7gRBNzI+D7K55gtTE6qOuEWqok930BMdVBPdPv24WnCxss6maq1BLxuiSDPdNaAPezSfJEQtG7ks0eRJ5sPEMXiKNcWQMoUqaCEWwggTrkJ4sp3XO5DwDppK54xsjA2ybxqT2teUFobDsxXzriLI680oyTomY7+j39OIqU9frX9Qup7kQAaAKTyEW4hfzjqIwg6D1XMjtuJB44mfrWTrdpmv9fZWSb62CLn0RY50+3/rG3MxqnIppDSRiof4RZiiH3nQGyh5COHDMRDBY6YfUJVfNpySxWrb9aKLrBnRisf8U3F/qjmMmOfoonSFjbvnfmkS0TfYm1zwDvQmR2+s7Xu7lGO78bmBJsMcobHIYvx53agY1gjyao9h/FBia1u6PZCjpOEnJhFEtZMvX6zOeSH6TLNfkvjYinZpyxdNj/CwyddIPoWC5yTfoL485xEPt49SZHd6dzoQtA7bTYeQrqQNsrDemAGYdDBgXlwekmYNFXff3vDrjK1jsVVodJZJlZzQB0kXU/6FqujE16CeOSOeB7yzh1AcDxlMx5Gqmg2SL96IHbCDrBCHppXksc5oyC9FQvJZmk6ZROj4U7v2Yfm37vhpAJmbiG6Peoj6OHOdVy/vUqaP9wdtxP/jEcTv9rJVvEbbqWNEx6EpkEA3Dj5Po8UpBmZ6Ps0XeTsk8zu5cQchvkuSpqDRqpQtpDVHnMQQ9kABNlxK+GMkcSubpLVA8wNXVwDe0DKl9GT3hQrvbS+TnMl4lk0aYwWqRjZQmd7wDcMVX0QVQcNhAOFjliNhKqFER8g61SfFCMjAf0pymL2KX2U2b8aI0SqR7aQzL7wC4NPD4TPnnFwdJCRskygesh0ww5uM79HioxRZ35MdKUdMLNzkrOPcfO+M6k62ELMesg5DDxdEDyHLYQTBI9ZnaSqy5KL25rokrJk9JcfhC615sHwTRGrIhMxeydzFf0BOGKOVOtrIVc97SaGrwDE1zlb4aQRxrFZ8tWjzw993NdeAlL6jGrzii2iZLou4Y1xIxUAW+hZX/iF4asD4mvPODhQyEhZJlA9ZHgY4ApWhxSZjfJSLJlg/4kL9Vfz7hVp88qi2/LCMVDDCgTNvnX41hQyVrZJVI8b6EHdPik3phd+nb5mS7lMs+gvySLV/Mwc0iNzLE552fcNdEoOiJ6DBuIPxgFHrEZC1cLIHYT+AHf+DSlGpo/dbrevEna1PfgHsnCjVeRatB4Pugfq26LatkdsxPds8XGrl1z1qOLIXQhegyrn2/946GR5PvofAAAA//8=", "base64"));
  res.write(new Buffer("AwDfgIObFHEAAA==", "base64"));
  res.end();

  return __filename;
};
