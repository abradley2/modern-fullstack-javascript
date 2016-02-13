export default class NavigationView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<div className='pure-menu pure-menu-horizontal'>
      <ul className='pure-menu-list'>
        <li className='pure-menu-item'>
          <a className='pure-menu-link' href='#home'>Home</a>
        </li>
        <li className='pure-menu-item'>
          <a className='pure-menu-link' href='#about'>About</a>
        </li>
      </ul>
    </div>);
  }
}
