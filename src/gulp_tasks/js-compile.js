/*global require*/
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('../gulpconfig')();

gulp.task('js-compile', ['js-clean'], function () {
    'use strict';
    return gulp.src(config.js.src)
        .pipe(plugins.concat(config.js.destFileName))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.uglify(null))
        .pipe(gulp.dest(config.js.dest))
        .pipe(plugins.gzip())
        .pipe(gulp.dest(config.js.dest));
});

