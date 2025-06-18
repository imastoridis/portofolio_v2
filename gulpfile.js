var gulp = require('gulp'),
  connect = require('gulp-connect-php'),
  browserSync = require('browser-sync');

gulp.task('connect-sync', function () {
  connect.server({}, function () {
    browserSync({
      proxy: 'portofolio-v2/'
    });
  });

  gulp.watch('**/*.php').on('change', function () {
    browserSync.reload();
  });
  gulp.watch('**/*.html').on('change', function () {
    browserSync.reload();
  });
  gulp.watch('**/*.js').on('change', function () {
    browserSync.reload();
  });
  gulp.watch('**/*.css').on('change', function () {
    browserSync.reload();
  });
});

gulp.task('start', gulp.series('connect-sync', function () {
  //include the code for your default task
}));