define(['backbone'], function(Backbone) {
   return Backbone.Model.extend({
       defaults: {
           'name': null,
           'value': null
       }
   });
});
