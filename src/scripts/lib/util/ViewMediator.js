function values(obj){
  return Object.keys(obj).map( (key) => {
    return obj[key];
  });
}

function omit(obj, omitKeys){
  if (typeof omitKeys === 'string') omitKeys = [omitKeys];
  var retObj = {};
  Object.keys(obj)
    .filter( (key) => {
      return (omitKeys.indexOf(key) === -1);
    }).forEach( (key) => {
      retObj[key] = obj[key];
    });
  return retObj;
}

function createFactories(views) {
  var retVal = {};
  Object.keys(views).forEach( (view) => {
    retVal[view] = {
      node: null,
      ref: null,
      isRendered: false,
      factory: React.createFactory(views[view])
    };
  });
  return retVal;
}

function createLayouts(layouts){
  var retVal = {};
  Object.keys(layouts).forEach( (layout) => {
    retVal[layout] = {
      html: layouts[layout],
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
    if (this.layout !== layout) this.layouts[layout].isRendered = false;
    if (!this.layouts[layout].isRendered) {
      this.remove();
      this.layout = layout;
      this.el.innerHTML = this.layouts[layout].html;
      this.layouts[layout].isRendered = true;
      return this.layouts[layout];
    } else return false;
  }

  removeViews(views){
    views.forEach( (view) => {
      if (this.views[view].isRendered){
        ReactDOM.unmountComponentAtNode(this.views[view].node);
        this.views[view].node = null;
        this.views[view].ref = null;
        this.views[view].isRendered = false;
      }
    });
  }

  renderViews(newViews, params){
    this.removeViews(
      Object.keys(
        omit(
          this.views,
          values(newViews)
        )
      )
    );

    Object.keys(newViews).forEach( (region) => {
      var newView = newViews[region];

      this.views[newView].node = this.el.querySelector(region);
      this.views[newView].isRendered = true;

      this.views[newView].ref = ReactDOM.render(
        this.views[newView].factory(params ? params[newView] : null),
        this.views[newView].node
      );
    });

  }

  render(renderConfig){
    this.renderLayout(renderConfig.layout);
    this.renderViews(renderConfig.views, renderConfig.params);
  }

  remove(){
    this.removeViews(Object.keys(this.views));
    this.el.innerHTML = null;
  }

}
