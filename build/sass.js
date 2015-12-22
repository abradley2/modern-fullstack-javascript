var gulp = require('gulp'),
    sass = require('gulp-sass');

function styles(){
  gulp.src(['./src/styles/**/*'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
}

module.exports = styles;
