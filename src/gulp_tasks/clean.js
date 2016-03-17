/*global require*/
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    config = require('../gulpconfig')();

gulp.task('js-clean', function () {
    'use strict';
    return gulp.src([config.js.dest + '*[.js|.map|.gz]'])
        .pipe(plugins.rimraf({force: true}));
});

gulp.task('css-clean', function () {
    'use strict';
    return gulp.src(config.css.dest, {read: false})
        .pipe(plugins.rimraf({force: true}));
});
