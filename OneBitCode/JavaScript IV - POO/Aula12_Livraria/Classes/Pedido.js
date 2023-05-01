module.exports = class Pedido {
    #total
    #itens
    #usuario

    constructor(itens,usuario) {
        itens.array.forEach(({produto, quantidade}) => {
            if(quantidade > produto.emEstoque){
                throw new Error('Quantidade insuficiente em estoque!')
            }
        });

        this.#itens = itens;
        this.#usuario = usuario;
        this.#total = itens.reduce((soma, {produto, quantidade}) => soma + (produto.preco * quantidade), 0);
    }
}