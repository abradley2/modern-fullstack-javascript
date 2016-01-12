/** DIST OPTIONS **/

/*
 *  These options specify gulp output paramters,
 *  namely the dist folder gulp should dump
 *  everything to. By default it is the local
 *  ./dist folder. You may probably wish to change
 *  this to the static/public directory of your sever.
 */

exports.distOptions = {

  'scriptsDistFolder': './dist/scripts',

  'stylesDistFolder': './dist/styles'

};


/** BROWSERIFY OPTIONS **/

/*
 *  You can require browserify transforms here
 *  this function will pass the browserify bundler
 *  and the environment ('dev' corresponds to 'watch'
 *  tasks and 'prod' corresponds to 'build' tasks).
 *  You may also wish to pass other options to the bundler
 *  such as .exclude('dependency-to-exclude')
 */

var babelify = require("babelify"),
    stringify = require('stringify');

exports.browserifyOptions = function(bundler, env){

  if (env === 'watch') {


    bundler.transform(babelify);
    bundler.transform(stringify(['.html']));

    return bundler;

  }

  if (env === 'build') {

    bundler.transform(babelify);
    bundler.transform(stringify(['.html']));

    return bundler;

  }

};

/** GULP CSS PREPROCESSOR OPTIONS **/

/*
 *  Gulp is the automation tool, so you may pass in any
 *  CSS preprocessor that is compatible with gulp streams.
 *  By default, SASS is used.
 *
 *  If you would rather you less, require gulp-less and
 *  specify it here instead.
 *
 *  Gulp is quite simple and it
 *  may be easier to configure a different build/watch-styles
 *  process by directly editing the build/build-styles.js
 *  and build/watch-styles.js files.
 */

var sass = require('gulp-sass');

exports.gulpCSSPreprocessor = sass();
