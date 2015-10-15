export class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(<nav
      className={'navbar ' + this.props.inverse ? 'navbar-inverse' :'navbar-default'}>
      <div className='container-fluid'>
        {this.props.children}
      </div>
    </nav>);
  }
}

export class NavbarHeader extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
      return (<div className='navbar-header'>
        {this.props.children}
      </div>);
    }
}

export class NavbarNavicon extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<a href={this.props.href}>
      <i className={'navbar-brand ' + this.props.icon}></i>
    </a>);
  }
}

export class NavbarBrand extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<a className="navbar-brand" href={this.props.href}>
      {this.props.children}
    </a>);
  }
}

export class NavbarNav extends React.Component {
  constructor(props){
    super(props);
  }

  getAlignment(dir){
    var map = {
      'right': 'navbar-right',
      'left': 'navbar-left'
    };
    return map[dir] ? map[dir] : '';
  }

  render(){
    return(<ul className={"nav navbar-nav " + this.getAlignment(this.props.align)}>
      {this.props.children}
    </ul>);
  }
}
