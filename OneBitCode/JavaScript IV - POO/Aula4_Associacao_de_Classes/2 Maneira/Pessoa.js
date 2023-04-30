const Endereco = require("./Endereco");

class Pessoa {
    constructor(Nome,Rua,Numero,Bairro,Cidade,Estado){
        this.pNome = Nome;
        this.pEndereco = new Endereco(Rua,Numero,Bairro,Cidade,Estado)
    }
}

module.exports = Pessoa;
//Commom JS