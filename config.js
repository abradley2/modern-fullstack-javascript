/** DIST OPTIONS **/

/*
 *  These options specify gulp output paramters,
 *  namely the dist folder gulp should dump
 *  everything to. By default it is the local
 *  ./dist folder. You may probably wish to change
 *  this to the static/public directory of your sever.
 */

exports.distOptions = {

  'scriptsDistFolder': './public/dist/scripts',

  'stylesDistFolder': './public/dist/styles'

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

exports.browserifyOptions = function(bundler, env, entry){

  bundler.exclude('jquery');
  bundler.transform(babelify.configure({presets: ["es2015", "react"]}));
  bundler.transform(stringify(['.html']));

  if (env === 'dev') {

  }

  if (env === 'prod') {

  }

  return bundler;

};
