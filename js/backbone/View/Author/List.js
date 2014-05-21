define(['backbone'], function(Backbone) {
    return Backbone.View.extend({
        initialize: function() {
            this.scope = $(this.el);

            this.collection.on('add', $.proxy(this.render, this));
            this.collection.on('remove', $.proxy(this.render, this));
        },
        getGroup: function () {
            var res = this.collection.groupBy(function (item) {
                return item.get('autor');
            });
            return res;
        },
        render: function() {
            this.scope.html('');
            var res = this.getGroup();

            for (var j in res) {
                this.scope.append('<li>' + j + ' (' + res[j].length + ')</li>');
            }
        }
    })
});