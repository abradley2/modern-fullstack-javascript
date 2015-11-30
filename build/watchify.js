var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    babelify = require('babelify'),
    stringify = require('stringify'),
    glob = require('glob'),
    source = require('vinyl-source-stream'),
    eventStream = require('event-stream'),
    assign = require('lodash.assign');

var nameRegex = /([\w]+)(?=\.main\.js$)/g;

function updateBundle(entry){
  return this.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(entry.match(nameRegex)[0]))
    .pipe(rename({extname: '.bundle.js'}))
    .pipe(gulp.dest('./public/js'));
}

function getBundles(done){
  glob('./src/scripts/**/*.main.js', function(err, files){
    var streams = files.map(function(entry){
      var bundler = watchify(browserify({ entries: [entry]}))
        .transform(stringify({extensions: ['.html', '.txt', '.md']}))
			  .transform(babelify);
      bundler.on('log', gutil.log);
      bundler.on('update', updateBundle.bind(bundler,entry));
      return updateBundle.call(bundler,entry);
    });
    return eventStream.merge(streams).on('end', done);
  });
}

module.exports = getBundles;
