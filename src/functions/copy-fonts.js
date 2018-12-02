module.exports = function (config, gulp) {

    /* copy all fonts to dist folder */
    gulp.task('copy-fonts', function () {
        gulp.src(config.input.fonts)
            .pipe(gulp.dest(config.output.fonts));
    });

};