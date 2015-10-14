export default function homeRoute(){
  app.viewManager.render({
    layout: 'main',
    views: {
      '#navigation-region': 'NavigationView',
      '#content-region': 'HomeView'
    }
  });
}
