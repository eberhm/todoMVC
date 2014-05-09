var App = (function() {
    return {
        init: function() {
            var cont = TodoController;



            cont.addTodo(new Todo("title1", "Marka"));
            cont.addTodo(new Todo("title2", "Mark"));
            cont.addTodo(new Todo("title3", "Mark"));
            cont.addTodo(new Todo("title4", "Mark"));
            cont.addTodo(new Todo("title5", "Mark"));

            var view = new ListView("#list");

            view.render(cont.getTodoList());

        }
    };
})();

$(function() {
    App.init();
});
