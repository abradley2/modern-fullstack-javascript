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
    // api methods are general factory-functions that return models and collections
    api: new Api(methods),
    // global holds stores which are singletons of models or collections
    global: new Global(stores),
    // the viewManager handles rendering and disposal of views and layouts
    viewManager: new ViewManager({
      views: views,
      layouts: layouts,
      el: 'body'
    }),
    // the router translates url changes into instructions for the viewManager
    router: new Router(routes)
  };
  Backbone.history.start();
});
