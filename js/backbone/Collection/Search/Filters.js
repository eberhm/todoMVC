define(['Backbone', 'App/Model/Filter'], function(Backbone, Filter){
    return Backbone.Collection.extend({
        model: Filter,
        getByName: function(name) {
            return this.filter(function(filter) {
                return filter.get('name') === name;
            });
        }
    });
});
