function aboutRoute(){
  app.viewManager.render({
    layout: 'default',
    views: {
      '#navigation-region': 'NavigationView',
      '#content-region': 'AboutView'
    }
  });
}

module.exports = aboutRoute;
