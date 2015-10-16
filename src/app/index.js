import './lib.js';

import Api from './Api.js';
import Global from './Global.js';
import ViewManager from './ViewManager.js';
import Router from './Router.js';

import * as views from './views/index.js';
import * as layouts from './layouts/index.js';
import * as stores from './stores/index.js';
import * as methods from './methods/index.js';
import * as routes from './routes/index.js';

$(document).ready(function(){
  window.app = {
    api: new Api(methods),
    global: new Global(stores),
    viewManager: new ViewManager({
      views: views,
      layouts: layouts,
      el: 'body'
    }),
    router: new Router(routes)
  };
  Backbone.history.start();
});
