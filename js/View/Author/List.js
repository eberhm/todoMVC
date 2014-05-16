define('App/View/Author/List',
    ['jquery'],
    function($) {
    var View = function(scope, model) {
        this.scope = $(scope);
        this.model = model;
    };

    View.prototype = {
        init: function() {
            this.model.on('add', $.proxy(this.render, this));
            this.model.on('delete', $.proxy(this.render, this));
        },
        render: function() {
            this.scope.html('');
            var todoList = this.model.getTodoList(),
                res = {};
            for (var i in todoList) {
                var todo = todoList[i];
                if (!res[todo.autor]) res[todo.autor] = 0;
                res[todo.autor] ++;
            }

            for (var j in res) {
                this.scope.append('<li>' + j + ' (' + res[j] + ')</li>');
            }
        }
    };

    return View;
});