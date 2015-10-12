function homeRoute(){
  app.viewManager.render({
    layout: 'default',
    views: {
      '#navigation-region': 'NavigationView',
      '#content-region': 'HomeView'
    }
  });
}

module.exports = homeRoute;
