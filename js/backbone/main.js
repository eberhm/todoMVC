require.config({
    shim: {
        'jquery' : {
            deps: [],
            exports: 'jQuery'
        }
    },
    paths: {
        'App' : '/js/backbone',
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
        'backbone': '/bower_components/backbone/backbone',
        'underscore': '/bower_components/underscore/underscore'
    }
});

define('App/main',
    [
        'App/Collection/Todo',
        'App/View/List',
        'App/View/Form',
        'App/View/Author/List'
    ],
    function(TodoCollection, ListView, FormView, AuthorsListView) {
    return {
        init: function() {
            repo = new TodoCollection();
            new ListView({el: "#list", collection: repo});
            new FormView({el: '#addTodo', collection: repo});
            new AuthorsListView({el:"#author-list", collection: repo});

//            repo.add({autor: 'yo'});
//            repo.add({autor: 'yo'});
//            repo.add({autor: 'yo'});
//            repo.add({});
//            repo.add({});
//            repo.add({});
//            repo.add({});
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