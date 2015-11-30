var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    babelify = require('babelify'),
    stringify = require('stringify'),
    glob = require('glob'),
    source = require('vinyl-source-stream'),
    eventStream = require('event-stream'),
    assign = require('lodash.assign');

var nameRegex = /([\w]+)(?=\.main\.js$)/g;

function getBundles(done){
  glob('./src/scripts/**/*.main.js', function(err, files){
    var streams = files.map(function(entry){
      return browserify({ entries: [entry]})
        .transform(babelify)
        .transform(stringify)
        .bundle()
        .pipe(source(entry.match(nameRegex)[0]))
        .pipe(rename({extname: '.bundle.js'}))
        .on('log', gutil.log)
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(gulp.dest('./public/js'));
    });
    return eventStream.merge(streams).on('end', done);
  });
}

module.exports = getBundles;
