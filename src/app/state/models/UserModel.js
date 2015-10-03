var AmpersandModel = require('ampersand-model');

class UserModel extends AmpersandModel {

  constructor(attributes, options) {
    super(attributes, options);
    this.parent = options.parent;
  }

}

module.exports = UserModel;
