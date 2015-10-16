var UserModel = Backbone.Model.extend({
  defaults: {
    loggedIn: false
  }
});

export default new UserModel();
