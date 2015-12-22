import homeRoute from './homeRoute.js';
import aboutRoute from './aboutRoute.js';

/*
  The object exported here is used as the Router's routes configuration.
  eg: {'my/route/:path' : myRouteFunc}
*/

export default {
  '': homeRoute,
  'home': homeRoute,
  'about': aboutRoute
}
