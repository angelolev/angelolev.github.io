const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    styleLint = require('gulp-stylelint'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpif = require('gulp-if'),
    config = require('./config.json'),
    helpers = require('./src/functions/helpers');

require('./src/functions/clean')(config, gulp, clean);
require('./src/functions/css-build')(config, gulp, sass, autoprefixer, cssnano, concat, cleanCSS, helpers, sourcemaps, gulpif, styleLint);
require('./src/functions/js-build')(config, gulp, concat, uglify, helpers, gulpif, sourcemaps);
require('./src/functions/images-build')(config, gulp, imagemin);
require('./src/functions/copy-fonts')(config, gulp);
require('./src/functions/lg-prod')(config, gulp);

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['watch']);

/* Watch these files for changes and run the task on update */
gulp.task('watch', function () {
    gulp.watch(config.input.sass, ['css-build']);
    gulp.watch(config.input.js, ['js-build']);
    gulp.watch(config.input.images, ['images-build']);
});