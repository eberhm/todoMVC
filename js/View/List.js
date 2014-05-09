var ListView = (function() {
    var ListView = function(scope) {
        this.scope = $(scope);
    };
    ListView.prototype = {

        render: function(todoList) {
            this.scope.html('');
            for (var i in todoList) {
                var todo = todoList[i];
                this.scope.append('<li>' + todo.titulo + ', <span class="borrar">X</span></li>')
            }
        }
    };

    return ListView;
})();