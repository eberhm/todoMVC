define(['backbone', 'jquery'], function(Backbone, $) {
    return Backbone.View.extend({
        initialize: function() {
            this.scope = $(this.el);
        },
        render: function() {
            this.scope.append(this.template(this.model));
        },
        template: function(todo) {
            var that = this;
            var elem = $('<li>' + todo.get('titulo') + ', <span class="borrar">X</span></li>');
            elem.on('click', '.borrar', function() {
                that.trigger('delete', [that.model]);
            });

            return elem;
        }
    });
});
