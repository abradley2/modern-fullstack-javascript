function homeRoute(){
  console.log('homeRoute()');
  app.viewManager.render({
    layout: 'default',
    views: {
      '#content-region': 'HomeView'
    }
  });
}

module.exports = homeRoute;
