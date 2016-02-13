import NavLink from '../../components/NavLink.jsx';

export default class NavigationView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<div className='pure-menu pure-menu-horizontal'>
      <ul className='pure-menu-list'>
        <li className='pure-menu-item'>
          <NavLink className='pure-menu-link' href='/'>Home</NavLink>
        </li>
        <li className='pure-menu-item'>
          <NavLink className='pure-menu-link' href='/about'>About</NavLink>
        </li>
      </ul>
    </div>);
  }
}
