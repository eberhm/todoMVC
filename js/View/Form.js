var FormView = (function() {
    var FormView = function(scope, model) {
        this.scope = $(scope);
        this.model = model;
    };

    FormView.prototype = {
        init: function() {
            var that = this;
            this.scope.on('click', function() {
                var title = $('#todo-title').val();
                var author = $('#todo-author').val();

                that.model.addTodo(new Todo(title, author));
            });
        }
    }

    return FormView;
})();