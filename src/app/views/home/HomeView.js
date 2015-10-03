var AmpersandView = require('ampersand-view');

class HomeView extends AmpersandView {

  constructor(){
    super();
    this.template = require('./homeView.html');
    this.events = {

    }
  }

}

module.exports = HomeView;
