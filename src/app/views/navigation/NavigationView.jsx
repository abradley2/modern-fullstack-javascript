import {Navbar, NavbarNavicon, NavbarHeader, NavbarBrand, NavbarNav} from '../components/Navbar.jsx';

class Navigation extends React.Component {
  constructor(props){
    super(props);
    console.log('nav constructed');
  }

  render(){
    return (<Navbar inverse={true}>
      <NavbarHeader>
        <NavbarBrand href='#home'>Home</NavbarBrand>
      </NavbarHeader>
      <NavbarNav>
        <li><a href='#about'>About</a></li>
      </NavbarNav>
      <NavbarNav align='right'>
        <li><a href='#login'>Login</a></li>
      </NavbarNav>
    </Navbar>);
  }
}

class NavigationView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggleCollapsed(){
    console.log('TOGGLE');
    if (this.state.collapsed){
      this.setState({collapsed: false});
    } else {
      this.setState({collapsed: true});
    }
  }

  getNavigation(){
    if (this.state.collapsed){
      return <Navigation/>;
    }
  }

  render(){
    return (<div>
      <div className='row visible-xs'>
        <button
          type='button'
          className='btn btn-primary nav-toggle-button'
          onClick={this.toggleCollapsed.bind(this)}
        >
          Menu
        </button>
        {this.getNavigation()}
      </div>
      <div className='hidden-xs'>
        <Navigation/>
      </div>
    </div>);
  }
}

export default Backbone.View.extend({
  template: '<div id="navigation-container"/>',

  render: function(){
    this.$el.html(this.template);
    ReactDOM.render(<NavigationView/>,this.$el.find('#navigation-container')[0]);
  },

  remove: function(){
    ReactDOM.unmountComponentAtNode(this.$el.find('#navigation-container')[0]);
    this.$el.empty();
  }
});
