# poketo-node

[![Build Status](https://travis-ci.org/poketo/node.svg?branch=master)](https://travis-ci.org/poketo/node)
[![npm](https://img.shields.io/npm/v/poketo.svg)](https://www.npmjs.com/package/poketo)

A Node library for scraping manga aggregator and scanlator sites. Makes it easy to build applications on top of other sites.

:construction: This project is `v0.x.x` and the API is subject to change as more sites are added.

## Install

```bash
npm install poketo --save
```

You can also use [api.poketo.app](https://api.poketo.app), a hosted micro-service for this library. See the [poketo service repo](https://github.com/poketo/service) for more.

## Usage

```js
import poketo from 'poketo';

const series = await poketo.getSeries('http://merakiscans.com/senryu-girl/');
const chapter = await poketo.getChapter('http://merakiscans.com/senryu-girl/5/');

console.log(series);
// { id: 'meraki-scans:senryu-girl', title: 'Senryu Girl', chapters: [...], ... }
console.log(chapter);
// { id: 'meraki-scans:senryu-girl:5', pages: [...], ... }
```

## Docs

### Supported Sites

| Site                | URL                            | Tracking | Reading       |
| ------------------- | ------------------------------ | -------- | ------------- |
| Helvetica Scans     | http://helveticascans.com      | ✓        | ✓             |
| Hot Chocolate Scans | http://hotchocolatescans.com   | ✓        | ✓             |
| Jaimini’s Box       | https://jaiminisbox.com        | ✓        | ✓             |
| Kirei Cake          | https://kireicake.com          | ✓        | ✓             |
| MangaHere           | http://www.mangahere.cc        | ✓        | ✓ (very slow) |
| MangaUpdates        | http://mangaupdates.com        | ✓        |               |
| Mangadex            | https://mangadex.org           | ✓        | ✓             |
| Mangakakalot        | http://mangakakalot.com        | ✓        | ✓             |
| Manganelo           | http://manganelo.com           | ✓        | ✓             |
| MangaStream         | https://readms.net             | ✓        | ✓             |
| Meraki Scans        | http://merakiscans.com         | ✓        | ✓             |
| Phoenix Serenade    | https://serenade.moe           | ✓        | ✓             |
| Sense Scans         | https://sensescans.com/        | ✓        | ✓             |
| Silent Sky Scans    | http://www.silentsky-scans.net | ✓        | ✓             |
| Tuki Scans          | https://tukimoop.pw            | ✓        | ✓             |

If there's a site / group you'd like to see supported, [make an issue!](https://github.com/poketo/node/issues/new)

### API

#### `poketo.getSeries(url: string): Promise<Series>`

Get metadata about a series, including for individual chapters (but not pages within those chapters).

```js
const series = await poketo.getSeries('http://merakiscans.com/senryu-girl');
console.log(series);

// {
//   id: 'meraki-scans:senryu-girl',
//   slug: 'senryu-girl',
//   url: 'http://merakiscans.com/senryu-girl',
//   title: 'Senryu Girl',
//   chapters: [
//     {
//       id: 'meraki-scans:senryu-girl:1',
//       slug: '1',
//       number: 1,
//       createdAt: 1522811950
//     },
//     ...
//   ],
//   updatedAt: 1522811950,
// }
```

#### `poketo.getChapter(url: string): Promise<Chapter>`

Get page data for a given chapter. Unlike `poketo.getSeries`, this method does not include much metadata.

```js
const chapter = await poketo.getChapter('http://merakiscans.com/senryu-girl/5');
console.log(chapter);
// {
//  id: 'meraki-scans:senryu-girl:1',
//  slug: '1',
//  url: 'http://merakiscans.com/senryu-girl/5',
//  pages: [
//    { id: '01', url: 'http://merakiscans.com/image01.png', width: 800, height: 1200 },
//    { id: '02', url: 'http://merakiscans.com/image02.png', width: 800, height: 1200 },
//    ...
//  ]
// }
```

#### `poketo.constructUrl(siteId: string, seriesSlug: ?string, chapterSlug: ?string): string`

Returns a site URL from the pieces passed in. Used to convert between IDs (eg. `meraki-scans:senryu-girl:5`) and URLs (`http://merakiscans.com/senryu-girl/5`). Find a full list of site IDs from the [adapter folder](https://github.com/poketo/node/tree/master/src/adapters)

```js
const url = poketo.constructUrl('meraki-scans', 'senryu-girl', '5');
// http://merakiscans.com/senryu-girl/5
```

### Motivation

People should be able to read content on the web in the way that works for them. Manga reader sites are a special brand of bad. Each page in a chapter is a new page load, ads everywhere, yuck!

The Poketo Node library wraps scraping logic across a number of sites to make it easy to fetch data about and read series how you'd like.

## License

MIT
