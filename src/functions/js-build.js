module.exports = function(config, gulp, concat, uglify, helpers, gulpif, sourcemaps) {

    /* Compile and minimize all js files */
    gulp.task('js-build', function() {
    return gulp.src(config.input.js)
        .pipe(gulpif(helpers.enviroment() !== 'prod', sourcemaps.init({loadMaps: true})))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulpif(helpers.enviroment() !== 'prod', sourcemaps.write('./')))
        .pipe(gulp.dest(config.output.js));
    });

};