var ListView = (function() {
    var ListView = function(scope, model) {
        this.scope = $(scope);
        this.model = model;
    };
    ListView.prototype = {
        init: function() {
            var that = this;
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
})();