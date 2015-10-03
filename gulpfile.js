require('babel-core');

var gulp = require('gulp');

gulp.task('styles', require('./tasks/styles'));

gulp.task('watchify', require('./tasks/watchify'));

gulp.task('browserify', require('./tasks/browserify'));

gulp.task('libs', require('./tasks/libs'));

gulp.task('watch-styles', function(){
  gulp.watch(['./src/styles/**/*'],['styles']);
});

gulp.task('build', ['browserify', 'libs', 'styles']);

gulp.task('watch', ['watchify', 'libs', 'styles', 'watch-styles']);

gulp.task('default', ['build']);
