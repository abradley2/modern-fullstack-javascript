var gulp = require('gulp')
    gutil = require('gulp-util'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    stringify = require('stringify'),
    jadeify = require('jadeify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    assign = require('lodash.assign');

var bundler = browserify({
  entries: ['./src/app/index.js'],
  debug: true
});

bundler.transform(stringify(['.html','.md','.txt']));
bundler.transform(jadeify);
bundler.transform(babelify);

bundler.on('log', gutil.log);

function bundle(){
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/js'));
}

module.exports = bundle;
