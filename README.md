# Pickles [![Build Status](https://travis-ci.org/mismith0227/hugo_theme_pickles.svg?branch=master)](https://travis-ci.org/mismith0227/hugo_theme_pickles) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/mismith0227/hugo_theme_pickles/blob/master/license.md) [![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Pickles is a modern, simple and beautiful Hugo theme.

## Overview

* Simple and beautiful theme.

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
$ git clone -b release https://github.com:mismith0227/hugo_theme_pickles.git
```

## Usage

Use hugo's -t hugo_theme_pickles or --theme=hugo_theme_pickles option with hugo commands. Example:


```shell
$ hugo server -t hugo_theme_pickles -w -D
```

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

## Version

2.0

## License

Open sourced under the MIT license.
