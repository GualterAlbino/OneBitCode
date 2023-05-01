module.exports = class Produto {
    constructor(nome,descricao,preco,emEstoque = 0){
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.emEstoque = emEstoque;
    }

    addEstoque(pQuantidade) {
        this.emEstoque += pQuantidade;
    }

    removeEstoque(pQuantidade){
        this.emEstoque -= pQuantidade;
    }
}