/*
    Register all your routes here. The key by which they are registered is the
    url path the router will match to execute that route. It will pass all route
    paramaters (dynamic segments such as post/:id) as arguments to that function
 */

import homeRoute from './homeRoute.js';
import aboutRoute from './aboutRoute.js';

/*
 *  The object exported here is used as the Router's routes configuration.
 *  eg: {'my/route/:path' : myRouteFunc}
 */

export default {
  '': homeRoute,
  'about': aboutRoute
}
