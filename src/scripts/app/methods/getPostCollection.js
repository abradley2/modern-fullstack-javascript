/*
  This is a small example method. A factory function
  that returns an instance of a backbone collection.
  Often it is useful to allow parameters to be passed
  to the function that edit certain attributes of the
  collection
*/

export default function getPostCollection(category){

  var PostCollection = Backbone.Collection.extend({
    url: '/posts' + (category ? '/' + category : '')
  });

  return new PostCollection([]);

}
