export default class NavigationView extends React.Component {
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

  render: function(){
    this.el.innerHTML = '<div id="navigation-container"/>';
    ReactDOM.render(<NavigationView/>,this.el.querySelector('#navigation-container')[0]);
  },

  remove: function(){
    ReactDOM.unmountComponentAtNode(this.el.querySelector('#navigation-container')[0]);
    this.el.innerHTML = '';
  }

});
