# poketo-lib

[![Build Status](https://travis-ci.org/poketo/poketo.svg?branch=master)](https://travis-ci.org/poketo/poketo)

A Node library for fetching data from manga aggregator and scanlator sites.

:construction: This project is still `v0.x.x` and the API is subject to change, especially as more sites are added.

## Install

```bash
npm install poketo --save
```

You can also use this library on the client-side through the [poketo service](https://github.com/poketo/service), published at [api.poketo.site](https://api.poketo.site).

## Docs

### Supported Sites

| Site            | URL                       | Tracking | Reading       |
| --------------- | ------------------------- | -------- | ------------- |
| Helvetica Scans | http://helveticascans.com | ✓        | ✓             |
| Jaimini’s Box   | https://jaiminisbox.com   | ✓        | ✓             |
| MangaHere       | http://www.mangahere.cc   | ✓        | ✓ (very slow) |
| MangaUpdates    | http://mangaupdates.com   | ✓        |               |
| Mangadex        | https://mangadex.org      | ✓        | ✓             |
| Mangakakalot    | http://mangakakalot.com   | ✓        | ✓             |
| Manganelo       | http://manganelo.com      | ✓        | ✓             |
| Meraki Scans    | http://merakiscans.com    | ✓        | ✓             |

If there's a site / group you'd like to see supported, [make an issue!](https://github.com/poketo/lib/issues/new)

### API

```jsx
import poketo from 'poketo';
```

If you're using a bundler that doesn't support ES6 modules, you'll need to use the following

```jsx
const poketo = require('poketo').default;
```

#### `poketo.constructUrl(siteId: string, seriesSlug: ?string, chapterSlug: ?string): string`

Returns a site URL from the pieces passed in. Great for converting between series and chapter IDs to URLs to request.

```jsx
const url = poketo.constructUrl('meraki-scans', 'senryu-girl', '5');
// http://merakiscans.com/senryu-girl/5
```

#### `poketo.getSeries(url: string): Promise<Series>`

Get metadata about a series, including for individual chapters (but not pages within those chapters).

```jsx
const series = await poketo.getSeries('http://merakiscans.com/senryu-girl');

{
  id: "meraki-scans:senryu-girl",
  slug: "senryu-girl",
  url: "http://merakiscans.com/senryu-girl",
  title: "Senryu Girl",
  chapters: [
    {
      id: "meraki-scans:senryu-girl:1",
      slug: "1",
      number: 1,
      createdAt: 1522811950
    },
    // 24 more...
  ],
  updatedAt: 1522811950,
}
```

#### `poketo.getChapter(url: string): Promise<Chapter>`

Get page data for a given chapter. Unlike `poketo.getSeries`, this method does not include much metadata.

```jsx
const chapter = await poketo.getChapter('http://merakiscans.com/senryu-girl/5');

{
  id: "meraki-scans:senryu-girl:1",
  slug: "1",
  url: "http://merakiscans.com/senryu-girl/5",
  pages: [
    { id: '01', url: 'http://…/image01.png', width: 800, height: 1200 },
    { id: '02', url: 'http://…/image02.png', width: 800, height: 1200 },
    // etc...
  ]
}
```

### Motivation

People should be able to read content on the web in the way that works for them. Manga reader sites are a special brand of bad. Each page in a chapter is a new page load, ads everywhere, yuck!

The Poketo Node library wraps scraping logic across a number of sites to make it easy to fetch data about and read series how you'd like.

## License

MIT
