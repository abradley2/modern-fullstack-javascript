import sessionStore from './sessionStore';

var stores = _.extend({
  'session': sessionStore
}, Backbone.Events);

/*
  Bind to events here. For example:

  stores.listenTo(
    stores.session,
    'changed:loggedIn',
    function(e) { .. }
  );
  
*/

export default stores;
