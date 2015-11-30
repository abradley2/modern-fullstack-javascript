var SessionStore = Backbone.Model.extend({
  defaults: {
    loggedIn: false
  }
});

export default new SessionStore();
