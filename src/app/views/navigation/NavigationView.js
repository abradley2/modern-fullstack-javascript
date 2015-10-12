var NavigationView = Backbone.View.extend({

  template: require('./navigationView.html'),

  render: function(){
    this.$el.html(this.template);
  },

  remove: function(){
    this.stopListening();
    this.$el.empty();
  }

});


module.exports = NavigationView;
