function createFactories(views) {
  var retVal = {};
  _.each(views, (factory, name) => {
    retVal[name] = {
      node: null,
      ref: null,
      isRendered: false,
      factory: factory
    };
  });
  return retVal;
}

function createLayouts(layouts){
  var retVal = {};
  _.each(layouts, (html, name) => {
    retVal[name] = {
      html: html,
      isRendered: false
    };
  });
  return retVal;
}

export default class ViewMediator {
  constructor(config){
    this.layout = null;
    this.layouts = createLayouts(config.layouts);
    this.views = createFactories(config.views);
    this.el = document.querySelector(config.el);
  }

  renderLayout(layout){
    if (this.layout !== layout) layout.isRendered = false;
    if (!this.layouts[layout].isRendered) {
      this.remove();
      this.layout = layout;
      this.el.innerHTML = this.layouts[layout].html;
      this.layouts[layout].isRendered = true;
      return this.layouts[layout];
    } else return false;
  }

  removeViews(views){
    _.each(views, (view) => {
      if (this.views[view].isRendered){
        ReactDOM.unmountComponentAtNode(this.views[view].node);
        this.views[view].node = null;
        this.views[view].ref = null;
        this.views[view].isRendered = false;
      }
    });
  }

  renderViews(newViews, params){
    params = params ? params : {};
    this.removeViews(_.keys(_.omit(this.views, _.values(newViews))));
    _.each(newViews, (newView, el) => {
      this.views[newView].node = this.el.querySelector(el);
      if (this.views[newView].ref === null) {
        this.views[newView].ref = ReactDOM.render(
          React.createElement(this.views[newView].factory, params ? params[newView] : null),
          this.views[newView].node
        );
      } else if (params[newView]){
        this.views[newView].ref.setProps(params[newView]);
      }
      this.views[newView].isRendered = true;
    });
  }

  render(renderConfig){
    this.renderLayout(renderConfig.layout);
    this.renderViews(renderConfig.views, renderConfig.params);
  }

  remove(){
    this.removeViews(_.keys(this.views));
    this.el.innerHTML = null;
  }
}
