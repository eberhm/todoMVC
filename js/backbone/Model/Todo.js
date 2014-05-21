define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            "titulo":  "sin titulo",
            "autor":     "none"
        }
    });
});
