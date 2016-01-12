/*
  Models and Collections in the stores should be singletons,
  as opposed to those in the methods group which are constructors.
  Stores act as sort of session variables, or trackers of state
  for the entire application. For this reason the stores object
  here is extened with Backbone.Events
*/


import sessionStore from './sessionStore';

var stores = _.extend({

  'session': sessionStore

}, Backbone.Events);

/*
 *  Bind to events of your stores-models here. For example:
 *
 *  stores.listenTo(
 *    stores.session,
 *    'changed:loggedIn',
 *    function(e) {
 *      app.router.navigate('home',{trigger: true});
 *    }
 *  );
 *
 */

export default stores;
