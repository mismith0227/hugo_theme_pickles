# Pickles ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/mismith0227/hugo_theme_pickles/create%20new%20branch?style=flat-square) ![GitHub](https://img.shields.io/github/license/mismith0227/hugo_theme_pickles?style=flat-square) [![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Pickles is a modern, simple and beautiful Hugo theme.

![screenshot](https://github.com/mismith0227/hugo_theme_pickles/blob/master/images/screenshot.png)

## Overview

- Modern, Simple and beautiful design
- Medium's Image Zoom（[zooming](https://desmonding.me/zooming/docs/#/))
- Social links（Twitter,Facebook,Instagram,Google+,GitHub,GitLab,npm,Codepen,Dribbble,500px,Flickr,Pinterest,Tumblr,Vimeo,YouTube,Linkedin）
- Support for Related Content
- Support for tags
- Analytics with Google Analytics
- Responsive design
- SVG Sprite

There is a custom shortcode for Image Zoom. You can use it like so:

```
{{< zoom-img src="/images/default.jpg" >}}
```

## Features

- gulp
- webpack
- Sass
- Babel
- SVG Sprite
- Standard

## Installation

In your Hugo site directory, run:

```shell
$ mkdir themes
$ cd themes
$ git clone -b release https://github.com/mismith0227/hugo_theme_pickles
```

Or download it from the release branch:

[release](https://github.com/mismith0227/hugo_theme_pickles/tree/release)

## Usage

Use Hugo's `-t hugo_theme_pickles` or `--theme=hugo_theme_pickles option` with hugo commands. For example:

```shell
$ hugo server -t hugo_theme_pickles -w -D
```

## Configuration

You may specify the following options in `config.toml` of your site to make use of
this theme's features.

For getting started with Pickles, copy the [config.toml](https://github.com/mismith0227/hugo_theme_pickles/blob/master/exampleSite/config.toml) file from the exampleSite directory inside Pickles’s repository to your site repository.

```shell
$ cp themes/hugo_theme_pickles/exampleSite/config.toml .
```

Now, you can start editing this file and add your own information!

## Customisation

To hide the date in a post, set the `hideDate` parameter in the front matter:

```markdown
---
hideDate: true
---
```

You can use `hideWordCount` and `headReadingTime` to hide word count and reading time on both, the posts and the post list.

```markdown
---
hideWordCount: true
hideReadingTime: true
---
```

## Contributing

Pull requests, bug fixes and new features are welcome!

Please create feature branches from [develop](https://github.com/mismith0227/hugo_theme_pickles/tree/develop) and submit a PR for any change.

## Development

1.  Install Node modules

```sh
yarn
```

1.  Run gulp. You don't need to install gulp globally.

```js
// Development
yarn run dev
// On another tab
yarn run hugo

// Production (compress)
yarn run prod
// On another tab
yarn run hugo

// Build
yarn run build
```

## License

Open sourced under the MIT license.
