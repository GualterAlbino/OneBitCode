const Comentario = require("./Comentario");

class Post {
    constructor(titulo,corpo,autor){
        this.titulo = titulo;
        this.corpo = corpo;
        this.autor = autor;
        this.comentarios = [];
        this.criadoEm = new Date();
    }

    addComentario(autor,conteudo){
        this.comentarios.push(new Comentario(autor,conteudo));
    }
}

module.exports = Post;