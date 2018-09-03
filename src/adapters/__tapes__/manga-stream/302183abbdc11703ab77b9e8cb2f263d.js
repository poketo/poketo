var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/22
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:18 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=dcee398e55b5838d65da5a36b9a8946d01535939357; expires=Tue, 03-Sep-19 01:49:17 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 03 Sep 2018 02:49:17 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f179aa795ef-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeSpqYoyZYfsaWO82iTuW2anriZ29PpaCByKSICARYAJeuc6X+/s3yJetpK4x7fe6vMxCQIYJ9Y7C6WvHr68scXN7+8ewWRjcXwyRX9AcHkZOCgdKgBWTB8AgBwFaNl4EdMG7QDJ7Whe+4Ujyy3AofXcKMZF6BCeC6UCqDbBxfesQlCrwcu/MDkhMF7q5HFV14+pja1ZDEOnBnHeaK0dcBX0qK0A2fOAxsNApxxH93s5gi45JYz4RqfCRx02x1nc6oAja95YrmStdn+gSyAUCNCnOGjpOASQfApwlumU6uO4LlA5kdH8KNEeMfRxyN4nUqLGm7LCyYDmmABsdLYLqELLqcQaQwHTmRtYp55Xsxu/UC2x0pZYzVL6MZXsRcqaV02R6Ni9E7aZ+2O5xuz0tyOuWz7xjigUQwcYxcCTYRoHeDS4kRzuxg4JmLH5yfufBb+d/J78s9/fvjpu/86vbmO+u8+iO9+DH96+/q9etm7Hb/6+qfpu9sX19+Kt69wpl69Pn4vOoaPP/g//vRBvnXA18oYpfmEy4HDpJKLWKXGGT6p0ZYhwn3iaE6mF7IZ3be5rxywiwQHDo/ZBL1bN+/nDdfHm0hp66cWDp4om6n81bntMWPQmoyFmVxNpmbEvW8uLo7Puxe9zslFd5OTOXI5hk9dF17f/PB9H0zE4yMIlYY3r07dczBpQkpJqp13QIExSmvAdYfV4F95CMLCm1dw8VvRmmsgGO0vcfxoPFpnfRPxWfujcYZXXt6tnOlXlAEPf6OpV2bJmWLx1nof2YzlrQUF9JtzGah524+TmwhjhAH8e4VhY+ZPJ1qlMngGjS/CY/rXOFrpkmgeM72g58fnZxe+v/35Dd7abI4wXOtg0FcyKKbo9/u7Hpcz+BsgiL7vuZzS07Ozs7WnAZ/xAHU5tHr2R86pipOrmlIXQ7kwTVtyq1XCFtl6ZIFxj9sfzTezwWm36+xi9pqsvNw=", "base64"));
  res.write(new Buffer("QD65GqtgQX8DPgMeDByNLEDtSjYrbQM98QUzZuBINhszDfkfN8CQpcKWt/nImlg3R7pRvc/VOLVWyQLj/MZZG2DVZCIQfCUESwwGDgTMsqJ54JTtZTPTEzLyX8TGzSdwgGnOXLxNmAwwGDghEwbrSJqEyRKo0a6SYuEMb3Kwks34hJEhvvKo345htMxdAjZ8uG5XXs6g4o6t8WmsmQwqk0RD2fDJlRfwWSncon/JsVJqSw6S9Jd8K+CkogaoHLNUjsKcDa/YEvRrFSOBv/IEX+lVzhRolQRqLmtzFDTlc3zhrPcs5L0m/OU82d6Yb9NX44pSpjFT/HHOjRVYS7oqGDHKdA2lTfIyG+0xa5k/HSk5stwy6QyvswZQEm6oYZP8fbONURvUU2f4PL84bHSg2UTJ0ZgJMTJpQqvrZdYEz5kQ8J6aDpsxYny6SFNn+Dq/ePr00PEfeYwjqUY8SRRNQ/cgFbxJEnXYXPFiFKFWI+azAGPOnOEPC3iNWsF10XLYfEriKCHPyBlWTtLBMySp9KNRTILPJqFbUr/DJpI4Qy1o2Q7faRVzgwG8LdsOm8pEappOcMqJ6UalMXOG78s2Yvx7ajtsThvhyOAM5ShAFojFyHBpnOFNhPCemuFl1gzvuTQHzqymCzWaRCoVGsnWThcKvqPbZ3q/MKo1m2+mzv2BOsNvUyHge27sdghXXipq1mrddtXmKzxyjyWJ4H62O5AF8nXKLflWW23flvG+Eko7wxf0J4s21ti4xGinFa62Xj6J7E6TXDiBGb8qFoYMQuaOrU9M5EN4qSSz++02S23kTlI0ds0QxypgYn0LFmrCpZs/WiKzdEmeXTrD76nPZ4SpccKNRX0H2H8U3e61S0GGAv2H0pK8MdjcuIoxsLFhVTvajp1rZecfpQY1xYDV1v/Q25lBa7mcGGf4vri651JeYWgJW6iJSm0mVpV+2jpbkfsMNQ/5Nn7vQUIqy8NiXZZi2ELM+kJAIVwFK4OprfAfIx4EKAeO1SnmC2ZzRoy3ouCrVGZyw3idE2wbI3IG5a5bFtl5bclmlZ+2DNxy526bjxczLl1y7CkTUms36Xi7X58/cOeaJclOF57sllbCrEuj1mVspUuBWgJ0VYQSfsQSuzLr5sIZW5kNKUOKezp+1fLanHvDrc5F6N4aKK5M7Gykfspl1+3fOV+1Hldd+a3S/YR1euhvdV1rj40sUTZS4WhMlHnHJ16/d3buddeMTsUXZ3h8Ai5cj5kMqoBnpeuMGz4WWPQte+w0GJ/zdzd5x16/1+/vJe8YXHgDgZINCxIxgIVK76Tz+JHR2fP6vV53L52UtPyguI/AJdgIwUbcn6K9k9beI6O16/W7Z729tHZJZbUi7/YO4rqPjLiO1+/29wuyQworA0xQBigpUrmDxs7jorF34fW73b2LsndBAgwpNf3ej5QScB0ogcYner+5i+DexSMj+Nzrd073GtneOREMhkvKMBmLyZ1Enj8yIs+8fqff2UvkGbjwUil9J21nj4y2U6/f6e01Ob1TcOE5Sj+6k7jTR0Zc3+t3Oqd7iaOjrxeaU6Qj4J1GY1J9p93p9R+E0PtH/LArUbfGgjvTALARosDS115pusvtTdgE7+XzFkcTn8nnLY8ttzHoEbuvD6bz3b53cpov6G+5NjZnULPb+mvW5N+/v3+PQ//PnGGm+t2zv1bz74/heYnh+WPF8KLE8OKRYtjrFBj2Oo8Vw26JYfexYtgrMew9VgyPSwyPHyuGJyWGJ48Vw36JYf+xYnjqDL9nlcfSOz3QZbnTjV2/XXp35LvqPV5dzTFPNM54Vm517+X/lQ==", "base64"));
  res.write(new Buffer("YFpfUnAxO5z1NdASb61z/xXzFm8tfKUJ9n6wtYO31Rw7rPn9sWEQG+ae9c5HF52ygoKVEQCzITnYFZMpm79tDrd2QFch9JpZBBYYGKcWjOVCwJxJC1ZBhCKB1HwDz9FXMQKDrWd91SVR+/TJmsSzIq06IlrN3VCkPACSfnYWsOWkYEdUA/VjmbsEccXjSc4ritHyQAmKUjOPx5P2SiGcij0/kEU81z25KI10O5ETqq1biVS2I7ZFZMedzui0sykzwwNcEdraYtl63LJDDUKl6CxyXFODJ7sK68YpF8FaUd1d5XNfNp0vaixstZXEpiMUC5wjCFPp0/lTs1UU082YBhWGBi0M4Mtmoza00WrnT5qttsDQwtebHbL61WYLvoZu5/LJH602VZo2N6DwsGkjbkhsiUCLLfgya2i1Ca9mi4ZePnnyZTOv+Wu1NRr+L2xuRXe+DdMCkcvPT9Q63HZ54rUOde0Zs1Y3G1ltZuOoETNNB98E8pnb+Lo593qtrxvJbaOkneTWLo7iWu2ES4lBMyd6TDWO5hmcdI7A82AeoaQFP87XubHcny6yjsbXSgguJ88g75oow4l/EKSay0nRIesbqzEX+Ayyyjfqa6jUIqhqQ/PnOW61OsQVDafjdAhZgA5YNuYywNuB41JZqsqSE5wJNck1f+Xcf9PcUbtb9i9GKz+lwokd5475kKJqYs/hY94vWq9CrLruqzb0haqKCANuYl5NWBwACzamAtwXWb8iEbblZPgry2M0l1U2rF6zt4JMdLKKdlZVnp2cU4m0yovZ8pJzYH52hnzlRScHpaXymYtz4A0MkqreUIZqh0l/mR2VRWyGQPTmeMAC7Te7DuGXGmCVW5ZjOMMXGmk/UzKrMAGp5kfAbcPkBe1Uk/57yv3p0y15qGStJjZrDZWOa1UHXLrU4oBUMyZ4wCzSKXx5vWvDqvGKhuc5vL1uD2kBlVcPHIwZF87wFf258rIHewZymaSlIc9HrgAujEmdfUWvRDAfIyUC1APnF5VqKJmKAWR9gAUBpWmpRPz3lFO7tweTeg6wgKS10hug3XI2Z5iBzWFxU0E5gkQgMwgh+SaKyIu4gZCjCNq70oo7tPazSCRhxsyVpnK64uowuVTj7xLNsuOKdN5VzZ9LECWgmixKIJ9TEneKYpeeZA1ZRWCmHV6JL52rA8pcSQOFhqxIzKwfAZMLG9EGxSXk2uwrHZgj8CP0pzRQQ4CWcWHae9FbseYmHcfcOjuqSeo4j60srezSOu93Z/cYuFDpibLO8A3kVxAvIKmUb1sG3SOl2mrFd5pxvLVUFSb2HiZMlJoIdAWjWtQcy7WmbYVw61VQ+ZCiIvC77GY7GWw5zsexUtODwJSDCkDfFrd3gLJzbsmfPgRSMaYAdJPfbZbP7YyLV73+T3WJ1ssS//aKDvOKrgvHI6/b1MULGX+5N/QDm5LlqnlCSq44amR0KWFD/gwys2hDtnWWvQVak5lGX8UkWRquMTPdBr5icXIJEufmaCtwmjMbyyQ58PPcVJY+/HgBJh3TOhgTik0WuJlnVcPuaasN14LC3MW6R7fXm6uU1yo3M3zOsNhuRGZGs6NC4NJYZEH7vg7c8nWjYvY9Vo5+v6gUmEZg42x/U5C9Q8dop9OUsdB2AUb5nAmIMeCsYrpVwIit2zzqNvwofSROboUZsylm5VNF96NKAKnBgv87QBasIa4wacWiLMQKU5tqbMObcCdUtiKjbWgfldOTTmR8oKm3ohJqFReYFvW92yS0fZtdcbIrOf3VfvayJPrn4uowr47SJjs8upjdCpQTGw2c3nmu7BW0VdfuJZrMnw==", "base64"));
  res.write(new Buffer("Kx9DM0nHgvtiAfTeLxsLbH2C27dU/qVrVYJwU8l/J+N5EzG7BMxNpSCWTVG24V2+GKl2ypAWxJg7WAEPQ9Qo7V4X8DCcln7ozzWE/rQfehgSE1tTBohTY2GMwMi+kvE9zt71Zr5FbUAoOfmMoMUKaJ9JqTLg9C412IhJ6J0/IHgmkojJNF7Fgd4EX2TviTOyCUUf1Nyvo9Jk7r8yg9FxL1r/kfjs4SLmbbHyB7JJnxQhV64A5dndsVD+lArFZ7UJa0oPzYVKG0KQGhja1Bnkry3k5f+ZfSZ+J39CAfKAfMUgVHiU1oCZbAOwGMCc2wjY0gBU292f1sT1zMBOrvx/TA58/rTANhE8dE7gMCQyW1zB37DFhxnDh5b9yFcyrKH7QsmQ67gIJx5IG3Kg21UCmmzCuGx9btWIucmyLXlupmw2a2mZKinz6Tmig5MwFdpZHqbICl+X+e2dceHurMmDxex5QufviP3PReyU3puhXvwHovU8xNoTRmUn67R5z7BI31mUebBULpnKimarJn+W73VjFGq+M1CfI3kEBouYnZzyLBbUaXbIaShELFgD3LY/5dSj0M//O8ceBUF/xblHCWppOuvAH/zk4zPZ0gLnzJI+xwmXtdX2CC2pSX0fjfnbov6vtajf0Xb9lAyrXYYgmQeBZndW9AjwNkHfFjYPeWaPYzSGytqyBFVqivzYVrBU5gUhziHmMrVo8vgmTLWNyHzWzOoOQ/opyk4tta8irbzRbSIWqHlV07O901jd7qj6Kb/jxBJu2vmJS1bl9NFQ0zNfcErabC0FyvEqPpcVjq/NQvpvJKfil40CGvp9+7xNH5xrrn5OiyXJmyC/fAaN7vnZ6Un/7OK4f9bpn/RP1r5b5Ss15Vh0JlVefXwbjmMBOx/PUBuKgnNQs177vPblq6Ka5o/8z7IEKDgCcwQ8aC3Rpqqcj+YIwo8GBhC0J2hfFV8ye764YZO3LMamaf3a+e2yGsNDaNZ7Pl+8CZo8aLXg3xptquXlH1XfYlo/c0iL/k3TuoSPps0DGAAPLmud20b7MIBKlL6SEn3bLg+22hKth3L083vPBFOS5XJ0+NG0E0Zx+VsVYJtLg9o+x1BpbBYkloxplvbvCBq5AjSOoFEduX00Jpg2Wq3LJ5s1Y+v1ZTOUgdL0mbD6V+WGdw9kSXKPUfu+8EYzUBDEqbCPy1GqBQyg4TUu1x/nNXh7OrCEl09rq2ijXnBzIDejvMyJVgrVQS175EDzddLYX7pK3N9f3EhFXkWJWCm7VgZhUak3rKxQKiVbe/Gr0apayoKzP1ZkvCxC9PKvt115+Wcw/wcAAP//AwD2g4BSF1MAAA==", "base64"));
  res.end();

  return __filename;
};
