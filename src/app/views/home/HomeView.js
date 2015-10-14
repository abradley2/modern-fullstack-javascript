class HomeView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      <a href='#about'>About</a>
    </div>);
  }
}

module.exports = Backbone.View.extend({

    template: require('./homeView.jade'),
    post: marked(require('./home.md')),

    render: function(){
      this.$el.html(this.template({
        post: this.post
      }));
      React.render(<HomeView/>,this.$el.find('#component-container')[0]);
    },

    remove: function(){
      React.unmountComponentAtNode(this.$el.find('#component-container')[0]);
      this.$el.empty();
    }

});
