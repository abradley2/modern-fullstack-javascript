class AboutView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (<div>
      <h3>This is the about View</h3>
      <a href='#home'>Home</a>
    </div>);
  }
}

export default Backbone.View.extend({
    template: '<div id="about-container"/>',

    render: function(){
      this.$el.html(this.template);
      ReactDOM.render(<AboutView/>,this.$el.find('#about-container')[0]);
    },

    remove: function(){
      ReactDOM.unmountComponentAtNode(this.$el.find('#about-container')[0]);
      this.$el.empty();
    }
});
