/*
 *  Register all your views here. The key by which you register your view
 *  (which is a class constructor for a React.Component) is the same key by
 *  which the viewMediator will refer to the view as in its .render calls.
 */

import HomeView from './home/HomeView.jsx';
import AboutView from './about/AboutView.jsx';
import NavigationView from './navigation/NavigationView.jsx';

export default {
  'HomeView': HomeView,
  'AboutView': AboutView,
  'NavigationView': NavigationView
}
