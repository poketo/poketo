var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/3
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: readms.net
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 03:30:07 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=d6e7962b5c4d8bd911685e08b90166e2e1534131007; expires=Tue, 13-Aug-19 03:30:07 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 13 Aug 2018 04:30:07 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "449819eec82f930c-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8a3PbtrLf8ys2bKeWpqYoyZYfsaVO3sncNk2P3czt6XQ0ELkUEYEAC4CSdc70v99ZvkQ9baVJj+69VWZiEgT2CSx2F0teP37x4/PbX96/hMjGYvDomv6AYHLcd1A61IAsGDwCALiO0TLwI6YN2r6T2tC9cIpHlluBg6dwqxkXoEJ4JpQKoNMDF96zMcIJuPADk2MGN1Yji6+9fEgNsmQx9p0px1mitHXAV9KitH1nxgMb9QOcch/d7OYYuOSWM+Eanwnsd1ptZx1UgMbXPLFcyRq0fyALINSIEGf0KCm4RBB8gvCO6dSqY3gmkPnRMfwoEd5z9PEY3qTSooa78oLJgADMIVYaWyV2weUEIo1h34msTcwTz4vZnR/I1kgpa6xmCd34KvZCJa3LZmhUjN5p67zV9nxjlppbMZct3xgHNIq+Y+xcoIkQrQNcWhxrbud9x0Ts5OLUnU3D/05+T/75zw8/vf6vs9unUe/9B/H6x/Cnd29u1Ivu3ejltz9N3t89f/pKvHuJU/XyzcmNaBs++uD/+NMH+c4BXytjlOZjLvsOk0rOY5UaZ/CoxltGCPdJojmbXsimdN/ivnLAzhPsOzxmY/Tu3LyfN1gdbyKlrZ9a2BtQBqn81aXtMWPQmkyEmV5NNs1Iet9dXp5cdC677dPLzrokc+JyCh+7Lry5/eH7HpiIx8cQKg1vX565F2DShCYlzey8AwqMUVoDrjuoBv/KQxAW3r6Ey9+K1nwGgtH+gsaPxqNl1jMRn7Y+Gmdw7eXdSki/ogx4+BuBXoKSC8XinfU+sinLWwsO6DfjMlCzlh8ntxHGCH3495LARsyfjLVKZfAEjr4KT+jf0fFSl0TzmOk5PT+5OL/0/c3Pb/HOZjDCcKWDQV/JoADR6/W2PS4h+GsoiL/vuZzQ0/Pz85WnAZ/yAHU5tHr2Ry6pSpLLM6WuhnJhmpbkVquEzbP1yALjnrQ+mu+m/bNOx9km7BVdebl9fHQ=", "base64"));
  res.write(new Buffer("PVLBnP4GfAo86DsaWYDalWxa2gZ64gtmTN+RbDpiGvI/boAhS4Utb/ORNbWuj3Sjep/rUWqtkgXF+Y2zMsCq8Vgg+EoIlhgMHAiYZUVz3ynby2amx2Tjv4qNmwNwgGnOXLxLmAww6DshEwbrRJqEyRKp0a6SYu4MbnO0kk35mJEhvvao35ZhtMxdQjb4ct2uvVxAxR1bkdNIMxlUJomGssGjay/g01K5Rf9SYqXWFhIk7S/kVuBJRQ1ROWYxOQpzNrhmC9RvVIyE/toTfKlXCSnQKgnUTNZgFDzlML5yVnsW+l5R/gJOtjfm2/T1qOKUacwm/iiXxhKuBV8VjhhlukLSOnuZjfaYtcyfDJUcWm6ZdAZPswZQEm6pYZ39XdBGqA3qiTN4ll/sNzrQbKzkcMSEGJo0odX1ImuCZ0wIuKGm/SBGjE/maeoM3uQXjx/vO/4jj3Eo1ZAniSIwdA9SwdskUfvBiufDCLUaMp8FGHPmDH6YwxvUCp4WLfvBUxKHCXlGzqBykvaGkKTSj4YxKT4DQrc0/fYDJHGKWtCyHbzXKuYGA3hXtu0HykRqko5xwknoRqUxcwY3ZRsJ/oba9oNpIxwanKIcBsgCMR8aLo0zuI0QbqgZXmTNcMOl2ROymszVcBypVGgkWzuZK3hNt0/0bmVUazbfTJ2HI3UGr1Ih4Htu7GYM114qatZq1XbV4BUeuceSRHA/2x3IAvk65ZZ8q422b8N4XwmlncFz+pMFGytiXFC01QpXWy8fR3arSS6cwExelQhDBiFzR9YnIfIBvFCS2d12m6U2cscpGrtiiGMVMLG6BQs15tLNHy2IWbgkT66cwffU5zPi1DjmxqK+B+0/im4P2qUgI4H+Q2lJ3xisb1zFGFjbsKodbcvOtbTzD1ODmmLAauv/0tuZQWu5HBtncFNcPXApLwm0xC3UWKU2U6tKP22dLel9ipqHfJO8dxAhleVhsS5LNWxgZnUhoBCugqXB1Fb4jxEPApR9x+oU8wWzDhHjjST4KpWZ3jBelQTbJIhcQLnrlkV2XkuyaeWnLQK33Lnb5OPFjEuXHHtKhNTaTTra7NfnD9yZZkmy1YUnu6WVMKvaqHUZWelSoJYAXRWhhB+xxC5BXV84IyuzIWVI8UDHr1pe67DX3Opche6dgeLKxM5a5qdcdp3evfCq9bjsym/U7ies031/y+tae2xoibOhCocj4sw7OfF63V7P66wYnUouzuCEsl1vIVDyyIJEDGCu0oLBpTFTbvhIYDGo7LHVcnzO3/18dr1et9vZyWcXXPiguI/AJdgIwUbcn6C9l9fugfHa8Xqd8+5OXjvgwlOtyP27h7nOgTHX9nqd3m5FtmnCygATlAFKcuXv4bF9WDx2L71ep7NzUXYvSYEh5W5v/EgpAU8DJdD4xO939zHcvTwwhi+8XvvsYifDF8QwGC4pBWMsJvcyeXFgTJ57vXavvZPJc3DhhVL6Xt7OD4y3M6/X7u40Od0zcOEZSj+6l7mzA2Ou5/Xa7bOdzNHR0HPNKRQQ8F6jMam+1+50ewfG6Kl3etk73cnoKbjwit1vU7unX4S3h4f7sC1Lt8L1vTkAWItPYOFoLzXd5/MmbIwPcniLc4nP5PAWR5ab5HPArusXm+Wdnnd6ltuqV1wbm8un0Wn+Natwbzq7ziCjsHug9J0U9J0cKH2nBX2nB0pfr6Cvd6D0nRX0nR0ofecFfecHSt9FQd/FgdJ3WdB3eaD0ddoFgZ32oVLYKSnsHCqF5SbSOdRdpFNuI51D3Uc65UbSOdSdpFNuJZ1D3Us65WbSOdTdpFNuJ51D3U865YbS+Q==", "base64"));
  res.write(new Buffer("i3eUv3+H/3t4VHHmDL5nVfTTPdsz/Lk3Il69XUSKFAbrHRFiLcZPNE55Vrb50FDpG8G0vqIUzHT/1VHDLPHOOg8OMN7hnYVvNKHejbV2fL98UgcrCYTYMIgNc8+7F8PLdlmHxcpUArMhheqViOlMcBMMt3bMXxH0hlkEFhgYpRaM5ULAjEkLVkGEIoHUfAfP0FcxAoONFQPVJXH7+NGKvrNSzzohWs3cUKQ8ANJ9dqK44bxxS3oE6oe79+jhmsfjXFSU68kTLlDUq3o8HreWqmlV7PmBLPJCndPLHEy720rkmAp0l1Iem+naoLGTdnt41l5XmeEBLulsZaVsPLPdMgtCpaigYVSbBY+2VeeOUi6Clcrc+2pwv244X9VE2GwpiQ1HKBY4xxCm0qdD7EazqMidMg0qDA1a6MPXjaPa0KNmK3/SaLYEhha+Xe+QFcE3mvAtdNpXj/5otqhcvbGGhYcNG3FDaksEWmzC11lDs0V0NZo09OrRo68beeFws6XR8H9hYyO5s02UFoRcfX6mVvG2ymPzVawrz5i1unGUFXgfHR/FTFP1DKF84h5925h53ea3R8ndUck76a1VnOc3WwmXEoNGzvSICqXNEzhtH4PnwSxCSet9lC9zY7k/mWcdja+VEFyOn0DeNVGGk/wgSDWX46JD1jdWIy7wCWTls9TXUL1WUBWY589z2mrFzEsznGpyIGQBOmDZiMsA7/qOS7XtKktycibUOJ/5S8VD69aO2t2yfzFa+SlVX20pXsiHFKVXOyoY8n7Railz1XVXybIvVFWJHHAT8wpgUUUi2Iiq+J9n/YqE+obykm8sj9FcVVn1euHvEjHR6TLZ2aspWfkNvWeh8orY/L0VYH5WiHLtRad7pbdzyEUxyRoFSVW0LEO1xaK/yMoJIjZFIH5zOmCO9rttlTyLGWCVW9Z0OYPnGmk7UzIrUwOpZsfA7ZHJ34qhF1t+T7k/ebwhoZ2sFNZnraHSca10iUuXWhyQasoED5hFKuUpr7ftVzVZ0fD8LGCnz0OzgN7R6DsYMy6cwUv6c+1lD3YM5DJJS0Oej1xCXBiTuviKXolgPkZKBKj7zi8q1VAKFQPI+gALAjrKovdMfk85tXs7KKkfJhSYtFZ6DbVbQnMGGdocFzcVlmNIBDKDEJJrooi9iBsIOYqgte18Ysus/SwaSZgxM6WpJre42k8v1fj7VLPouKSd91Xz51JEiaimixLJ59TEvarYNk+yhqysOJsdXkkv1R4BynySBgoNWZGYWT8CJuc2og2KS8hns690YI7Bj9Cf0EANAVrGhWntJG/Jmpt0FHPrbClJq9M8srK0sgvrvNub3WHgQqXHyjqDt5BfQTyHpJp8m47iPJpUG634VjOOd5ZKS8XOQ8mxUmOBrmBU0J5TudK0qZp2tZQyH1KUFb/ObjazwRbjfBwpNdkLTTmoQPSquL0HlZ1xS/70PpiKMQWi2/xuvQZ3a1C87PV/qku0Wtv8t1e0n1f0tHA88uJvXbzV9Zd7Qz+wCVmumiek5JKjRkaXsjXkzyAz8xZkW2fZW6A1mWn0VUyapeEaM9Nt4BsWJ1cgcWaONyInmNlYJsmBn+WmsvThR3Mw6YjWwYhIbLDAzTyrGnWPmy14KijMna96dDu9uWryWuVmhs8ZFNuNyMxoVnMAXBqLLGg91IFbvLNYQN9h5ej3i0qBaQQ2yvY3BdmLuIx2Ok0JC23nYJTPmYAYA84qoVsFjMS6yaNuwY/SR5LkRpwxm2BWYlp0P64UkBos5L8FZSEakgqTVszLYtUwtanGFrwNt2JlSzraRPZxCZ7mRCYHAr2RlA==", "base64"));
  res.write(new Buffer("UKu4oLR4SWCThjZvs0tOdqWnv9rPXrxX8XNxtZ9XR2mTLR5dzO4EyrGN+k73Ip/sFbZl1+4FmsyfKx9DI0lHgvtiDvTxADYS2PwEt28x+ReuVYnCTSX/nYznbcTsAjE31QSxbIKyBe/zxUj1pYZmQYy5gxXwMESN0u50AfejaeGH/lwj6E/7ofsRMba1yQBxaiyMEBjZVzK+J9n3IphvURsQSo4/I2qxhNpnUqoMOX2QAWzEJHQvviB6JpKIyTRepoE+JzHPPjbByCYUfVBzv05Kg7n/ygxG271s/kfisy8XMW+KlT+QTfqkCLlyBSjN7o6E8if0tsm0BrA26aExV+mREDQNDG3qDPJ3n/J3iDL7TPJO/sQEyAPyJYNQ0VFaA2ayDcBiADNuI2ALA1Btd396Jq5mBrZK5f9jcuDzpwU2qeBL5wT2IyKzxRX+NVu8nzH80rof+kqGNXKfKxlyHRfhxBeaDTnSzVMCGmzMuGx+7qkRc5NlW/LcTNlsVtIyVVLm03NEeydhKrKzPEyRFX5a5re3xoXbsyZfLGbPEzp/R+x/LmKn9N4U9fw/EK3nIdaOMCo7WKfNe4pF+s6izIOlcslUVjRbNfmzfK8boVCzrYH6DMkjMFjE7OSUZ7GgTrNDTkMhYiEa4Lb1Kacexfz8v3PsUTD0V5x7lKgWprOO/IuffHwmW1rQnFnSZzjmsrbaDtCSmtT30Zi/Ler/Wov6mrbrx2RY7SIEyTwINNuzoseAdwn6trB5yDN7HKMxVNOWJahSU+THNqKlIi8IcQYxl6lFk8c3YaptROazZla3GNJPmezUUvu02tJnIUzEAjWrano2dxqpuy1VP+XH4FjCTSs/ccmqnD4aanriC05Jm42lQDldxTf3wtFTM5f+W8mp+GWtgIZ+r5616KuVjeVv8rEkeRvkl0/gqHNxfnbaO7886Z23e6e905WP3/lKTTgWnWkqLz++C0exgK2Pp6gNRcE5qmm3dVH7fF5RTfNH/mdRAhQcgzkGHjQXZFNVzkdzDOFHA30IWmO0L4vPIT6b37LxOxZjwzR/bf92VY3hITTqPZ/N3wYNHjSb8G+NNtXy6o+qbwHWzxzSon/DNK/go2nxAPrAg6ta55bRPvShUqWvpETftsqDrZZE66Ec/nzjmWBCulyMDj+aVsIoLn+nAmxxaVDbZxgqjY2CxVIwjdL+HcNRPgGOjuGoOnL7aEwwOWo2rx6t14yt1pdNUQZK07cG65+mHNw/kCXJA0bt+kwkQaAgiFNhH5fDVAvow5F3dLX6OK/B29GBJbx8WltFa/WC6wO5GeZlTrRSqA5q0SNHmq+To511qyT8naWNVOJVFIiVmmtm8OfV5Ial9UmFZCuvjx41q5ay3OyPJQ0vShC9/AOQ117+Id3/AQAA//8=", "base64"));
  res.write(new Buffer("AwB62BO1WVcAAA==", "base64"));
  res.end();

  return __filename;
};
