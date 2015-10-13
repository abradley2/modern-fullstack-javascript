var AboutView = Backbone.View.extend({

    template: require('./aboutView.jade'),

    render: function(){
      this.$el.html(this.template());
    },

    remove: function(){
      this.$el.empty();
    }

});


module.exports = AboutView;
