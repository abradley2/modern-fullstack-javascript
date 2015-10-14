class AboutView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      <h3>This is the about View</h3>
      <a href='#home'>Home</a>
    </div>);
  }
}

module.exports = Backbone.View.extend({

    template: require('./aboutView.jade'),

    render: function(){
      this.$el.html(this.template());
      React.render(<AboutView/>,this.$el.find('#component-container')[0]);
    },

    remove: function(){
      React.unmountComponentAtNode(this.$el.find('#component-container')[0]);
      this.$el.empty();
    }

});
