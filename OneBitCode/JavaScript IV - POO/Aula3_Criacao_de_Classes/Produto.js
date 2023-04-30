class Produto {
    constructor(Nome,Descricao,Preco,Estoque){
        this.Nome = Nome;
        this.Descricao =  Descricao;
        this.Preco = Preco;
        this.Estoque = Estoque = 0;
    }

    AddEstoque(Quantidade){
        this.Estoque += Quantidade;
    }

    CalcDesconto(Percentual){
        this.Preco = this.Preco - (this.Preco * (Percentual/100));
    }
}

let Caneca = new Produto("Caneca","Caneca Azul",1500);

Caneca.AddEstoque(10);
Caneca.CalcDesconto(10);
console.log(Caneca);