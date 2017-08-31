# Pickles [![Build Status](https://travis-ci.org/mismith0227/hugo_theme_pickles.svg?branch=master)](https://travis-ci.org/mismith0227/hugo_theme_pickles) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/mismith0227/hugo_theme_pickles/blob/master/license.md) [![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Pickles is a modern, simple and beautiful Hugo theme.

![screenshot](https://github.com/mismith0227/hugo_theme_pickles/blob/master/images/screenshot.png)

## Overview

* Modern, Simple and beautiful design
* Medium's Image Zoom（[zoom.js](https://github.com/fat/zoom.js/))
* Social links（Twitter,Facebook,Instagram,Google+,GitHub,npm,Codepen,Dribbble,500px,Flickr,Pinterest,Tumblr,Vimeo,YouTube,Linkedin）
* Support for tags
* Analytics with Google Analytics
* Responsive design
* SVG Sprite

## Features

* gulp
* webpack
* PostCSS
* Babel
* SVG Sprite
* Standard

## Installation

In your hugo site directory, run:

```shell
$ mkdir themes
$ cd themes
$ git clone -b release https://github.com/mismith0227/hugo_theme_pickles
```

Or download it from the release branch

[release](https://github.com/mismith0227/hugo_theme_pickles/tree/release)

## Usage

Use hugo's -t hugo_theme_pickles or --theme=hugo_theme_pickles option with hugo commands. Example:

```shell
$ hugo server -t hugo_theme_pickles -w -D
```

## Configuration

You may specify following options in `config.toml` of your site to make use of
this theme's features.

Please see the sample config.toml under the exampleSite directory.

```toml
baseurl = "Your site URL"
languageCode = "en-us"
Title = "Your site title"
# Copyright notice. This is displayer in the footer.
copyright = "&copy; Copyright notice"

[params]
  paginate = 10
  # Social accounts. Link to these accounts are displayed in the header and
  # footer
  twitter = "Your Twitter username"
  facebook = "Your Facebook username"
  instagram = "Your Instagram username"
  googleplus = "Your Google+ user id"
  github = "Your GitHub username"
  npm = "Your npm username"
  codepen = "Your CodePen username"
  dribbble = "Your Dribbble username"
  fivehundredpx = "Your 500px username" # 500px
  flickr = "Your Flickr username"
  pinterest = "Your Pinterest username"
  tumblr = "Your Tumblr username"
  vimeo = "Your Vimeo username"
  youtube = "Your YouTube username"
  linkedin = "Your LinkedIn username"
  # Disqus shortname
  disqus = ""
  # Google Analytics API key.
  ga_api_key = "Your Google Analytics tracking id"
  author = "Your Name"
  authorwebsite = "example.com"
  avatar = "/path/to/avatar"
  contact = "Your contact link (ex. mailto:foo@example.com)"
  bio = "Your short bio"
  # Short subtitle/tagline. This is displayed in the header.
  subtitle = "Short subtitle"
  # Logo image. This is displayed ogp image.
  logo = "/path/to/logo"
  favicon = "/path/to/favicon"
```

## Contributing

Pull requests, bug fixes and new features are welcome!

Please create feature branches from [develop](https://github.com/mismith0227/hugo_theme_pickles/tree/develop) and submit a PR for any change.

## Development

1. Install Node modules

        $ yarn

1. Run gulp. You don't need to install gulp globally.

        // Development
        $ yarn run dev
        $ // On another tab
        $ hugo server

        // Production (compress)
        $ yarn run prod
        $ // On another tab
        $ hugo server

        // Build
        $ yarn run build

## License

Open sourced under the MIT license.
