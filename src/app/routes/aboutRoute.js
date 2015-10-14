export default function aboutRoute(){
  app.viewManager.render({
    layout: 'main',
    views: {
      '#navigation-region': 'NavigationView',
      '#content-region': 'AboutView'
    }
  });
}
