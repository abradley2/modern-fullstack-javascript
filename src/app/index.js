window.$ = window.jQuery = require('jquery');
window._ = require('lodash');
window.Backbone = require('backbone');
window.React = require('react');

window.app = {};



$(document).ready(function(){
  app.components = require('./components/index.js');
  app.events = _.extend({}, Backbone.Events);
  app.fn = require('./fn/util.js');
  app.global = require('./global.js');
  app.api = require('./api.js')
  app.viewManager = require('./viewManager.js');
  app.router = require('./router.js');
  Backbone.history.start();
});
