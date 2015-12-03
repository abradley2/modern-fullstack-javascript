export default function aboutRoute(){
  app.viewMediator.render({
    layout: 'main',
    views: {
      '#navigation-region': 'NavigationView',
      '#content-region': 'AboutView'
    }
  });
}
