var path = require("path");

/**
 * GET /r/a_trail_of_blood/15/4622/25
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
  res.setHeader("set-cookie", ["__cfduid=d5c1dbc9b8cdd49de132f51a844681dc51535939357; expires=Tue, 03-Sep-19 01:49:17 GMT; path=/; domain=.readms.net; HttpOnly"]);
  res.setHeader("last-modified", "Thu, 12 Oct 2017 16:46:08 GMT");
  res.setHeader("expires", "Mon, 03 Sep 2018 02:49:17 GMT");
  res.setHeader("cache-control", "max-age=3600");
  res.setHeader("vary", "Accept-Encoding, User-Agent");
  res.setHeader("expect-ct", "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"");
  res.setHeader("server", "cloudflare");
  res.setHeader("cf-ray", "45448f18b91a93a8-SJC");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAA+w8aXPjNrLf/St6mFQsVUxRki0fY0upuZKZ2mQyWTtTL5vaUkFkU4QFAgwAStZu5b+/al6iTluTcdZvXzRVYxIE+kaj0Wjy6tnrH1/d/PLhDUQ2FoODK/oDgslx30HpUAOyYHAAAHAVo2XgR0wbtH0ntaF77hSPLLcCBy/gRjMuQIXwUigVQKcHLnxgY4QuXf3A5JjBtdXI4isvH1MDLVmMfWfKcZYobR3wlbQobd+Z8cBG/QCn3Ec3uzkCLrnlTLjGZwL7nVbbWQcVoPE1TyxXsgbt78gCCDUixBk9SgouEQSfILxnOrXqCF4KZH50BD9KhA8cfTyCt6m0qOGuvGAyIABziJXGVoldcDmBSGPYdyJrE/Pc82J25weyNVLKGqtZQje+ir1QSeuyGRoVo3fSOmu1Pd+YpeZWzGXLN8YBjaLvGDsXaCJE6wCXFsea23nfMRE7Pj9xZ9Pwf5Lfkn/84+NP3/3t9OZF1PvwUXz3Y/jT+7fX6nX3bvTm658mH+5evfhWvH+DU/Xm7fG1aBs++uj/+NNH+d4BXytjlOZjLvsOk0rOY5UaZ3BQ4y0jhPsk0ZxNL2RTum9xXzlg5wn2HR6zMXp3bt7PG6yON5HS1k8t7A0og1T+6tL2mDFoTSbCTK8mMzOS3jcXF8fnnYtu++Sisy7JnLicwmeuC29vfvi+Bybi8RGESsO7N6fuOZg0IaMk0847oMAYpTXguoNq8K88BGHh3Ru4+GfRmlsgGO0vaLw1Hs2znon4tHVrnMGVl3crIf2KMuDhPwn0EpRcKBbvrHfLpixvLTig34zLQM1afpzcRBgj9OHfSwIbMX8y1iqVwXM4/CI8pn+HR0tdEs1jpuf0/Pj87ML3Nz+/wTubwQjDlQ4GfSWDAkSv19v2uITgr6Eg/r7nckJPz87OVp4GfMoD1OXQ6tnvuaQqSS5bSl0N5cQ0LcmtVgmbZ/ORBcY9bt2ab6b9007H2SbsFV15uYM8uBo=", "base64"));
  res.write(new Buffer("qWBOfwM+BR70HY0sQO1KNi19Az3xBTOm70g2HTEN+R83wJClwpa3+ciaWtdHulG9z9UotVbJguL8xlkZYNV4LBB8JQRLDAYOBMyyornvlO1lM9NjcvJfxMbNATjANGcu3iVMBhj0nZAJg3UiTcJkidRoV0kxdwY3OVrJpnzMyBFfedRvyzCa5i4hGzxetysvF1Bxx1bkNNJMBpVLoqFscHDlBXxaKrfoX0qs1NpCgqT9hdwKPKmoISrHLIyjcGeDK7ZA/VbFSOivPMGXepWQAq2SQM1kDUbBUw7jC2e1Z6HvFeUv4GRrY75MX40qTpnGzPBHuTSWcC34qnDEKNMVktbZy3y0x6xl/mSo5NByy6QzeJE1gJJwQw3r7O+CNkJtUE+cwcv8Yr/RgWZjJYcjJsTQpAnNrtdZE7xkQsA1Ne0HMWJ8Mk9TZ/A2v3j2bN/xtzzGoVRDniSKwNA9SAXvkkTtByueDyPUash8FmDMmTP4YQ5vUSt4UbTsB09JHCYUGTmDKkjaG0KSSj8axqT4DAjdkvntB0jiFLWgaTv4oFXMDQbwvmzbD5SJ1CQd44ST0I1KY+YMrss2Evw1te0H00Y4NDhFOQyQBWI+NFwaZ3ATIVxTM7zOmuGaS7MnZDWZq+E4UqnQSL52MlfwHd0+17uVUc3ZfDF1Ho7UGXybCgHfc2M3Y7jyUlHzVqu+qwaviMg9liSC+9nqQB7I1ym3FFtt9H0bxvtKKO0MXtGfbLexIsYFRVu9cLX08nFkt7rkIgjM5FWJMGQQMndkfRIiH8BrJZnd7bdZaiN3nKKxK444VgETq0uwUGMu3fzRgphFSPL80hl8T30+I06NY24s6nvQ/r3o9qBVCjIS6D+UlvSNwfrCVYyBtQWrWtG2rFxLK/8wNahpD1gt/Y+9nBm0lsuxcQbXxdUDp/KSQEvcQo1VajO1qvTT5tmS3qeoecg3yXsHEVJZHhbzslTDBmZWJwIK4SpYGkxtRfwY8SBA2XesTjGfMOsQMd5Igq9SmekN41VJsE2CyAWUh27Zzs5rSTat4rTFxi0P7jbFeDHj0qXAnjIhtXaTjjbH9fkDd6ZZkmwN4clvaSXMqjZqXUZWurRRS4Cuiq2EH7HELkFdnzgjK7Mh5ZbigYFfNb3WYa+F1bkK3TsDxZWJnbXUTzntOr174VXzcTmU36jdT5in+/6W57X22NASZ0MVDkfEmXd84vW6Z+deZ8XpVHJxBscn4MKLEZNBteFZ6jrlho8EFn3LHlsdxuf83c/esdfr9no72TsGF95BoOShBYkYwFyl9/J5/MT47Hq9brezk88uuPBRcR+BS7ARgo24P0F7L6/dJ8Zrx+t1zro7ee2QyWpF0e09zHWeGHNtr9fp7VZkmwxWBpigDFDSTuUeHttPi8fuhdfrdHZOyu4FKTCk1PS1Hykl4EWgBBqf+P3mPoa7F0+M4XOv1z7d6WS758QwGC4pw2QsJvcyef7EmDzzeu1eeyeTZ+DCa6X0vbydPTHeTr1eu7vT5XRPwYWXKP3oXuZOnxhzPa/Xbp/uZI4OvF5pTjsdAR80GpPqe/1Ot/cojD58xw/bEnUrIrg3DQBrWxRYxNpLTfeFvQkb44Ni3uJo4jPFvOWx5SYBPeHw9dFsvtPzTk7zCf0t18bmAmp0mn/OnPzr99fvv/H34HnXbTuD3Ce1/9wZ93AKOyWFnadKYbeksPtUKTwuKTx+qhSelBSePFUKeyWFvadK4akz+J5Va2j3dM9F9N7AavV2EW9QNKV3xBm1UDHROOVZAdCDDeMrwbS+pHB3ur/oa6gl3lnn4bJ8j3cWvtKEew==", "base64"));
  res.write(new Buffer("N9raUdBy1hdWItHYMIgNc8+658OLdnmmz8qYlNmQQr5KyJRf3gTDrR0ZVQS9ZRaBBQZGqQVjuRAwY9KCVRChSCA138BL9FWMwGDj6VN1Sdw+O1jReFY2VCdEq5kbipQHQNrPstMbctdb4myoHxTcp4grHo9zWdGuIQ/doSh+8ng8bi2VZqnY8wNZ7DA6Jxfl9G0lckzVXkux82bCNqjsuN0enrbXdWZ4gEtKW5ksGw8AtphBqBSdjo1qZnCwrdRrlHIRrJR53VfQ9WXD+aImwmZLSWw4QrHAOYIwlT6diDSaRXnXlGlQYWjQQh++bBzWhh42W/mTRrMlMLTw9XqHrKKy0YSvodO+PPi92aLax8YaFh42bMQNqS0RaLEJX2YNzRbR1WjS0MuDgy8beRVas6XR8H9hYyO5s02UFoRcfn6mVvG2yjOYVawrz5i1unGYVQseHh3GTNNRLKF87h5+3Zh53ebXh8ndYck76a1VHA41WwmXEoNGzvSIqu7MczhpH4HnwSxCSRN+lM9zY7k/mWcdja+VEFyOn0PeNVGGk/wgSDWX46JD1jdWIy7wOWS1WNTX0OF/UFUr5s9z2mqVcUsWTge8ELIAHbBsxGWAd33HpUJJlW2XORNqnFv+0kn0urujdrfsX4xWfkpH+VtOwvIhxTn+juOwvF+0WhdXdd1V/+YLVZW1BdzEvAJYHEkKNqKS0FdZvyI1s+Gs8ivLYzSXVX6mXkW2REx0skx2VuecneVS0a7Ky6vyImhgfnaqeeVFJ3slSnLIxcnkGgVJVQEnQ7XFpb/ODm8iNkUgfnM6YI72m23HwgsLsMotCwScwSuNtJ4pmdU8gFSzI+D20OQl1lQl/VvK/cmzDZmRZKVKM2sNlY5r5+BcutTigFRTJnjALNK5cHm9bcGqyYqG51mlnWEPWQEV/PYdjBkXzuAN/bnysgc7BnKZpKUjz0cuIS6cSV18Ra9EMB8jJQLUfecXlWoohYoBZH2ABQElDqlo+beUU7u3g5J6VqrApLXSa6jdEpozyNDmuLipsBxBIpAZhJBiE0XsRdxAyFEErW2Jri1W+1k0kjBjZkpTgVdxtZ9eqvH3qWbRcUk7H6rmz6WIElFNFyWSz6mJe1WxzU6yhqxGLbMOr6SXTnoBZW6kgUJDXiRm1o+AybmNaIHiEnJr9pUOzBH4EfoTGqghQMu4MK2d5C15c5OOYm6dLfUNdZpHVpZeduGdd4ezOxxcqPRYWWfwDvIriOeQVMa3KafrkVFt9OJb3TjeWapTEjvT22OlxgJdwag6MqdypWlTadZqXU4+pKhR+y672cwGW4zzcaTUZC805aAC0bfF7T2o7Ixbiqf3wVSMKRDd5HfrBV1b98XLUf+nhkSrhXJ/RUX7RUUvisAjryTUxSsCf3o09AObkOeqRUJKLgVq5HQpYUPxDDIzb0G2dJa9BVqTuUZfxaRZGq4xc90GvmJxcgkSZ+ZoI3KCmY1lkgL4We4qyxh+NAeTjmgejIjEBgvcLLKqUfes2YIXgra589WIbmc0VxmvVW7m+JxBsdyIzI1mh1fApbHIgtZDA7jFCzAF9B1ejn6/qBSYRmCjbH1TkL3VxWil05Sx0HYORvmcCYgx4KwSulXASKybIuoW/Ch9JEluxBmzCWYFPUX3o0oBqcFC/ltQFqIhqTBpxbwsDQpTm2pswbtwK1a2pKNNZB+V4MkmMjkQ6I2khFrFBaVFxekmDW1eZpeC7EpPf3acvSjS/bm42i+qo7TJloguZncC5dhGfad7nht7hW05tHuNJovnysfQSNKR4L6YA72JykYCm58Q9i2MfxFalQ==", "base64"));
  res.write(new Buffer("KNxU8t/Ied5EzC4Qc1MZiGUTlC34kE9GquYxZAUx5gFWwMMQNUq7MwTcj6ZFHPpzjaA/HIfuR8TY1owB4tRYGCEw8q/kfI+zt4+Zb1EbEEqOPyNqsYTaZ1KqDDm93Qs2YhK654+InokkYjKNl2mgd5Pn2ZvLjHxC0Qc19+ukNJj7r8xhtN2L5n9kf/Z4O+ZNe+WP5JM+aYdchQKUZ3dHQvkTKl2e1gDWjB4ac5UeCkFmYGhRZ5AX0ucF6Zl/Jnknf8AA8g35kkOo6Ci9ATPZAmAxgBm3EbCFA6iWuz9siauZga1S+f+YHPj8aYFNKnjsnMB+RGS+uMK/5ov3c4aPrfuhr2RYI/eVkiHXcbGdeCRryJFuNglosDHjsvm5TSPmJsu25LmZstmspGWqpMyn54j2TsJUZGd5mCIr/KLMb2/dF27Pmjzanj1P6Py1Y/9jO3ZK701Rz/8Du/V8i7VjG5WdrNPiPcUifWdR5pulcspUXjSbNfmzfK0boVCzrRv1GVJEYLDYs1NQnu0FdZodchraIhaiAW5bn3LqUdjnf8+xR8HQn3HuUaJauM468kc/+fhMvrSgOfOkL3HMZW22PUFPalLfR2P+8qj/Zz3qd7RcPyPHahdbkCyCQLM9K3oEeJegbwufhzzzxzEaQ2VtWYIqNUV+bCNaKvOCEGcQc5laNPn+Jky1jch91tzqFkf6KcZOLbXv9Cy9Y2wiFqhZVdOzudNI3W2p+im/LMQSblr5iUtW5XRrqOm5LzglbTaWAuV0FR9wCkcvzFz67ySn4pe1Ahr6ffuyRZ9Aayx/4Iklybsgv3wOh53zs9OT3tnFce+s3Tvpnax8SclXasKx6EymvPz4LhzFArY+nqI2tAvOUU27rfPat5iKaprf8z+LEqDgCMwR8KC5IJuqcm7NEYS3BvoQtMZo3xTf1no5v2Hj9yzGhmn+2v7nZTWGh9Co93w5fxc0eNBswr812lTLy9+rvgVYPwtIi/4N07yEW9PiAfSBB5e1zi2jfehDpUpfSYm+bZUHWy2J1kM5/PnaM8GEdLkYHd6aVsJoX/5eBdji0qC2LzFUGhsFi6VgGqX/O4LD3AAOj+CwOnK7NSaYHDablwfrNWOr9WVTlIHS9OGq+nfOBvcPZEnygFG7vjlGEGgTxKmwj8thqgX04dA7vFx9nNfg7ejAEl4+rc2itXrB9YHcDPMyJ5opVAe16JEjzefJ4e7SVZL+7uJGKvIqSsRK3TUzDPPKvGFphlIp2cqrSIfNqqUsOPt9SceLIkQv/57YlZd/mPF/AQAA//8DAGmWaTSpUQAA", "base64"));
  res.end();

  return __filename;
};
