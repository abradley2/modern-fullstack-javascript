/*
  These are methods exported to the app.methods namespace.
  They should all be constructor functions that return
  Backbone Models and Collections. See getPostCollection for
  an example.
*/

import getPostCollection from './getPostCollection.js';

export default {
  'getPostCollection': getPostCollection
}
