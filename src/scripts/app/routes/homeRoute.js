export default function homeRoute(){
  app.viewMediator.render({
    layout: 'main',
    views: {
      '#navigation-region': 'NavigationView',
      '#content-region': 'HomeView'
    }
  });
}
