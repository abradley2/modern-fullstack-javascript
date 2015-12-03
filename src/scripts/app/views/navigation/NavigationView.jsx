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
