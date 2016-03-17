/*global require*/
var gulp = require('gulp'),
    config = require('../gulpconfig')();

gulp.task('dev-watch', function () {
    'use strict';
    gulp.watch(config.js.watch, ['js-compile']);
    gulp.watch(config.css.watch, ['css-compile']);
});
