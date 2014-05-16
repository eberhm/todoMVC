define('App/View/Todo',
    ['App/Mixins/EventEmitter', 'jquery'],
    function(EventEmitter, $) {
        var TodoView = function(scope, model) {
            this.scope = $(scope);
            this.model = model;
        };
        TodoView.prototype = $.extend({
            render: function() {
                this.scope.append(this.template(this.model));
            },
            template: function(todo) {
                var that = this;
                var elem = $('<li>' + todo.titulo + ', <span class="borrar">X</span></li>');
                elem.on('click', '.borrar', function() {
                    that.trigger('delete', [that.model]);
                });

                return elem;
            }
        }, new EventEmitter());

        return TodoView;
});