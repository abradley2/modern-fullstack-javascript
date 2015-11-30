var gulp = require('gulp'),
    tasks = require('./build');

gulp.task('watchify', tasks.watchify);

gulp.task('browserify', tasks.browserify);

gulp.task('sass', tasks.sass);

gulp.task('build', ['browserify']);

gulp.task('watch', ['watchify']);

gulp.task('default', ['build']);
