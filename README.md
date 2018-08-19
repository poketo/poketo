# poketo-node

[![Build Status](https://badgen.net/travis/poketo/node)](https://travis-ci.org/poketo/node)
[![Coverage](https://badgen.net/coveralls/c/github/poketo/node)](https://coveralls.io/github/poketo/node)
[![npm](https://badgen.now.sh/npm/v/poketo)](https://www.npmjs.com/package/poketo)

Node library for scraping manga sites.

People should be able to read content on the web in the way that works for them. Manga sites are often a special brand of bad. Each page is a new page load, ads everywhere, yuck!

This library wraps scraping logic for 16+ sites, providing open access to their content, and an easy way to build readers, downloaders, and more.

For a working example, check out the [Poketo manga reader](https://poketo.app)!

> :construction: This project is still `v0.x.x` and the API may change as more sites are added.

## Install

```bash
npm install poketo --save
```

You can also use [api.poketo.app](https://api.poketo.app), a hosted micro-service for this library.

## Usage

```js
import poketo from 'poketo';

poketo.getSeries('http://merakiscans.com/senryu-girl/').then(series => {
  console.log(series);
  //=> { id: 'meraki-scans:senryu-girl', title: 'Senryu Girl', chapters: [...], ... }
});

poketo.getChapter('http://merakiscans.com/senryu-girl/5/').then(chapter => {
  console.log(chapter);
  //=> { id: 'meraki-scans:senryu-girl:5', pages: [...], ... }
});
```

Full documentation of the [API can be found below](#api).

## Supported Sites

| Site                                                | Series Info | Chapter Images |
| --------------------------------------------------- | ----------- | -------------- |
| [Helvetica Scans](http://helveticascans.com)        | ✓           | ✓              |
| [Hot Chocolate Scans](http://hotchocolatescans.com) | ✓           | ✓              |
| [Jaimini’s Box](https://jaiminisbox.com)            | ✓           | ✓              |
| [Kirei Cake](https://kireicake.com)                 | ✓           | ✓              |
| [MangaHere](http://www.mangahere.cc)                | ✓           | ✓ (slow)       |
| [MangaUpdates](http://mangaupdates.com)             | ✓           |                |
| [Mangadex](https://mangadex.org)                    | ✓           | ✓              |
| [Mangakakalot](http://mangakakalot.com)             | ✓           | ✓              |
| [Manganelo](http://manganelo.com)                   | ✓           | ✓              |
| [MangaRock](https://mangarock.com)                  | ✓           | ✓              |
| [MangaStream](https://readms.net)                   | ✓           | ✓              |
| [Meraki Scans](http://merakiscans.com)              | ✓           | ✓              |
| [Phoenix Serenade](https://serenade.moe)            | ✓           | ✓              |
| [Sense Scans](https://sensescans.com)               | ✓           | ✓              |
| [Sen Manga](https://raw.senmanga.com)               | ✓           | ✓              |
| [Silent Sky Scans](http://www.silentsky-scans.net)  | ✓           | ✓              |
| [Tuki Scans](https://tukimoop.pw)                   | ✓           | ✓              |

If there's a site or group you'd like to see supported, [make an issue!](https://github.com/poketo/node/issues/new)

## API

Poketo exposes four methods:

```jsx
poketo.getSeries(idOrUrl: string): Promise<Series>
poketo.getChapter(idOrUrl: string): Promise<Chapter>
poketo.getType(input: string): 'series' | 'chapter'
poketo.constructUrl(id: string): string
```

To understand what is returned for a `Series` or `Chapter`, check out the examples below.

## Docs

* [Get series information](#get-series-information)
* [Get pages for a chapter](#get-pages-for-a-chapter)
* [Validate a URL or ID](#validate-a-url-or-id)
* [Convert an ID to a URL](#get-a-url-from-a-poketo-id)
* [Difference between an ID vs. URL](#whats-the-difference-between-an-id-and-a-url)
* [Error Handling](#error-handling)

### Get series information

Use `poketo.getSeries` to get the ID, title, cover image, and chapter listing for a manga series.

```js
poketo.getSeries('http://merakiscans.com/senryu-girl').then(series => {
  console.log(series);
});

// {
//   id: 'meraki-scans:senryu-girl',
//   slug: 'senryu-girl',
//   url: 'http://merakiscans.com/senryu-girl',
//   title: 'Senryu Girl',
//   coverImageUrl: 'http://merakiscans.com/.../senryu_200x0.jpg',
//   chapters: [
//     {
//       id: 'meraki-scans:senryu-girl:1',
//       slug: '1',
//       chapterNumber: '1',
//       volumeNumber: '1',
//       title: '5-7-5 Girl',
//       createdAt: 1522811950
//     },
//     ...
//   ],
//   updatedAt: 1522811950,
// }
```

### Get pages for a chapter

Use `poketo.getChapter` to get a page listing for a chapter. This doesn't include any information about the chapter or series, just the page list.

Depending on the site, the page list will also include image dimensions.

```js
poketo.getChapter('http://merakiscans.com/senryu-girl/5').then(chapter => {
  console.log(chapter);
});

// {
//  id: 'meraki-scans:senryu-girl:5',
//  slug: '1',
//  url: 'http://merakiscans.com/senryu-girl/5',
//  pages: [
//    { id: '01', url: 'http://merakiscans.com/image01.png', width: 800, height: 1200 },
//    { id: '02', url: 'http://merakiscans.com/image02.png', width: 800, height: 1200 },
//    ...
//  ]
// }
```

### Validate a URL or ID

If you have an arbitrary input, you can see if Poketo recognizes it by calling the `poketo.getType` method. It will return `'series'` or `'chapter'` if it's supported, or will throw [a Poketo error](#error-handling) if not.

```js
poketo.getType('http://merakiscans.com/senryu-girl');
//=> 'series'
poketo.getType('http://merakiscans.com/senryu-girl/5');
//=> 'chapter'
poketo.getType('http://merakiscans.com/i/am/a/banana/yo');
//=> throws a `poketo.InvalidUrlError`
poketo.getType('http://google.com');
//=> throws a `poketo.UnsupportedSiteError`
```

### Get a URL from a Poketo ID

If you've stored a Poketo ID, you can get a URL back out by using the `poketo.constructUrl` method. You can learn more about [the difference between IDs and URLs](#whats-the-difference-between-an-id-and-a-url).

```js
poketo.constructUrl('meraki-scans:senryu-girl:5');
//=> http://merakiscans.com/senryu-girl/5

poketo.constructUrl('manga-stream:haikyuu:314/5286');
//=> https://readms.net/r/haikyuu/314/5286/1
```

### What's the difference between an ID and a URL?

Poketo scrapes information from many sites. To identify which _site_, _series_ (aka. manga), and _chapter_ you're talking about, Poketo lets you provide information in two ways: a Poketo ID or a URL.

These IDs below are equivalent to the URLs on their right:

```
ID                                URL
mangadex:13127:311433          →  https://mangadex.org/chapter/311433/1
meraki-scans:senryu-girl:5     →  http://merakiscans.com/senryu-girl/5
manga-stream:haikyuu:314/5286  →  https://readms.net/r/haikyuu/314/5286/1
```

For the `getSeries` and `getChapter` methods, you can provide either a URL, or an ID, like so:

```jsx
// Both lines return the same series
poketo.getSeries('http://merakiscans.com/senryu-girl/');
poketo.getSeries('meraki-scans:senryu-girl');

// Both lines return the same chapter
poketo.getChapter('https://mangadex.org/chapter/311433/1');
poketo.getChapter('mangadex:13127:311433');
```

#### Why use an ID?

Poketo IDs have stronger guarantees they won't change.

It's not uncommon for a site to change their domain name or URL structure. If that happens, the URL might break, but Poketo will know to do the right thing with an ID. This makes IDs a better way to store information about a series.

Of course, there are no true guarantees with scraping. Even an ID that works one day might break the next — but it's a _slightly_ better guarantee.

### Error Handling

Scraping isn't a perfect. When using Poketo you'll inevitably run into an error, so we try to make what happened as clear as possible.

* `RequestError` - unable to make a request to scrape the site
* `TimeoutError` - tried to make a request, but the source site didn't respond in a reasonable time. Defaults to 5 seconds.
* `HTTPError` - tried to scrape the source site, but the site returned an error (eg. 404, 500)
* `UnsupportedSiteError` - the site you're trying to scrape from isn't supported. If you'd like to see it supported, [make an issue!](https://github.com/poketo/node/issues/new)
* `UnsupportedOperationError` - some sites don't support reading chapters. This error is thrown if you call `poketo.getChapter` for these sites.

## Contributing

Contributions are welcome! Poketo is meant to be built on, so feel free to propose ideas or changes that would make it work for your situation — whether it's a bug report, site request, or contributed code.

## License

[MIT](https://github.com/poketo/node/blob/master/LICENSE.md)
