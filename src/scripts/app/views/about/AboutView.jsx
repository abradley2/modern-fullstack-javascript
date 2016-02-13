import NavLink from '../../components/NavLink.jsx';

export default class AboutView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      <h3>This is the about View</h3>
      <NavLink href='/' replace={true}>Home</NavLink>
    </div>);
  }
}
