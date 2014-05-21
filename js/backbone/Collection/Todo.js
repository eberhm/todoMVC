define(['App/Model/Todo', 'backbone'], function(Todo, Backbone) {
    return Backbone.Collection.extend({
        model: Todo,
        url: '/todos',
        getTodoList: function() {
            return this.models;
        }

    });
});
