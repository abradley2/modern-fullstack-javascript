window.$ = window.jQuery = require('jquery');
window._ = require('lodash');

window.app = {};

$(document).ready(function(){
  app.events = {};
  (require('ampersand-events')).createEmmiter(app.events);
  app.global = require('./global');
  app.api = require('./api')
  app.viewManager = require('./viewManager');
  app.router = require('./router');
});
