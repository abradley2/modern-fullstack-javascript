import * as routes from './routes/index.js';

routes[''] = routes[''] ? routes[''] : routes['default'];

var Router = Backbone.Router.extend({

  routes: routes

});

module.exports = new Router();
