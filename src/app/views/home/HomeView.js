var HomeView = Backbone.View.extend({

    template: require('./homeView.html'),

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


module.exports = HomeView;
