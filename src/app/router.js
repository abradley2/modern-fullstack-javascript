var AmpersandRouter = require('ampersand-router');

class Router extends AmpersandRouter {

  constructor(){
    super();
    this.routes = require('./routes/index.js');
    this.history.start();
  }

}

module.exports = new Router();
