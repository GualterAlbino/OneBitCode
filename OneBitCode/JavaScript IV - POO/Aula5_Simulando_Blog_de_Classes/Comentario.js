class Comentario {
    constructor(autor,conteudo){
        this.autor = autor;
        this.conteudo = conteudo;
        this.criadoEm = new Date();//Classe nativa DATE que associa a data de criação
    }
}
module.exports = Comentario;