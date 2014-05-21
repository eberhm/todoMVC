define(['backbone', 'jquery'], function(Backbone, $) {

    return Backbone.View.extend({
        initialize: function() {
            this.scope = $(this.el);

            this.collection.on('add', $.proxy(this.render, this));
            this.collection.on('remove', $.proxy(this.render, this));
        },
        render: function() {
            var that = this;

            this.scope.html('');
            this.collection.forEach(function(todo) {
                that.scope.append(initRow(todo, that.collection));
            });
        }
    });

    function initRow(todo, collection) {
        var elem = $('<li>' + todo.get('titulo') + ', <span class="borrar">X</span></li>');
        elem.on('click', '.borrar', function() {
            collection.remove(todo);
        });

        return elem;
    }
});
