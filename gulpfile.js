var gulp = require('gulp'),
    tasks = require('./build');

gulp.task('watchify', tasks.watchify);

gulp.task('browserify', tasks.browserify);

gulp.task('sass', tasks.sass);

gulp.task('build', ['browserify', 'sass']);

gulp.task('watch-styles', gulp.watch.bind(gulp, ['./src/scripts/**/*'], tasks.sass));

gulp.task('watch', ['watchify', 'watch-styles']);

gulp.task('default', ['build']);
