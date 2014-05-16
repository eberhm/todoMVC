require.config({
    shim: {
        'jquery' : {
            deps: [],
            exports: 'jQuery'
        }
    },
    paths: {
        'App' : '/js',
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min'
    }
});

define('App/main',
    [
        'App/Controller/Todo',
        'App/View/List',
        'App/View/Form',
        'App/View/Author/List'
    ],
    function(TodoController, ListView, FormView, AuthorsListView) {
    return {
        init: function() {
            var view = new ListView("#list", TodoController);
            var form = new FormView('#todo-add-btn', TodoController);
            var view2 = new AuthorsListView("#author-list", TodoController);

            form.init();
            view.init();
            view2.init();
        }
    };
});

require([
    "App/main",
    "jquery"
], function(App, $) {
    $(function() {
        App.init();
    });
});