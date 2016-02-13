import NavLink from '../../components/NavLink.jsx';

export default class HomeView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      <h3>This is the Home View</h3>
      <NavLink href='/about' replace={true}>About</NavLink>
    </div>);
  }
}
