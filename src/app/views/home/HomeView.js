var Example = app.components.Example;

var HomeView = Backbone.View.extend({

    template: require('./homeView.jade'),
    post: marked(require('./home.md')),

    render: function(){
      this.$el.html(this.template({
        post: this.post
      }));
      React.render(<Example/>,this.$el.find('#example-component')[0]);
    },

    remove: function(){
      React.unmountComponentAtNode(this.$el.find('#example-component')[0]);
      this.$el.empty();
    }

});

module.exports = HomeView;
