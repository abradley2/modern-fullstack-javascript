class HomeView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      <h3>This is the Home View</h3>
      <a href='#about'>About</a>
    </div>);
  }
}

export default Backbone.View.extend({
    template: '<div id="home-container"/>',

    render: function(){
      this.$el.html(this.template);
      React.render(<HomeView/>,this.$el.find('#home-container')[0]);
    },

    remove: function(){
      React.unmountComponentAtNode(this.$el.find('#home-container')[0]);
      this.$el.empty();
    }
});
