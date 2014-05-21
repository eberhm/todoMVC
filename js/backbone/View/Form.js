define('App/View/Form',
    ['backbone', 'jquery'],
    function(Backbone, $) {
        return Backbone.View.extend({
            initialize: function() {
                var that = this;
                this.scope = $(this.el);
                this.scope.on('click', '#todo-add-btn', function() {
                    var title = that.scope.find('#todo-title').val();
                    var author = that.scope.find('#todo-author').val();

                    that.collection.add({titulo: title, autor: author});
                });
            }
        });
});