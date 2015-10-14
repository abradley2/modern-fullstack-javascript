

module.exports = Backbone.View.extend({

  template: require('./navigationView.jade'),

  render: function(){
    this.$el.html(this.template());
  },

  remove: function(){
    this.$el.empty();
  }

});
