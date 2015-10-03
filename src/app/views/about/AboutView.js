var AmpersandView = require('ampersand-view');

class AboutView extends AmpersandView {

  constructor(){
    super();
    this.template = require('./aboutView.html');
    this.events = {

    }
  }

}

module.exports = AboutView;
