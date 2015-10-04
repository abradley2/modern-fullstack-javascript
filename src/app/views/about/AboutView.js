var AboutView = Backbone.View.extend({

    template: require('./aboutView.html'),

    initialize: function(){

    },

    render: function(){
      this.$el.html(this.template);
    },

    remove: function(){
      this.stopListening();
      this.$el.empty();
    }

});


module.exports = AboutView;
