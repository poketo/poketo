// @flow

const supportedDomains = [
  'helveticascans.com/r',
  'hotchocolatescans.com/fs',
  'jaiminisbox.com/reader',
  'reader.kireicake.com',
  'mangahere.co',
  'mangahere.cc',
  'readms.net',
  'mangaupdates.com',
  'mangadex.org',
  'mangakakalot.com',
  'manganelo.com',
  'merakiscans.com',
  'reader.serenade.moe',
  'sensescans.com/reader',
  'reader.silentsky-scans.net',
  'reader.tukimoop.pw',
];

export default function isSupportedUrl(url: string): boolean {
  return supportedDomains.some(str => url.indexOf(str) !== -1);
}
