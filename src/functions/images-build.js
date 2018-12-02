module.exports = function(config, gulp, imagemin) {

    /* Optimize PNG, JPEG, GIF, SVG images */
    gulp.task('images-build', function () {
    gulp.src(config.input.images)
        .pipe(imagemin())
        .pipe(gulp.dest(config.output.images));
    });

}