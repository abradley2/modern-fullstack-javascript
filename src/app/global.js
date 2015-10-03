var AmpersandState = require('ampersand-state');

var Global = AmpersandState.extend({

  collections: require('./state/collections/index.js'),
  children: require('./state/models/index.js')

});

module.exports = new Global();
