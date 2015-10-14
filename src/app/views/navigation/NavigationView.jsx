class NavigationView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      <ul className='nav nav-tabs'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
      </ul>
    </div>);
  }
}

export default Backbone.View.extend({
  template: '<div id="navigation-container"/>',

  render: function(){
    this.$el.html(this.template);
    React.render(<NavigationView/>,this.$el.find('#navigation-container')[0]);
  },

  remove: function(){
    React.unmountComponentAtNode(this.$el.find('#navigation-container')[0]);
    this.$el.empty();
  }
});
