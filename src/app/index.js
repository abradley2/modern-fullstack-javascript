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

    /*
      The api is just a container of functions, mainly factory functions that
      return model and collection instances.
    */
    api: new Api(methods),
    
    /*
      The global object contains 'stores' which are singletons of collections and
      models used to track application state. It is extended with Backbone.Events
      so it can channel even information between those stores.
    */
    global: new Global(stores),

    /*
      The viewManager handles rendering of combinations of layouts and their
      nested views, and keeps track of which are rendered to automate disposal
      upon every call to render a new layout/view set.
    */
    viewManager: new ViewManager({
      views: views,
      layouts: layouts,
      el: 'body'
    }),

    /*
      The router simply responds to url changes by telling the viewManager to
      render a new layout/view set accordingly.
    */
    router: new Router(routes)
  };

  Backbone.history.start();
});
