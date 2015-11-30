var ViewManager = (function() {

  function setupFactories(views) {
    var retVal = {};
    _.each(views, function(factory, name) {
      retVal[name] = {
        factory: _.isFunction(factory) ? factory : () => {
          return factory
        },
        isRendered: false,
        node: null
      };
    });
    return retVal;
  }

  var ViewManager = Backbone.View.extend({

    initialize: function(params) {
      var el = params.el,
          views = params.views,
          layouts = params.layouts;
      this.setElement(el);
      this.views = setupFactories(views);
      this.layouts = setupFactories(layouts);
    },

    render: function(renderConfig) {
      var layout = renderConfig.layout,
          views = renderConfig.views,
          params = renderConfig.params;
      this.cleanupViews(views);
      this.renderLayout(layout);
      this.renderView(views, params);
    },

    remove: function() {
      this.cleanupViews();
      this.el.innerHTML = '';
    },

    cleanupViews: function(omitViews) {
      _.each(_.omit(this.views, omitViews), view => {
        view.isRendered = false;
        if (view.controller) view.controller.remove();
        view.controller = null;
      });
    },

    renderLayout: function(layout) {
      if (!this.layouts[layout].isRendered) {
        this.template = this.layouts[layout].factory();
        console.log(this.$el[0]);
        this.el.innerHTML = this.template;
      }
      _.each(_.omit(this.layouts, layout), item => {
        item.isRendered = false;
      });
    },

    renderView: function(newView, params) {
      var self = this;
      _.each(newView, (viewName, el) => {
        var view = self.views[viewName];
        if (!view.controller) view.controller = new view.factory();
        view.controller.setElement(el);
        view.controller.render();
        view.isRendered = true;
      });
    }

  });

  return ViewManager;

})();

export default ViewManager;
