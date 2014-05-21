require.config({
    shim: {
        'jquery' : {
            deps: [],
            exports: '$'
        },
        'zepto' : {
            deps: [],
            exports: '$'
        }
    },
    paths: {
        'App' : 'js/vanilla',
        'App/bb' : '/js/backbone',
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min'
    }
});