var App = (function() {
    return {
        init: function() {
            var cont = TodoController;
            var view = new ListView("#list", cont);
            var form = new FormView('#todo-add-btn', cont);

            form.init();
            view.init();
        }
    };
})();

$(function() {
    App.init();
});
