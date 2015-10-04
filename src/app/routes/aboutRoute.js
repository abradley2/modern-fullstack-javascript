function aboutRoute(){
  app.viewManager.render({
    layout: 'default',
    views: {
      '#content-region': 'AboutView'
    }
  });
}

module.exports = aboutRoute;
