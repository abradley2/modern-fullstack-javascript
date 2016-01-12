import views from './views';
import layouts from './layouts';
import stores from './stores';
import methods from './methods';
import routes from './routes';

document.addEventListener("DOMContentLoaded", function(event) {
  /*
    Keeping the global namespace nice and clean
  */
  window.app = {

    /*
      The app.methods namespace is a collection of constructor functions that
      return instances of Backbone Collections and Models.

      See the documentation for Backbone Collection/Models/API-integration here:
      http://backbonejs.org/#API-integration
      http://backbonejs.org/#Collection
      http://backbonejs.org/#Model

      All methods are registered in ./src/methods/index.js
    */
    methods: methods,


    /*
      The global stores contains 'stores' which are singletons of collections and/or
      models used to track application state, such as 'loggedIn' or 'postsSeen' or
      'notificationsSeen', etc.

      See the documentation for Backbone Events here:
      http://backbonejs.org/#Events

      All stores are registered in ./src/stores/index.js
    */
    stores: stores,


    /*
      The ViewMediator handles rendering of combinations of layouts and their
      nested views, and keeps track of which are rendered to automate disposal
      upon every call to render a new layout/view set.

      See the documentation for the ViewMediator here:
      https://www.npmjs.com/package/react-view-mediator

      All views are registered in ./src/views/index.js
      All layouts are registered in ./src/layouts/index.js
    */
    viewMediator: new ReactViewMediator({
      views: views,
      layouts: layouts,
      el: 'body'
    }),


    /*
      The router simply responds to url changes by telling the viewManager to
      render a new layout/view set accordingly.

      See the documentation for the Router here:
      http://backbonejs.org/#Router

      All routes are registered in ./src/routes/index.js
    */
    router: new (Backbone.Router.extend({
      routes: routes
    }))()

  };

  Backbone.history.start();
});
