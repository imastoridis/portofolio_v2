var gulp = require('gulp'),
  browserSync = require('browser-sync').create();

gulp.task('connect-sync', function (done) {
  browserSync.init({
    proxy: 'portofolio-v2/',
    open: true,
    notify: true, // Shows a small "Connected" bar when it injects
    watchOptions: {
      ignored: ['node_modules', '.git']
    }
  });

  // 1. WATCH CSS (Inject)
  // We pipe the stream to browserSync.stream() instead of calling reload()
  gulp.watch('**/*.css', function () {
    return gulp.src('**/*.css', { allowEmpty: true })
      .pipe(browserSync.stream());
  });

  // 2. WATCH LOGIC/MARKUP (Full Reload)
  const reloadFiles = [
    '**/*.php',
    '**/*.html',
    '**/*.js',
    '!node_modules/**',
    '!.git/**'
  ];
  gulp.watch(reloadFiles).on('change', browserSync.reload);

  done();
});

gulp.task('start', gulp.series('connect-sync'));