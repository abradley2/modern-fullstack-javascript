var Router = (routes) => {
  routes[''] = routes.default;

  var Router = Backbone.Router.extend({

    routes: routes

  });

  return new Router();
};

export default Router;
