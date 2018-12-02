module.exports = function(config, gulp, clean) {

  /* clean all bundle files created */
  gulp.task('clean', function() { 
      gulp.src([config.output.dist], {read: false})
      .pipe(clean());
  });

};