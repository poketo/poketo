var path = require("path");

/**
 * GET /reader/series/kaguya-wants-to-be-confessed-to
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * host: jaiminisbox.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:10 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d6f1649e4c746a3d5527ae63e59645c0c1535939349; expires=Tue, 03-Sep-19 01:49:09 GMT; path=/; domain=.jaiminisbox.com; HttpOnly"]);
  res.setHeader("last-modified", "Mon, 03 Sep 2018 01:44:07 GMT");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("x-cache-status", "HIT");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448ee77fb65164-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+ydbXPjOHKAP9u/ooepGdm3FknJr5Il7Wlsz613Xjw18t1kk0q5QLJFwiIBDgBKVrK5354CSMmURb9tPoQprV1li2Sj0QAfNEA21ey9Ob86u/7t6wVEKokH273FPyTBYLunqIpx8JGE2ZzAd8KUBMXBQzjjbIxSYqC3u134ldCEMtqQ8J7f9Zy83HYvQUUgUipt4o+MTvvWGWcKmWpez1O0wM+3+pbCO+Xoqk/Bj4iQqPqZGjdPLHAG2z3pC5oqkMLvW44fsKYfUoekqXS0mc7Vr2nnt/Pv4a/Bj79NiXcWfaZnwcF1iP/22b6V1qDn5AoGvZiyCUQCx31LGyW7jnObGy49fmf7PHEEkgCFU1jmqAgTlM6tx+8cqeYx2r6UP0/7at629+19CwTGfcsckRGiskDNUywa5EuZN+C+3sai3jFnStoh52GMJKXSVK51j0lC43n/mioaxzRLfvqOXsNU07ivppFX01hU01hUsmbOi1pLpEQltSJjV5PMUPIE7YSyor15ax+ci4VWP2C2IFNkt3kz9u32gd1yzC6j41Za4AsuJRc0pKxvEcbZPOFZ+eystIAqTEi66E2SpjH1iaKcOXdJbIHhq2+NFmIvamWh1DYanJX6SKxQMKKwqkYh5U/lWr+NRi+sUUj56tqI4slKdUPFk5eeR8WTqgopC/BuqXBlrFoPuHxEc8NoNMOZkQT7VogMBVFclEZxoVjGNEAoxseDYlOKs5QLVSo1o4GK+gFOqY9Ns7EHlFFFSdyUPomx37Jdq8qZ/Gvz78PmGU9SoqgXl/3J5UUfgxD3/EjwBPsta9UKM6qbPo9XzP+XlvlZyqaCpyjUvG/xsGv6riT8Wp/4iNZVNzhDT0NaLUsTEpaFHztjxWA24tKJecjtlIVP6OySWK2fxdxs+MRDXl1WW3qj+/Oxso+5i6ed0K10bn9kKOaF57h3PiVP8b9Rm8ZZSJl8WvVge2trSgREXCrog/VAuXW6vbVFx7Czkwv0YUZZwGd2zPNhbOv9u/DuHew8PJIKrrjPY3jTh8J4a3d3GwBga2vrUemFsHVqRPXPNw==", "base64"));
  res.write(new Buffer("42B9zsY03FmO4FZA8Ii0sXVyEBwE5Lhz5Lnoe20fD09a48D/q0SmxNz2I62XqAnOTX+1G7s2ZVKRON7Z3d7auu+TsitJBfqcMfTX5hbq2rPUdM7ghQVary3QLhVwiiWKx4M5+DGRsm/p/QGdAg361kyQNEWhd5Gnvac16NEkNIX0KLdWsVpW+hhgtv1gyHmEMRRm0AGJ10dFz6FJOOg5pGRtZHRZuq/1LsG1o2ZkSkODgWWEzLZuUBabHqto2mw2s8fER4/ziTFy2rYPnQJ5B4XgZm0zpiJxYjrBn+lYkARvBI5RoOg/NpikIiqT7yY0uAmoQF9hcKMdQH9MYonvJPqZwL4SGb7LK+tr7e8Eqkywm5QIksj+2+P3b9tt4usWvW233+4P37bbWk5vtM/ettu6Mcsjxhbz8cPb9oeHLXvb/lAycqmB+GpN9fG5BYqIEFXfuvFiwibFKc9XlA8cJp1g08uU4syW0/BnqbKUBj7xI7TArKz02aJhpLrQdtO7Uz3H5SfTMadE/yl/fg6/BUfapgXIYwJj0vRj7k+a3BAzgJ5MCVsIJJE1+EQUSqUHDRKJsudogTVTXlp9flq5mFcYElOpHrNihIKiBC1SacGizzS3Yy4SyM//86s1JMKPHAsSVBEP+lbKpbKA+D6mqrm4SrDyy4RBj7I0U6XFt1VM9bkaC6YkzrQVkMbEx4jHAYq+dc0hFwBpmrFnNABhAURUATKFIh97uZinF0yLrhEagvzs64YNoAIAPZgLeT9GIvQY7zkBneoeMsO42HhSMP9HhKJ+jMacYsa1VkumhGFsDcq7SCAhH+OQ+6W8OSSQN4qnN8W+Qa+QSYgIKcv57luuVezI12h624h5XJjuc60XTcGLiykSSKeo2NYXewYpo3BQ1Q08oT5QNuYPWqmiLPEYobHevxzGL/bXC2uMfulMzEKuOdMLuabiTU8vDIuFXFPxm0NytL+/HxA89PcPCukbat+mYb64XTc81q4GjHptYdRaGm7WkIPt59aOPSdqrapc9II3GGYq4qLneIMuDD8OR8OPQxhOSM8TA9CHhTID8ZHDoznjqaQyFyjsGEWU8YTOieH+M51nE6p3Ch4ShkAEgooQEkw8FBL42GxS5gsMqBfPIRUoFQ0pzySMooz6EW1QBkOfBJjMGxKkygJkCnyeMZ/Ge6BdrlCUhVoVFZBySbVXkEAkhMhoJlECSTgLl5s2DOPYVK1oYkyag0yR6S4LUUUoICISfJKZbtRyM15Ym+huDXCKMU9hjBhTFkoYcwFI/Ai4Lr0HnvYguT1CX8LMaBwD4wpIHPPZUo+X9wdnqLcKWEzfeejz3DSQmZdQKek0F6TM7BUYm/lcRjR9A5/4FIFKmBGxZ8rnlXtEqdjoTsikqMs0b1GVh3o2B8Znb+CBj6ig0fju1QGUc1ghHAqepasOpBA+i0iqUMi8UFkAY0yMK1oB1ufspliCwTjGsQKZkFgP+ZfOR3zGYk6C5waog8xxnVarUzFvLXTkc5eelyravOiNF9ql/73CpsVFd9F/0Gp1uvARywNs6QdGEZ/B1Xi87O0XST/SLH3BdiOsgTeHlzZNIUmcMWFSX3czeW/8B8IkjPQ+a3D/WVcMv79Oe+mYs35D4p/v+d0/rcHqtq5mD9pu68R2O7bbWkW+hiSe1JDEkyoST7rr3n6J18VdSlhQRvEF4pvE4ond2q89i8c1ZPG4isXjLpxFdELgQ3ZLZ0SUlkcfzDp78HLZzaLQPaw9hUc1pPCoisKjLnzPnZqG6ZrEExh6PF8WwlkWq0wgfNCr3SmJy0i+quAm8Xlst09qz+dhDQ==", "base64"));
  res.write(new Buffer("+Tys4vNQT8ETDpeUcTgjTF+c6KuIPfhKhIJWGcnnZDeMwnbtKTyoIYUHVRQePLUQfHAzo6Btv0zmHym/WbS6x7Wndb+GtO5X0br/FG3vK2lrl2n9I+U3jNb6X5O3a0hru4rW9utpW5n1/0j5TaL1yG7X/6q9VUNaW1W0trpwHSGMivv7Z/n9/XvghsGUMB/LgL6wyGYx2ar/NZJbQybdKibdLvyWwaWMaEgSeg/WWURW7iI9Jbdh9NV+/nY7Tg19Ym7VGoFux2514WOThNmET7I3JegeHtosztzaz7xuDaOIbqeSsS58Jvkq75aXZk85MWHtXzBOV7h7XnyTWDy0253as1jDOKJbFUd0T7owpPALmRNJJqVgzIjMYcT181tUP4D8ygKbxWOr/jzWMJboVsUS3Sfigx8RUxOTeY8rq8EXl9kwKmt/19ytYWzRrYotukePEzaKNWJXU/0k5isLbBaP9b/T6NYwluhWxRLdw0euf4dMzlZBfFpykwg8sNv1J7CGcUS3Ko7oHqw/gtyQcJmkXEr9hT59KyaOkYXYBSu/azgzj+I2JJzxmZhbsJPfwd4t4/oqtU9q3Sy0W7V/kMitYdDRrQo6uk8GDT9jQPW3fwevk98sGusfAndrGFR0q4KKbnvhEZuSJATOOUrWUPANSUz/c4XDpyU3icB9u11/f9iq5W3xVvVt8Za+9/0PHkPLhYs7JYgsk7d+dMMeUPv/QFsdWasi7ZkYs4fwNeKKh4KkEQYrGL6u6GZ5xFb95+QahqndqjC16/5xRt0/GX2CUbfmjHbqF2PsVIQYO51nniS7FplUZTBfWmKzeKx90LtTvzhjpyLM2DmpDmGf8/uQ4Z75GPFZCcrXFNskMtv1fxCyU7+IY6ci4Ng57sIXElJJ4COREZ2RsHST/Gum4BdqEgecI1FRCc1XldssNltHdWezfnHHTkXYsXO0vBl+/x1ZxECjVSLxCanN4s6t+2MYnfrFFzsV4cXOyrcPy4vAEdfJTMrLxudEN4zA2s/K9YsvdirCi52DdZ92qfN5iSwtPfnzpNgmkdey23W/u9OpX/ivUxH96+yvI3WtMznp5dxVVobvGckN46/uj1Z06hhu6VRGWzrLcEpnLdayfuzPryHUirMTt4ac5UY95OzEXbB0ssbZ+rE/OasVZ8d15Oy4krPjJUvHa5ytH9uwh2Lr/uXRozpydlTJ2dGSpaM1ztaPbThn5i+UO0CnFg6o/JHJGxXpyu+zjBYp+0uvR7klU5LvtQYmp73zF9C/Z1dfPlz+7e/fhteXV1/gH8Nvl8P3ny5G5thfHCOpU/MX9ciIC6VzPUMfGqU2Nk4fSpoma6ln8u82TrfL5pxffWlcw8X55TW8v/h09R2uf7kcwafLLxdli3bGGTOJrXd24b+WGfpN7fIH9CHgfqZHou0LJAov8nG508g7oLF7quVsk326D40H/dPIjxI5Zz70QadZv38LgD4ihd7fcJwG/LTeMT9Bw853Gih0Ht/AvpWNex07S/NCVIVt8v38moRfSII7DZ2evrH77+5/wO+/wzOyOiG/kd21tYdhwVlE42AnkD928wr/e3dn93T7/q08jBefvppE5oCM6Kd0fyVTMiqg4aBfHGK+hLPGfKllPwsc3yzUFe/mYXzM9dO91sDnibEVUj5DgQF4czjPC+cDeWnICxNoe1wpnvzf5NDO665Oo70cpUXG8NW8wNr6MecqfzdC2dXqtOn5rsH2ItdyQlhIYIxEZ7AL8jzGOmVx/qYSkxx68VaQIteyTp+ceTGVEQppw+UY5jwDnVY/AMIWUoVifYh7ilCGAUQocA==", "base64"));
  res.write(new Buffer("T2c5ljRAAV42LzJEQ/7eIBLDFIXU+ZP3gAtzRL8oIwYlCJN5auU9mEXIgEwJjTVHNlxHhE3ybM9zngmQWapfQWM/kTtZ91GCUuo3AlglCc32YLuXClyktQ+oTGMy7wLjDE/1qUiFPg/5e7T+BwAA//8=", "base64"));
  res.write(new Buffer("AwCqpIhgX2sAAA==", "base64"));
  res.end();

  return __filename;
};
