var AmpersandView = require('ampersand-view'),
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

function setupLayouts(layouts) {
  var retVal = {};
  _.each(layouts, (template, name) => {
    retVal[name] = {
      template: template,
      isRendered: false
    };
  });
  return retVal;
}

class ViewManager extends AmpersandView {

  constructor(views, layouts) {
    super();
    this.el = $('body')[0];
    this.views = setupViews(views);
    this.layouts = setupLayouts(layouts);
  }

  render(renderConfig, routeParams){
    var layout = renderConfig.layout,
        views = renderConfig.views;
    this.cleanupViews(views);
    this.renderLayout(layout);
    this.renderView(views, routeParams);
  }

  cleanupViews(omitViews){
    _.each(_.omit(this.views, omitViews), (view) => {
      view.isRendered = false;
      if (view.controller) view.controller.remove();
      view.controller = null;
    });
  }

  renderLayout(layout){
    if(!this.layouts[layout].isRendered){
      this.template = this.layouts[layout].template;
      this.renderWithTemplate();
    }
    _.each(_.omit(this.layouts, layout), (item) => {
      item.isRendered = false;
    });
  }

  renderView(newView, params){
    _.each(newView, (viewName, el) => {
      let view = this.views[viewName];
      view.isRendered = true;
      if (!view.controller) view.controller = new view.factory();
      view.controller.el = this.el.querySelector(el);
      view.controller.render(params);
    });
  }

}

module.exports = new ViewManager(
  require('./views/index'),
  require('./layouts/index')
);
