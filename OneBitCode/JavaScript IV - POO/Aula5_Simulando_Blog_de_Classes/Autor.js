const Post = require("./Post.Js");

class Autor {
    constructor(nome){
        this.nome = nome;
        this.posts = [];
    }

    escreverPost(titulo,conteudo){
        //Pode-se passar o THIS como parâmetro, enviando o objeto inetrio
        const post = new Post(titulo, conteudo, this);
        this.posts.push(post);
        return post;
    }
}

module.exports = Autor;

