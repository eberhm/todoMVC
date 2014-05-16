define('App/Mixins/EventEmitter',
    function(){
    var Emitter = function() {
        this.handlers = {};
    };

    Emitter.prototype = {
        on: function(eventName, handler) {
            this.getHandlers(eventName).push(handler);
        },
        trigger: function(eventName, parms) {
            var handlers = this.getHandlers(eventName);
            for (var i in handlers) {
                handlers[i].apply(null, parms);
            }
        },
        getHandlers: function(eventName) {
            this.handlers[eventName] = (this.handlers[eventName] || []);
            return this.handlers[eventName];
        }
    };

    return Emitter;
});