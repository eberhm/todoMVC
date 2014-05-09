var TodoController = (function() {

    var todoList = [];
    return {
        addTodo: function(todo) {
            todoList.push(todo);
        },

        getTodoList: function() {
            return todoList;
        },

        removeTodo: function(todo) {
            for (var i in todoList) {
                if (todoList[i] == todo) {
                    delete todoList[i];
                }
            }
        }
    }
})();