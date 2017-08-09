import config from './config'
import del from 'del'
import gulp from 'gulp'
import gulpIf from 'gulp-if'
import image from 'gulp-imagemin'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'
import Svgpack from 'svgpack'
import runSequence from 'run-sequence'
import webpack from 'webpack'
import webpackConfig from './webpack.config.babel'
import webpackStream from 'webpack-stream'

// CSS
// =====================================================
gulp.task('css', () => {
  const processors = config.tasks.css.processors
  const beforeReporter = processors.length - 2
  if (config.envProduction) processors.splice(beforeReporter, 0, config.tasks.css.minifyLib)

  return gulp.src(`${config.tasks.css.src}`)
    .pipe(gulpIf(!config.envProduction, sourcemaps.init()))
    .pipe(postcss(processors))
    .pipe(gulpIf(!config.envProduction, sourcemaps.write()))
    .pipe(gulp.dest(config.tasks.css.dest))
})

// webpack
// =====================================================
gulp.task('webpack', () => {
  if (config.envProduction) {
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin())
  } else {
    webpackConfig.devtool = 'source-map'
  }
  return gulp
    .src(config.tasks.webpack.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(config.tasks.webpack.dest))
})

// Image
// =====================================================
gulp.task('image', () => {
  return gulp
    .src(config.tasks.images.src)
    .pipe(image())
    .pipe(gulp.dest(config.tasks.images.dest))
})

// SVG
// =====================================================
gulp.task('svg', () => {
  var svg = new Svgpack(config.tasks.svg.src, {
    dest: config.tasks.svg.dest
  })
  svg.init()
})

gulp.task('svg:rename', () => {
  return gulp
    .src(config.tasks.svgRename.src)
    .pipe(rename(config.tasks.svgRename.filename))
    .pipe(gulp.dest(config.tasks.svgRename.dest))
})

// Watch
// =====================================================
gulp.task('watch', () => {
  const props = []
  Object.keys(config.tasks.watch).forEach(function (key) {
    let task
    task = gulp.watch(config.tasks.watch[key], [key])
    return props.push(task)
  })
  return props
})

// Clean
// =====================================================
gulp.task('clean', (cb) => {
  return del(config.tasks.clean, cb)
})

// Default
// =====================================================
gulp.task('default', (cb) => {
  return runSequence(
    ['svg'],
    'css',
    'webpack',
    'image',
    'watch',
    'svg:rename',
    cb
  )
})

// Build
// =====================================================
gulp.task('build', (cb) => {
  return runSequence(
    'clean',
    ['svg'],
    'css',
    'webpack',
    'image',
    'svg:rename',
    cb
  )
})
