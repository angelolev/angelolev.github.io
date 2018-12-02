module.exports = function(config, gulp, sass, autoprefixer, cssnano, concat, cleanCSS, helpers, sourcemaps, gulpif, styleLint) {

    /* Compile and minimize all css files */
    gulp.task('css-build', function() {
        return gulp.src(config.input.sass)
            /*.pipe(styleLint({
                reporters: [
                    {formatter: 'string', console: true}
                ]
            }))*/
            .pipe(gulpif(helpers.enviroment() !== 'prod', sourcemaps.init({loadMaps: true})))
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(gulpif(helpers.enviroment() === 'prod', cssnano()))
            .pipe(concat('bundle.css'))
            .pipe(cleanCSS({
                inline : ['none']
            }))
            .pipe(gulpif(helpers.enviroment() !== 'prod', sourcemaps.write('./')))
            .pipe(gulp.dest(config.output.css));
        });
};