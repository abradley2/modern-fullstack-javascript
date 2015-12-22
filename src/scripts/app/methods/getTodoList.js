export default function getTodoList(){

  var TodoCollection = Backbone.Collection.extend({
    url: '/todos'
  });

  return new TodoCollection([]);

}
