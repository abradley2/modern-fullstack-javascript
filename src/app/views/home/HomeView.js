var HomeView = Backbone.View.extend({

    template: require('./homeView.html'),

    initialize: function(){

    },

    render: function(){
      this.$el.html(this.template);
      React.render(<Counter/>, document.querySelector('#counter'));
    },

    remove: function(){
      this.stopListening();
      this.$el.empty();
    }

});


module.exports = HomeView;
