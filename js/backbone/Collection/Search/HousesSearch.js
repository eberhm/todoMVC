define(['backbone', 'App/Collection/Filters'], function(Backbone, Filters) {
    return new Backbone.Collection.extend({
        initialize: function() {
            this.filters= new Filters();
            this.filters.add({'name': 'price'});
            this.filters.add({'name': 'm2'});
            this.filters.add({'name': 'rooms'});

            this.filters.on('change', function() {
                that.trigger('filterChanged', arguments);
            });
        },
        setFilter: function(name, value) {
            this.filters.getByName(name).set('value', value);
        },
        removeFilter: function(name) {
            this.filters.getByName(name).set('value', null);
        }
    });
});
