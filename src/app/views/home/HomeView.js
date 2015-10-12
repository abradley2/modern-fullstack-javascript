var Example = app.components.Example;

var HomeView = Backbone.View.extend({

    template: require('./homeView.html'),

    initialize: function(){

    },

    render: function(){
      this.$el.html(this.template);
      React.render(<Example/>, this.$el.find('#example-component')[0]);
    },

    remove: function(){
      this.stopListening();
      this.$el.empty();
    }

});


module.exports = HomeView;
