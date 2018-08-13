var path = require("path");

/**
 * GET /api/manga/13127
 *
 * user-agent: got/8.3.0 (https://github.com/sindresorhus/got)
 * accept-encoding: gzip,deflate
 * accept: application/json
 * host: mangadex.org
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Mon, 13 Aug 2018 03:33:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("set-cookie", ["__cfduid=de6d1332af8e3a84f633c7a1e32f326901534131189; expires=Tue, 13-Aug-19 03:33:09 GMT; path=/; domain=.mangadex.org; HttpOnly","PHPSESSID=p060fr3cc5jf13qleqtimnvqj8; path=/; domain=.mangadex.org"]);
  res.setHeader("expires", "Thu, 19 Nov 1981 08:52:00 GMT");
  res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "44981e611f0893a8-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA8ybW2/cNhaA/8qBHta7gOKKuowk70Pha506iQvbXaPYLILj0RkNMxxySlIeTwv/94KSxpaUVJuXAHoJPBIl8TsXnguZP701yhK9oz+9uXok/anSwjvyPv7A11iS+fhDffvjDyxiYXr4eVP+yJIwT9MgiwPP9woyc803livpHXl3S4K7LYlHglNudz4gCJQFlO7Nkgp42IFdEgjCgrQBtah/LnDNBScD26WCB0INXLobXIPENZl60OmSSzIEf6iC4/wQ3kpAmHO7g+2SNMFOVSvk4D63rNYoDcwVPXFj/frxOdr9EPeVpRKFAYRSV0VJgCVyaWw98gYtXLgZ7QA3G0Jt3HQWWknrJvyBVpXkcLVTFZ8vefP2JWGxp3l9/hDe2gP3lTUKPqc3tYCpgEu0tKhEPSc3GW4A+ZrLEhZKw5IbEHxBh3BSuRm9Tpwb93VVosEVhw9oTbVUvnuF+4owCujJalqTm7p84qoygFpVsgBll6RhQ2oj6PDwEH6ujAXBV1RP2eDOff0fv1fK/vu00lwZJ9gVF4KKvfiau1AqMj5suRDuhiFYEAkuy3YGq/aGe+JHz/cst4K8I+9XjWu+UtyHK/fP/ueh53uoLTfWO/KOV9ziCt2lyi6V7l0yFm1lvCPmeyVJTcY7+m/oJ37mh6EfRn4Y+1H8P98TaOyn+RI3ltwLnJEKlOUnZ0nekfczbtDZ0f7yQmDpHXmfN96z77089qcXh8Eszt1fj0pU9aO51xnhxXGH7jdVwe1SVaKAOxQr2HK73BuDDw+VhQteLu3r9UulDcE/f0Ftgf1rP5m5KtzbygfP90qtqs0nXnhHYRzuf7YQv5idUPMVwe0cpekM/hR6R0F3sLsgKyE6Q6LhkGg/xPI1GYvrjXfEkigKgjxKZs++FwdZEkVjsog6snCLwGWlNaei9oWfyBp4p4xtvRoulaBJErM=", "base64"));
  res.write(new Buffer("aJYHafzsexFj8YA46xOHA2JHekILpRuPOkU7RcRwxrKURYlDzBhLg29FfIeOEAGlJQMFCfgJrRogkukhplE+QLzCNYcPCi5QmuoBvhNjHkdpljjGMJzNZrMxRtZhPEUr+aZeg1sV+nCpLNxudL2+7W+cEBprJqneMGNJkjqfjYI0mLFvRb/kpB8QNqgRSECJVvlgSa/RNBcFGnggYzmaaSo9yfJ8lgfPvsdmaciyMfJg4Lt3vCQNdxofSbhwfbdUlXGJxE2TT5zgfDVJdbMgS7Ioc5YeRfEgXI1AnwvHrAkeOX5GWHPhUAuCghuLcs4RdqCp1GRwmuqOWMoYC11wStNwzM6jvAP+QVk4fySXOjZKP0drgFsD11sJp9XDFNXM0ixnae7UzNIgnYXfTMvB8N8rTo1X21rlhmCu1gQIpjIw1x+rIKBiqm7NwiQLWR2v0igci8hRNvDqU7RwS6jny7aCqDV+YOCM5DTVnAZZlEStmtPkW2HPm2DsNIsFSeu0LUEglBVqXmAdrmt/n66O8zBudTyWkkRpB/u+LvucYq+dXZ8pMuD8+2xLQkxXwUFrzKyv37QPOuuAHi8s6VdQbuD8ycVmLtFS4cMNmQ23BMda80eaZGJSo4ezVscsGENPBn78XlXSuvIcLvGR4ESrypVSF0rbJZy7smr35kJVuhO2cZrpWSOFMGykEIwaQDxczdSWXBraFBrctmvaDW7hWs4Jjl0HY7LQLE1r6DBnY9DdMvLYrDqVslPriwfcux7DrVWbqfKmecYa3mw2xtutsI5lA+dIfyMLKOH6abqA8awFDMcA2bAvQK7hcUIuAzE14pdRaUKQQeOqYdyHnPUhu5n1pHniuj6K0jDKR3jCbgp5SXC/VJ3giprgXLqAVHcEDkzdzmlc0g04RTtvWly/qUqW05VFnWg5WaRjsujmWWeqrFvWCBeEdT/1ws0V7lRJ7ud0WVnrrFE8xpp+qffTJRoycLdVcIMPD65QwqZLfotrl1GvqdG4Mw/ik5ZClLZr8qCxN5BCN/OqS8W2FwT3dXvX2fhbZ/8Ll31yV0k2rd0TsluqK8szVdarOMJ7JVe0m65E4v16EIxJZJiQnfCyJGPhVqBxXsANHIst7pqM5FpSs2lR932Ptzhd/jBrs5Kw3y5K+vzDVOwErRW03+5xpvGSnUw3YIdJ1rImY6zDRv6prneGrp9eGCfa2W4gg3ahG3QKBpBf6d378KvErQtuagFvrWkylcmCsmaXIg3DcAyUfWWT4pY/1Nt1B826NV3EKK8RWZKPIQZf06Wz0zNVNn+cKNT+a0ff2fEtWvXG4GTrpSR7gZ+NwLN8AH8hiJy73hMaEi8ue6kqM2nHTTLGWt7+6hT3eYctvv1G+mmTiLa/3qnHyebgSZpFLWk8Rpp+pZlZR1UHV+y3lqdL2WYWLAnHKGdfNDm0rE9ITJqtDTJssN8yYEu+HkmdIk9RSmXhspIWztS2STEbn50s9SwNW+p+ByfqU3dzpdeDJFfNQZL3ze44yub4ycSziWQWNekhY+kYcjdlct7p8uF37mTNpDs4SRwmLd2oQoctqqcDA33K7nbpZGmjrDXfQdd1QMv+PsA0y69rhMiDbptjyktVFDc6DvJRC+7mUK7id+uUQzuXtN41rZ1jd7brnTvlZtXkscM8brH70SfsYedfhtheFcCnXgUkYdvDCrJ8hDP76p6Zs+if6qN8bbLcHOm7UEKo7XSJWd4SxyPE6bCFg3CPYuXM+gXUXbcVCrGDczl3W0x1S/M/XIgJb6Qk+42UIAtGBDDMqxz1rSV3usVZ9Q0Z5c7oNmdbNDVXLw==", "base64"));
  res.write(new Buffer("UJbG79b5cM/tstC4PTw8nK5E2lQzSMdMIvm7fHq/oNfJ2MuJzb0QbvbD2kboXjAfp7soBHnWyoONyCP+O3m8Jzv59T1oe1nBrB/MWX9f5kvEA2f7G9ytSU6WLs5nrKULRuh6eVmvcGoCdr3uuX3iZp9murSsScyCQaXYpx3JyyZLltWxKg7CbJZ9I9oZJ1iiMaQX7ljWYi6EJbhC+8ewoVFQDzOKkwHme87ffM+z0kEWxGnSLL1R3AcMeoDd3VFJZqn+n8qydMByLPm6WsP7yqKm76exnCXh8/Pr/zTwrq+8578AAAD//wMAe+ONGSAzAAA=", "base64"));
  res.end();

  return __filename;
};
