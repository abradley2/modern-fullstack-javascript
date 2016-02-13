class NavLink extends React.Component {
  constructor(props){
    super(props);
  }

  navigate(e){
    e.preventDefault();

    app.router.navigate(
      this.props.href,
      {
        replace: this.props.replace,
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
