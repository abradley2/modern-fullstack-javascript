window.$ = window.jQuery = require('jquery');
window._ = require('lodash');

window.app = {};

require('./components/index.js');

$(document).ready(function(){
  app.events = {};
  (require('ampersand-events')).createEmitter(app.events);
  app.global = require('./global.js');
  app.api = require('./api.js')
  app.viewManager = require('./viewManager.js');
  app.router = require('./router.js');
});
