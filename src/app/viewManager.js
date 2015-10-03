var AmpersandView = require('ampersand-view'),
    ViewSwitcher = require('ampersand-view-switcher'),
    templates = require('./layouts/index.js');


function setupViews(views) {
  var retVal = {};
  _.each(views, (factory, name) => {
    retVal[name] = {
      factory: factory,
      isRendered: false
    };
  });
  return retVal;
}

class ViewManager extends AmpersandView {

  constructor(views, layouts) {
    super();
    this.el = 'body';
    this.views = setupViews(views);
    this.layouts = layouts;
    this.renderedLayout = null;
  }

}

module.exports = new ViewManager(
  require('./views/index'),
  require('./layouts/index')
);
