var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/18
 *
 * user-agent: poketo/test (https://github.com/poketo/poketo)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 03 Sep 2018 01:49:17 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d3106d5e31943b5eefb30aefcbb0eae741535939357; expires=Tue, 03-Sep-19 01:49:17 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 03 Sep 2018 02:49:17 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f172dd192ee-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8/XPbNrK/56/YsJ1ampqiJFv+iC117CRtMtem6dnNvF7nRgORSxEWCLAAKFl30//9zfJL1KetNOn53qsyE5MgsN9Y7AJLXj5/9ePL21/ev4bIxmLw7JL+gGBy3HdQOtSALBg8AwC4jNEy8COmDdq+k9rQPXOKR5ZbgYMruNWMC1AhXAulAuj0wIX3bIzQOQMXfmByzODGamTxpZePqYGWLMa+M+U4S5S2DvhKWpS278x4YKN+gFPuo5vdHAKX3HImXOMzgf1Oq+2sgwrQ+JonlitZg/Z3ZAGEGhHijB4lBZcIgk8Q3jGdWnUI1wKZHx3CjxLhPUcfD+FNKi1quC8vmAwIwBxipbFVYhdcTiDSGPadyNrEvPC8mN37gWyNlLLGapbQja9iL1TSumyGRsXoHbdOW23PN2apuRVz2fKNcUCj6DvGzgWaCNE6wKXFseZ23ndMxI7Ojt3ZNPyf5LfkH//48NN3fzu5vYp67z+I734Mf3r35ka96t6PXn/90+T9/curb8W71zhVr98c3Yi24aMP/o8/fZDvHPC1MkZpPuay7zCp5DxWqXEGz2q8ZYRwnySas+mFbEr3Le4rB+w8wb7DYzZG797N+3mD1fEmUtr6qYW9AWWQyl9d2h4zBq3JRJjp1WRmRtL75vz86Kxz3m0fn3fWJZkTl1P43HXhze0P3/fARDw+hFBpePv6xD0DkyZklGTaeQcUGKO0Blx3UA3+lYcgLLx9Def/LFpzCwSj/QWNd8ajedYzEZ+27owzuPTybiWkX1EGPPwngV6CkgvF4r317tiU5a0FB/SbcRmoWcuPk9sIY4Q+/HtJYCPmT8ZapTJ4AQdfhEf07+BwqUuiecz0nJ4fnZ2e+/7m57d4bzMYYbjSwaCvZFCA6PV62x6XEPw1FMTf91xO6Onp6enK04BPeYC6HFo9+z2XVCXJZUupq6GcmKYludUqYfNsPrLAuEetO/PNtH/S6TjbhL2iKy93kM8=", "base64"));
  res.write(new Buffer("LkcqmNPfgE+BB31HIwtQu5JNS99AT3zBjOk7kk1HTEP+xw0wZKmw5W0+sqbW9ZFuVO9zOUqtVbKgOL9xVgZYNR4LBF8JwRKDgQMBs6xo7jtle9nM9Jic/BexcXMADjDNmYv3CZMBBn0nZMJgnUiTMFkiNdpVUsydwW2OVrIpHzNyxJce9dsyjKa5S8gGn6/bpZcLqLhjK3IaaSaDyiXRUDZ4dukFfFoqt+hfSqzU2kKCpP2F3Ao8qaghKscsjKNwZ4NLtkD9RsVI6C89wZd6lZACrZJAzWQNRsFTDuMLZ7Vnoe8V5S/gZGtjvkxfjipOmcbM8Ee5NJZwLfiqcMQo0xWS1tnLfLTHrGX+ZKjk0HLLpDO4yhpASbilhnX2d0EboTaoJ87gOr/Yb3Sg2VjJ4YgJMTRpQrPrVdYE10wIuKGm/SBGjE/maeoM3uQXz5/vO/6OxziUasiTRBEYugep4G2SqP1gxfNhhFoNmc8CjDlzBj/M4Q1qBVdFy37wlMRhQpGRM6iCpL0hJKn0o2FMis+A0C2Z336AJE5RC5q2g/daxdxgAO/Ktv1AmUhN0jFOOAndqDRmzuCmbCPB31DbfjBthEODU5TDAFkg5kPDpXEGtxHCDTXDq6wZbrg0e0JWk7kajiOVCo3kaydzBd/R7Qu9WxnVnM0XU+fxSJ3Bt6kQ8D03djOGSy8VNW+16rtq8IqI3GNJIrifrQ7kgXydckux1Ubft2G8r4TSzuAl/cmyjRUxLija6oWrpZePI7vVJRdBYCavSoQhg5C5I+uTEPkAXinJ7G6/zVIbueMUjV1xxLEKmFhdgoUac+nmjxbELEKSFxfO4Hvq8wlxahxzY1E/gPbvRbdHrVKQkUD/obSkbwzWF65iDKwtWNWKtmXlWlr5h6lBTTlgtfR/7uXMoLVcjo0zuCmuHjmVlwRa4hZqrFKbqVWlHzfPlvQ+Rc1DvkneO4iQyvKwmJelGjYwszoRUAhXwdJgaivix4gHAcq+Y3WK+YRZh4jxRhJ8lcpMbxivSoJtEkQuoDx0yzI7ryXZtIrTFolbHtxtivFixqVLgT3thNTaTTraHNfnD9yZZkmyNYQnv6WVMKvaqHUZWelSopYAXRWphB+xxC5BXZ84IyuzIWVK8cjAr5pe67DXwupche69geLKxM7a1k857Tq9B+FV83E5lN+o3Y+Yp/v+lue19tjQEmdDFQ5HxJl3dOz1uqdnXmfF6VRycQZHx+DC1YjJoEp4lrpOueEjgUXfssdWh/Epfw+zd+T1ur3eTvaOwIW3ECh5YEEiBjBX6YN8Hj0xPrter9vt7OSzCy58UNxH4BJshGAj7k/QPshr94nx2vF6ndPuTl47ZLJaUXT7AHOdJ8Zc2+t1ersV2SaDlQEmKAOUlKk8wGP7afHYPfd6nc7OSdk9JwWGtDV940dKCbgKlEDjE7/fPMRw9/yJMXzm9donO51sl44UrsBwSTtMxmLyIJNnT4zJU6/X7rV3MnkKLrxSSj/I2+kT4+3E67W7O11O9wRcuEbpRw8yd/LEmOt5vXb7ZCdzdPT1UnPKdAS812hMqh/0O93eZ2H08Rk/bNuoWxHBg9sAsJaiwCLWXmp6KOxN2BgfFfMWRxOfKOYtjy03CegJh6+fzeY7Pe/4JJ/Q33JtbC6gRqf558zJv37/3b/H29eRM8jn3tGfa1mPp/C4pPD4qVLYKynsPVUKT0oKT54qhaclhadPlcKzksKzp0rheUnh+ROlsNsuKOy2nyqFnZLCzlOlsFtS2H2qFJZrSveprindck3pPtU1pVuuKd2nuqZ0T5zB96yKTLsne4amDw==", "base64"));
  res.write(new Buffer("piurt4sonnIUvSN6ryVgicYpz8rqHr0MfSWY1heURE73F30NtcR76zzec7/DewtfacK9G23tgHX5LAVW8rvYMIgNc0+7Z8Pzdlkpw8pMj9mQEqlKyHRqswmGWzuIrQh6wywCCwyMUgvGciFgxqQFqyBCkUBqvoFr9FWMwGDjmW51Sdw+f7ai8awYr06IVjM3FCkPgLSfnflsOBHakr1C/fjtIUVc8nicy4py8TwhhqKk0OPxuLVU8Khizw9kkbd3js/LYKGVyDHVUC5lpJsJ26Cyo3Z7eNJe15nhAS4pbWWybDxW22IGoVJ05jyqmcGzbQWUo5SLYKV48qEyyS8bzhc1ETZbSmLDEYoFziGEqfTpnLHRLIomp0yDCkODFvrwZeOgNvSg2cqfNJotgaGFr9c7ZHXKjSZ8DZ32xbPfmy2qKG6sYeFhw0bckNoSgRab8GXW0GwRXY0mDb149uzLRl7b2WxpNPxf2NhI7mwTpQUhF5+eqVW8rfJkcxXryjNmrW4cZDW4B4cHMdNU4EAoX7gHXzdmXrf59UFyf1DyTnprFUeuzVbCpcSgkTM9olpW8wKO24fgeTCLUNKEH+Xz3FjuT+ZZR+NrJQSX4xeQd02U4SQ/CFLN5bjokPWN1YgLfAFZhSP1NVRSE1Q1wPnznLZavemShVPZBIQsQAcsG3EZ4H3fcan8WGWbUJwJNc4tf6m+Y93dUbtb9i9GKz+lApkt58v5kKI6Zschc94vWq02rbruqir1haqKRQNuYl4BLA76BRtRofXLrF+x4bmhAuAry2M0F9WuZ702c4mY6HiZ7OztgaxCgkrhVV60mL9aAMzPagUuveh4r+3HHHJx3r9GQVLVlcpQbXHpr7Ij0YhNEYjfnA6Yo/1mW7HFwgKscsuyG2fwUiOtZ0pmlUQg1ewQuD0w+YsL9O7Bbyn3J8837DcmK7XPWWuodFyrLuHSpRYHpJoywQNmkaotyuttC1ZNVjQ836vdGfaQFVAZfd/BmHHhDF7Tn0sve7BjIJdJWjryfOQS4sKZ1MVX9EoE8zFSIkDdd35RqYZSqBhA1gdYENB2PL0K8FvKqd3bQUl9r7fApLXSa6jdEpozyNDmuLipsBxCIpAZhJBiE0XsRdxAyFEErW3bx1us9pNoJGHGzJSmssniaj+9VOMfUs2i45J23lfNn0oRJaKaLkokn1ITD6pim51kDVnlZ2YdXkkv1U8AytxIA4WGvEjMrB8Bk3Mb0QLFJeTW7CsdmEPwI/QnNFBDgJZxYVo7yVvy5iYdxdw6W6qG6jSPrCy97MI77w5ndzi4UOmxss7gLeRXEM8hqYxv00mJR0a10YtvdeN4b6n6T+w8NBorNRboCkY1xzmVK02bCh5Xq93yIUXl53fZzWY22GKcjyOlJnuhKQcViL4tbh9AZWfcUjy9D6ZiTIHoNr9bL5PcmhcvR/0fGxKtlp/+FRXtFxVdFYFHXp+rixdv/vRo6Ac2Ic9Vi4SUXArUyOnShg3FM8jMvAXZ0ln2FmhN5hp9FZNmabjGzHUb+IrFyQVInJnDjcgJZjaWSQrgZ7mrLGP40RxMOqJ5MCISGyxws8iqRt3zZguuBKW589WIbmc0VxmvVW7m+JxBsdyIzI1mR8LApbHIgtZjA7jFa2UF9B1ejn6/qBSYRmCjbH1TkL0ryWil07Rjoe0cjPI5ExBjwFkldKuAkVg3RdQt+FH6SJLciDNmE8zK5Iruh5UCUoOF/LegLERDUmHSinlZcBemNtXYgrfhVqxsSUebyD4swZNNZHIg0BtJCbWKC0qLOu5NGtq8zC4F2ZWe/uw4e1H6/nNxtQ==", "base64"));
  res.write(new Buffer("X1RH2yZbIrqY3QuUYxv1ne5ZbuwVtuXQ7hWaLJ4rH0MjSUeC+2IO9H43GwlsfkTYtzD+RWhVonBTyX8j53kbMbtAzE1lIJZNULbgfT4ZqUbOkBXEmAdYAQ9D1CjtzhBwP5oWcejPNYL+cBy6HxFjWzMGiFNjYYTAyL+S8z3K3ulnvkVtQCg5/oSoxRJqn0mpMuT0zjzYiEnonn1G9EwkEZNpvEwDvfE/z74HwMgnFH1Qc79OSoO5/8ocRts9b/5H8rPPlzFvypU/kE/6qAy5CgVon90dCeVP6IWAaQ1gzeihMVfpgRBkBoYWdQb56yn5ax6ZfyZ5J3/AAPKEfMkhVHSU3oCZbAGwGMCM2wjYwgFUy90ftsTVnYGtUvn/uDnw6bcFNqngc+8J7EdE5osr/Gu+eD9n+Ll1P/SVDGvkvlQy5Dou0onPZA050s0mAQ02Zlw2P7VpxNxkuy353kzZbFa2ZapNmY/fI9p7E6YiO9uHKXaFr8r97a154fZdk8+Ws+cbOn9l7H8sY6ftvSnq+X8gW89TrB1pVHayTov3FIvtO4syT5bKKVN50WzW5M/ytW6EQs22JuozpIjAYJGzU1Ce5YI6zQ45DaWIhWiA29bHnHoU9vl/59ijYOjPOPcoUS1cZx35Zz/5+ES+tKA586TXOOayNtueoCc1qe+jMX951P9aj/odLdfPybHaRQqSRRBotu+KHgLeJ+jbwuchz/xxjMZQWVu2QZWaYn9sI1oq84IQZxBzmVo0eX4TptpG5D5rbnWLI/0YY6eW2tevlt7cNxEL1Kyq6dncaaTut1T9lN/rYgk3rfzEJatyujPU9MIXnDZtNpYC5XQVn0ULR1dmLv23klPxy1oBDf2+vW7RhwUby59NY0nyNsgvX8BB5+z05Lh3en7UO233jnvHK98n85WacCw6kykvP74PR7GArY+nqA1lwTmqabd1VvvCWVFN83v+Z1ECFByCOQQeNBdkU1XOnTmE8M5AH4LWGO3r4ot11/NbNn7HYmyY5q/tf15UY3gIjXrP6/nboMGDZhP+rdGmWl78XvUtwPpZQFr0b5jmBdyZFg+gDzy4qHVuGe1DHypV+kpK9G2rPNhqSbQeyuHPN54JJqTLxejwzrQSRnn5OxVgi0uD2l5jqDQ2ChZLwTRK/3cIB7kBHBzCQXXkdmdMMDloNi+erdeMrdaXTVEGStPn4OpfDxw8PJAlySNG7fqSH0GgJIhTYR+Xw1QL6MOBd3Cx+jivwdvRgSW8fFqbRWv1gusDuRnmZU40U6gOatEjR5rPk4Pdpask/d3FjVTkVZSIlbprZhjmlXnD0gylUrKVF/wOmlVLWXD2+5KOF0WIXv6Vvksv/9zp/wIAAP//AwAHvm/f/1QAAA==", "base64"));
  res.end();

  return __filename;
};