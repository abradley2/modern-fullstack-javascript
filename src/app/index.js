window.$ = window.jQuery = require('jquery');
window._ = require('lodash');
window.Backbone = require('backbone');
window.React = require('react');
window.marked = require('marked');
require('../../node_modules/bootstrap/dist/js/npm.js');

window.app = {};


$(document).ready(function(){
  app.events = _.extend({}, Backbone.Events);
  app.global = require('./global.js');
  app.api = require('./api.js');
  app.components = require('./components/index.js');
  app.viewManager = require('./viewManager.js');
  app.router = require('./router.js');
  Backbone.history.start();
});
