var Counter = React.createClass({

  getInitialState: function(){
    console.log('get initial state!');
  },

  getDefaultProps: function(){
    console.log('return props that are defaults');
  },

  componentWillUpdate: function(newProps, newState){

  },

  render: function(){
    return (
      <div class='counter'>
        <input type='text'>Enter a number here</input>
      </div>
    );
  }

});

module.exports = Counter;
