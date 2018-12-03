// @flow

const supportedDomains = [
  'helveticascans.com',
  'hotchocolatescans.com',
  'fanfox.net',
  'jaiminisbox.com',
  'reader.kireicake.com',
  'mangahere.co',
  'mangahere.cc',
  'readms.net',
  'mangaupdates.com',
  'mangadex.org',
  'mangakakalot.com',
  'manganelo.com',
  'mangarock.com',
  'readms.net',
  'merakiscans.com',
  'reader.serenade.moe',
  'raw.senmanga.com',
  'sensescans.com',
  'reader.silentsky-scans.net',
  'reader.tukimoop.pw',
];

export default function isSupportedUrl(url: string): boolean {
  return supportedDomains.some(str => url.indexOf(str) !== -1);
}
