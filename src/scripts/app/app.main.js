import ViewMediator from './ViewMediator.js';
import Router from './Router.js';

import * as views from './views/index.js';
import * as layouts from './layouts/index.js';
import * as stores from './stores/index.js';
import * as methods from './methods/index.js';
import * as routes from './routes/index.js';

document.addEventListener("DOMContentLoaded", function(event) {

  /*
    Keeping the global namespace nice and clean
  */
  window.app = {

    /*
      The api is just a container of functions, mainly factory functions that
      return model and collection instances.
    */
    methods: methods,

    /*
      The global stores contains 'stores' which are singletons of collections and
      models used to track application state. It is extended with Backbone.Events
      so it can channel information between those stores.
    */
    stores: stores,

    /*
      The viewMediator handles rendering of combinations of layouts and their
      nested views, and keeps track of which are rendered to automate disposal
      upon every call to render a new layout/view set.
    */
    viewMediator: new ViewMediator({
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
