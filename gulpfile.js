const gulp = require('gulp')
const config = require('./config')
const { src, dest, watch } = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')
const rename = require('gulp-rename')
const Svgpack = require('svgpack')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

// SCSS
// =====================================================
const compileSass = () => {
  return src(config.tasks.scss.src)
    .pipe(
      sass({
        outputStyle: config.envProduction ? 'compressed' : 'nested'
      }).on('error', sass.logError)
    )
    .pipe(dest(config.tasks.scss.dest))
}

// Images
// =====================================================
const minifyImages = () => {
  return src(config.tasks.images.src).pipe(dest(config.tasks.images.dest))
}

// webpack
// =====================================================
const compileJavascript = () => {
  return src(config.tasks.webpack.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest(config.tasks.webpack.dest))
}

// Font
// =====================================================
const font = () => {
  return src(config.tasks.fonts.src).pipe(dest(config.tasks.fonts.dest))
}

// SVG
// =====================================================
const bundleSvg = done => {
  var svg = new Svgpack(config.tasks.svg.src, {
    dest: config.tasks.svg.dest
  })
  svg.init()
  done()
}

const svgRename = () => {
  return src(config.tasks.svgRename.src)
    .pipe(rename(config.tasks.svgRename.filename))
    .pipe(dest(config.tasks.svgRename.dest))
}

// Clean
// =====================================================
const clean = cb => {
  return del(config.tasks.clean, cb)
}

// Watch
// =====================================================
const watchFiles = () => {
  watch(config.tasks.scss.src, compileSass)
  watch(config.tasks.webpack.src, compileJavascript)
  watch(config.tasks.images.src, minifyImages)
  watch(config.tasks.fonts.src, font)
}

// Default
// =====================================================
const defaultTask = gulp.series(
  bundleSvg,
  compileSass,
  compileJavascript,
  minifyImages,
  font,
  svgRename,
  watchFiles
)

// Build
// =====================================================
const build = gulp.series(
  clean,
  bundleSvg,
  compileSass,
  compileJavascript,
  minifyImages,
  font,
  svgRename
)

exports.build = build

exports.default = defaultTask
