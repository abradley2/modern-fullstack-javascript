var UserModel = Backbone.Model.extend({
  defaults: {
    loggedIn: false
  }
});

module.exports = new UserModel();
