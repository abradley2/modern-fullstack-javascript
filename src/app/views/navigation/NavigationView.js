var NavigationView = Backbone.View.extend({

  template: require('./navigationView.jade'),

  render: function(){
    this.$el.html(this.template());
  },

  remove: function(){
    this.stopListening();
    this.$el.empty();
  }

});


module.exports = NavigationView;
