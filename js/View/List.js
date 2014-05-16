define('App/View/List',
    ['App/View/Todo', 'jquery'],
    function(TodoView, $) {
        var ListView = function(scope, model) {
            this.scope = $(scope);
            this.model = model;
        };
        ListView.prototype = {
            init: function() {
                this.model.on('add', $.proxy(this.render, this));
                this.model.on('delete', $.proxy(this.render, this));
            },
            render: function() {
                this.scope.html('');
                var todoList = this.model.getTodoList(),
                    that = this;
                for (var i in todoList) {
                    var todoView = new TodoView(this.scope, todoList[i]);
                    todoView.on('delete', function(todo){
                        that.model.removeTodo(todo);
                    });
                    todoView.render();
                }
            }
        };

        return ListView;
});