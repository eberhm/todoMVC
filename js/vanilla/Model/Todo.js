define('App/Model/Todo',
    function() {
    return function(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    };
});
