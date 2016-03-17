/*global require*/
var config = require('../gulpconfig.js')(),
    plugins = require('gulp-load-plugins')(),
    gulp = plugins.help(require('gulp'), config.gulphelp.options);

gulp.task('build', 'Triggers a complete build.', ['js-clean', 'css-clean'], function () {
    'use strict';
    gulp.start(['js-compile', 'css-compile']);
});
