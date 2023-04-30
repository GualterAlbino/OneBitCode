class Endereco {
    constructor(Rua,Numero,Bairro,Cidade,Estado){
        this.Rua = Rua;
        this.Numero = Numero;
        this.Bairro = Bairro;
        this.Cidade = Cidade;
        this.Estado = Estado;
    }

    EnderecoCompleto(){
        return `Rua ${this.Rua}, nº ${this.Numero}, ${this.Bairro}, ${this.Cidade}/ ${this.Estado}`;
    }
}

module.exports = Endereco
//Common JS