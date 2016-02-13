class NavLink extends React.Component {
  constructor(props){
    super(props);
  }

  navigate(e){
    e.preventDefault()

    if (this.props.replace){
      history.replaceState(this.props.data, this.props.title, this.props.href);
    } else {
      history.pushState(this.props.data, this.props.title, this.props.href);
    }

    app.router.navigate(
      this.props.href,
      {
        trigger: this.props.trigger
      }
    );
  }

  render(){
    return (
      <a
        href={this.props.href}
        className={this.props.className}
        onClick={this.navigate.bind(this)}
      >
        {this.props.children}
      </a>
    );
  }
}

NavLink.defaultProps = {
  trigger: true,
  replace: false
};

export default NavLink;
