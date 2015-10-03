var AmpersandRouter = require('ampersand-router');

var Router = AmpersandRouter.extend({
  routes: require('./routes/index.js')
});

module.exports = new Router();
