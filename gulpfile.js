var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require("gulp-sass"),
    minifycss = require('gulp-minify-css');

var dir = {
  static: 'static/',
  sass: 'sass/'
};

// sassのコンパイル
gulp.task("sass", function() {
    gulp.src(dir.sass + "*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(dir.static));
});

// CSSの圧縮
gulp.task('minify-css', function() {
  gulp.src(dir.static + "*.css")
    .pipe(minifycss())
    .pipe(gulp.dest(dir.static));
});

gulp.task('default', function() {
  gulp.watch([dir.sass + '*.scss'], ['sass']);
  gulp.watch([dir.src + '*.css'], ['minify-css']);
});
