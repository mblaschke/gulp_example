/*global require*/
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('../gulpconfig')();

gulp.task('css-compile', ['css-clean'], function () {
    'use strict';
    return gulp.src(config.css.src)
        .pipe(plugins.less())
        .pipe(gulp.dest(config.css.dest))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest(config.css.dest))
        .pipe(plugins.gzip())
        .pipe(gulp.dest(config.css.dest));
});
