var gulp = require('gulp')
    gutil = require('gulp-util'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    stringify = require('stringify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    assign = require('lodash.assign');

var customOpts = {
  entries: ['./src/app/index.js'],
  debug: true
};

var opts = assign({}, watchify.args, customOpts);

var bundler = watchify(browserify(opts));

bundler.transform(stringify);
bundler.transform(babelify);

bundler.on('update', bundle);
bundler.on('log', gutil.log);

function bundle(){
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js'));
}

module.exports = bundle;
