var TodoController = (function() {

    var todoList = [];
    return $.extend({
        addTodo: function(todo) {
            todoList.push(todo);
            this.trigger('add');
        },

        getTodoList: function() {
            return todoList;
        },

        removeTodo: function(todo) {
            for (var i in todoList) {
                if (todoList[i] == todo) {
                    delete todoList[i];
                    this.trigger('delete');
                    break;
                }
            }
        }
    }, new EventEmitter());
})();