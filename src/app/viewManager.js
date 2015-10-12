function setupFactories(views) {
  var retVal = {};
  _.each(views, function(factory, name){
    retVal[name] = {
      factory: factory,
      isRendered: false
    };
  });
  return retVal;
}

var ViewManager = Backbone.View.extend({

  initialize: function(views, layouts, el) {
    this.setElement(el);
    this.views = setupFactories(views);
    this.layouts = setupFactories(layouts);
  },

  render: function(renderConfig, routeParams){
    var layout = renderConfig.layout,
        views = renderConfig.views;
    this.cleanupViews(views);
    this.renderLayout(layout);
    this.renderView(views, routeParams);
  },

  remove: function(){
    this.cleanupViews();
    this.$el.empty();
  },

  cleanupViews: function(omitViews){
    _.each(_.omit(this.views, omitViews), function(view){
      view.isRendered = false;
      if (view.controller) view.controller.remove();
      view.controller = null;
    });
  },

  renderLayout: function(layout){
    if(!this.layouts[layout].isRendered){
      this.template = this.layouts[layout].factory;
      this.$el.html(this.template);
    }
    _.each(_.omit(this.layouts, layout), function(item){
      item.isRendered = false;
    });
  },

  renderView: function(newView, params){
    var self = this;
    _.each(newView, function(viewName, el){
      var view = self.views[viewName];
      view.isRendered = true;
      if (!view.controller) view.controller = new view.factory();
      view.controller.setElement(el);
      view.controller.render();
    });
  }

});

module.exports = new ViewManager(
  require('./views/index'),
  require('./layouts/index'),
  'body'
);
