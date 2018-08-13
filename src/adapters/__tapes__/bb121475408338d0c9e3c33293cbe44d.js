var path = require("path");

/**
 * GET /series.html?id=111976
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * host: www.mangaupdates.com
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "nginx");
  res.setHeader("date", "Mon, 13 Aug 2018 03:31:43 GMT");
  res.setHeader("content-type", "text/html; charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["secure_session=4323728ca0cbba3a7c3dc44a04fd96e9; expires=Thu, 08-Aug-2019 03:31:43 GMT; Max-Age=31104000; path=/; domain=www.mangaupdates.com; secure; HttpOnly"]);
  res.setHeader("strict-transport-security", "max-age=16000000; includeSubDomains; preload;");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAEA8Rb2XLbRhZ9jqvyD226YsgVieAiyaZEQiPJdrzIsqIlifOiagJNEhaARgBQNPM0ntf5hnmcqvmL+ZhU5Tvm3O4GCFKiKEsxJ1W2SaJxt777vWk/fP5+//TD0Qv26vTdATs62zt4vc8qa7b9c3Pftp+fPtcP1qu1OjtNeJT6mS8jHtj2i8PKtw8qgyyLt2x7NBpVR82qTPr26bE9yMJg3Q6kTEXVy7yK8+2DNv2Gf1l7ILhHH1g787NAOHv8gq+dxR7PRMre8ajP2Ro7S3jos7fSX9V/Fd+rbVu/piCEIuMs4qHoVDyRuokfE3UV5sooE1HWqRwQ1IztRh47FCP6qDEci0DwVLAcL9cH0irRCtJKgC/EeCQTLy1BDYnKVcYjPxSrbKhpzz+sskQDT4tPqywSo1WWujwKeCYTPCk+r7KRf+GX0ZJI18RvQ/+yU9nXjKydjmNRIiATnzIl5W3mDniSiqxzdvpy7VkZjBYLH2YDmZReBf++e7GyLz3xmIfx9ivcy5M3H05XnovU70dPDIjAjy6IkU4lxfuZO8yYD6lW2CARvU6lxy/paxV/XX0hGwciHQiR5af7gexCZVJ6UHVTiDIDP52KYoO+a6GXcF4BYeOYnYrEF+n1EB607/m6Vp8yZR/5Jde/VliauJ2K/RE0jNNMhNWPILpt66fOg/ZtX1YMnLvQyr4kXs6J6PSO0AI/zejdnazTaK7fhx4ZhjCXu9Khr3eGCWVGkyvhQSaSCHzj7snsOxWy+8L+jFWenOQqk6RpNR7EuabwOA58iA3WbePR95/C4KrSCJ64g+vekLGIUvW05CUUDKPOyqCNHVcJdk6koit3EicGga38mJ07snZXemNGvymePf+S+V6n4kKiIhHK+zHydrwbCOaKIEhj7vpRv1OpwS7xPeaeV3wPeJriZW33xCMBxesP19bYScaTbGuPR5FI2NqashqCnJhP+Ogp3F11BBrhh32tun7I+yK19YPzTMateqv6Me5XGG6mUzG/0w9Q60w7aIC2C9iKgBeRN4X+Cm0Hsu9HbI/PJS+n9LbyIEkGBFRfN4mizLD65s3lsyuzTIbn07yqy66tn88yq0FfA0zhP8f9nQeil5WkNv1gHkB1I/poV37SV6oFRxjLN3ugpGd8/uSC9bGeTELGXTIBI5IqxdQKQ6waSIgplmlWkhIg+1EMv6197cD3PAH/bcKCC+d8yYMhDFGRNvUia5MSu1oV05AHwXlXBl5lmpNzo7cV5wyOmeBuPY66abw9hZd8PNS8DEuRBZfq/w7s9UZO09BAqTgajP77CPZA8fc62LF5djv4xekp+FPEKisxzt5YjJJOte/3jKWoO8pJbHPjQCh0DmN1ITu4ow4uqy8zwniNEf42RCKCayxBfanOs5zZHbJCjj+4h8JiSFds0oKpX8gvkFleozsTJSuZtIJSWDWBVI4ph1k6eZ3xayyFfV+x/3cc5p8r8G4ikMvNcVNGI0qOTqn5bf3CzOusCxURCbnUnBOwVmIT3yYe9ABmrJxUTmlBJNFATtSAJ3s/v0KiOnNHb66Z1GgSJ/fXCk8iR/VCk8lslM05yhaVGyRiVPCcHAuF5w9DbZ3ObhxrjaFXnNNkzCTMXw4TSj+ZfzSQkWClSPpwcpqp3Aw+RIeiNQSILfY0hrfKVdyitDRFqu9nwwhJGMFBMidDe5ja+GKXY6jtexutZ5vrtY1GYydIO/XHYdZ5ZjHErz5yVeu8G/DowjJ+m5K9TmXke9lgq16rxZ+2p02QIxWI8kgFJivl257YiVLdktJqUZMSzIoZLsdcsPJO14l4cmRKxCofYEcyCHLbRGkzUSx6oDW+PeWuc9lRmVSWk5JfjJdmXPnR+5NTUuQp5zTfgxMEdXySY+Q5hdWwpnIOq2nl0rNqFmoPCL1jQerfWWQ4uckoG5CUqUQdBUL5byvXSgtZAzxex9JJjuW8TtmYFC2RMoRsBY92ck9ibsRAnhhXCVhBBYgos2wl3POlpWOWRVyeuwPpu8Iysctarz19indMxnIT8BZxeChXWZdKmezxo1qztZ2ySGYsHLMeHwbZQ/a6+B2/ES8hMtb8qDmzIhOWxhLRapXFyMeQi+GDyFaZyNwnhpSvzfTmFzL9msWo25A1+sgHJOsKZA1pOl4StRtfSC1d0WstdtiTUiciPJUyWhLF619A8QeBeh7mDl0aVavUoKD0+WtrQPNLKUQWx7KBQGUTCnj+GSLZ5a626BB5YiCMM0AgLDmBGZufslSVLVkmjFiXIslQrgVr6pUtpoFu4znKaMtkVpcyE5QCWSYfuxJpbvaWKs9KRArDTSELqnRMEkCOrYzIHFK4FlJI5ZBFsqX0a5GQZhwOXO1EXE5bO8dJBC0cvSIdCfU5/ULED50TIdj7wFOhJW3bQ0NADoIoyTWqSNiKbLCozY4AT8efb76hLEUzUMo5JvXc/OjYnIqOKv2n4EIQi3oyv8MQDRKZaclqyVFxrI5SVHQHQ/UH+VW7izjcdVQAbdtdh/mpUsc3HDFGoBWnOl48QNXMZA+CDH03pZdGfjZgnA0jH3mzvj503jxYXBDIEermKmNvJNJOUu5EXMpgSMn1Q8aO0WmE0wjh7FRbMZMeHz805ClyEof6YKiZIwbtM9lJRWcneSei1OFUmeCnrOpSXtTFu9Hpi19OiRulLgYknih6Cn32E5fypsSt4s/A7w9GfFyNRIZqHK1P03awnEflr+xvV88rJHvHTpv+mMrDMo0SKNGZc3xywl4K4bXts4IiU5IRbaDTMF9Sp0I5oCyU0+JI/tOM+hRadn36XHpvkhDtqyZIURHMy7O1mv+FmXbuCqbqAfCV5zc5iyrZn3RrzlUObqSE09O9HPX0WiIJnGnwELAQVZBK1GFJN/d7StLWJF0hUIP2TKZWqdeherNdHSO+okOhqtWBgKahtdNEtaATLHpZt3vMC6rswFsAOespFDUT91YJKHMvdQFitJN0MVLRNs1eRz05H8yEghvJT4hmXRdfR//GNP3qNDVm5jAAcorWmBYvrsmo+TfKQ5buWJfwSD0ytLkn9nVj6l4q+28OQeYgRbs5EagIkVMBSNf/oDUvN3I28O8VYRt2J4ZISjkjALrSXEULVZ6uhr598MDocpGXI3ee6lRShC1rNn2fBF+HepbAXOQUqCZVQqGsrRQiZ6oIQ4aVxsL1IQaUwEVuYPQzv9Ey9FLGcgcE5jrQAXUv+okcRt6ayk+2hkmwUhS916Yidt4iEhk6vel5t68C4RNEDm17VgN55O7BQbmfVf4MJ65GLJHUwcyEnJuxmiEI9f52AoW5swssFBzKsMuf/yo8e5aztww8+5azvww8zy3n+TLwvLCcF8vA89JyXi4Dzw+W88My8LyynFfLwPMaDYxl4HljOW+Wgeet5bxdBp4DyzlYBp53lvNuGXgO0SFaBp73lvN+GXiOLOdoGXh+tJwfl4Hn2HKOl4HnxHJOloHn1HJQPX79uH1mOWfLwPOT5fy0DDw/W87Py8Dzi+X8sgw8HyznwzLw/Go5v16PJ68lVH5NvcuZVgCVHaUNhmK6cGMdMDVdKJJ7swKjFxyoeDPdxlJlo+qWq9XD1Amd6k/GEkznxXlNc07liYXNnEkv4kRhVnUq+hAPVHE/PfbaYi0aec19tI1nrE1Dkbxiyle9VLWPBhKY0YW/U2ysXbPBRhCmkvUpmGYmZatTuAuqATVJagqIpR8aW6LFIBLQoyey6OljcocmuQjRVpN6GEP7QasM7agLIWKWJahwVOcN7TU1rIkT2UdvFN1r6qclGHUYIT7MsU4vAkzQMqIRsph+/k6EXUWTEq2ZsKX7HFsJIAL7ZfmCnu6YTfgqjpqtl7wmIyymhfxxiJF5b1xxTtHlOx2J4FKwfT8bg3aGWaLH+hJN5wi9vO5YdQIxg8JAOKVeIjUGe9gnDLBwxUYDGn9gQUV3DH207bG5oHuR+wMIFa3I36Xnc7cKVQF0F1jwFlZ5SGoX3FfSGgzRU0zRphSflJQJB/aT8iOEZYAObwoA/WTo9TF47ePKsIBIJ49x8iVRNKZ5LKhJiZxeAv6J4ENxgXYnewt8PhqGq+odWjfKuZm8DyKLmRVHnxNbUmLNJVlAFK9wpb0hJihARxSh5cr9EC1TNa4Y4Gvg90SV7dGWyGBCPR6ABNnnKb/w2SHP0uEAkzOAyGdhPEglw+0kIhTERPTJx0SMcVVAMwkeE8zEJI2Iq1X2BpcHVBcYPoD5lI+JhMe/DWW2vT9MfIml0jG78IMANBtB6qe4VRqujPCIHuBqekJgqawPVEQBvZO/sZMrLTWNtb0UemVUkLYoF+qebmctBnYssMsJgrVbWQz20N5dDHQ3TSV6HwT3kNRyMVjlZy6mF2XxtQopMNv58/N//vj83z//9e8//v75z8//VH+rX+jzP/SZxVT9gGuNU3ai91ch/sVkFf3pG/tn1HCJU702A+fWfFpfx5KA2g+0FFLlrdWAZBfLtsOQvRuiS49LNAMSxeSdcG3UNzAKvx7XUToOpAt1JY4n0xiFbLG0zM4x9INWjFdSzIS7aLDe4O6cy2rbd1pt23eYSx/X19VnuLK/lrdZxrhjwpmOXx1m1ZsMQxKYVx9zdx0drR7c0hpta209jTNsHMtAJluPOOeWUzqObVgKa1qnrjDU/H8x1Gx8EUO8SzszdRaCZ4yd+mhpz7L1rHRPjf8XW60vY6upGVL3OsXRnVqDedajDVdv1nbq9Xrr6abaKYfeYL1bJ2TUF9cDTtrOVYGHJtE5CB3REHD0aW3YeAFV0WJLwz5shqiD0LmPxm1GC0899h5TAR97AotsrsV+wqiQQv/K+6iPAWL/yWKM+zJETMso5hlvKDxsuizCdSgXgyYHB49DK742FvrY/oDHaCvfAvhtAgutaGIgeumL0S2Cyq1iFXYWh+Fi8mrIR2PMcldZjdGKKg11EZkKx6af0rL3Tg8xAGrUqDeUy99HMnOBXjoyL6S0RLqK9Vi1ILw6AiyWq+Ycq+O3CVu7SJww2cLuW7XFbFavVWtspV5rMFpWgCdHarHHx/g/JVACFGeR3D6tbsAtYKqt3ymVSvAeatnbql8doZRHJjSpoalJsXuoyoBicteqOPWaqtKuHtL7aybZQRoPTrFAN7VVt76OrTpWmnFoJ84e1Wq9Xg1Lkzo+XVOH6DlCo/4dW2nUczEYn0hDGVwAUb6Y/Nb3X4H8ZnNZ5D+7B/mbG3Okv7l5O/LXSfrr95H+03uQ33w2h/xW63bk14j82n3I37w7+ev1OdS77q2o3wTxm/ehfePutDfm0d7Df7cw2yZob96H9vWvQrvrLoP25t1pny/2VusWpJO+30vdG1+D9M3NZZBevzvpjXl+pvc/AAAA//8=", "base64"));
  res.write(new Buffer("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", "base64"));
  res.write(new Buffer("xF2xbsIwEP2ViIW9IxJIWWCCreqMVNqpIEAt/fy+9+5sH2nCdBIbQZHt2Oc7J/fuveXcxlT9TvU6SunJ1Y84KxWJwqkHkZHPkzi5izfBkXlUmKQNrrkyY4inOYc4XRWy7LvbArwagGX41+FZzNAiGC4hmPt++pqh/M0P5FsWbbGmia8p2hFdh34Yluk4g0H7ctGHMtzSscqH8sLvxl/37O4M7f8s+IXWQoyF8mc8ElSQhlOSlA0z0IYanDNKIjEoRSk1a2VrITn1utr2u03frb9Nh6J5+7rFPIQc9z8hmfUQNo0z9+HXzGq1E4cNZzGl6RveFq4Yv7f+hss5CfBuvlQpnTREKLhlDfkD50fMStpzCLUi1VRHxUw3XgqxmcodZiJoDYeL7Zp2nz5mSxcnZTqQQiJw1TKXYPX1y8TZCNRymPGqvJzYQ9zsjYjfF9fUMNLWNlYNgAybYYZVAWntD4Di4I2uSPfEXqDOQ/4p32iVjWriKZrxPclIrZzeR7tRWX/iZCBR6jXD3oNXRwEUONnL06fkY3/20a57UX4n+eAIZIB9G6xhchrGwkdUoo9CSpRYvAdOClgleKFobPWLZRAUpC5C9H8AAAD//w==", "base64"));
  res.write(new Buffer("tV1La8MwDL4P9h+MoeAwkrD2MOgWRlsyxqBQtvYcQpdljEJHswej9L/vk+JXkz526G6pkRXJVh3J/ixZYNQR2wTW4k8LKG748GkuyA99tBzCAx/RdDxMH59O+A31UoJgSQTuBklOWmMMF8S4Ecba/lHJaToYh8PZCZXMn7E/R0BL1EShRzGatHQ0Cu6yo8PuLaeH/DQr2ICTRc5a/1fMsfbVPFd6a+JtuxHFxRcIOhzERmN8Kez17cZ0b7+IyZwbaYOxPTGWpUQ/50s22Ho8PTLL+lDNXxfk3S0BTT5ZWXCHJXA+Mw2l1QdGbAIdyWWubNDIewjbzrZHW++qmSziWDiMeyR1sZ8X1iMjf9GVT68bQb2XbyNybQvhjazbMNHqeGw9MjsBjaEFibU+E4Te+FcoJFmVd4WCAoQvHEeU+UN1T4imRCjF62nVlyJJcIo8R6JMnEMgKy4jfyJkDfpY4uw3ELdCU8ZxVS0iKfp1AyreUdEkGVyfn9n+39jILxTVD57n74WSnd5IC8YxmwTUyQpxISSONcpFEeYAMv0gbKu4XG6ZR290jZtSjLYug3R6KXjquxP4IQN6P1ZzTj0OPY8OBLKIruvhoP3FKSVNh9kmIisBbMqAudJNSs4G4eUVbkJ1wy5r6dFHGWdbn4ADeTyKhNhQGu75qypWq0CsN55UQmCeAVEFjI4kjKm0Ex5+AcqUAQ6chQAA", "base64"));
  res.end();

  return __filename;
};
