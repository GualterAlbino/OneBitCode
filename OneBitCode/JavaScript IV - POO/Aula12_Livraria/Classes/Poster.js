const Produto = require("./Produto");

module.exports = class Poster extends Produto {
    constructor(nome,descricao,altura,largura,preco,emEstoque){
        super(nome, descricao, preco, emEstoque);
        this.altura = altura;
        this.largura = largura;
        
    }
    
}