module.exports = function(config, gulp) {

    /* Build css and js minified files for production */
    gulp.task('lg-prod', ['clean', 'css-build', 'js-build', 'images-build', 'copy-fonts']);

};