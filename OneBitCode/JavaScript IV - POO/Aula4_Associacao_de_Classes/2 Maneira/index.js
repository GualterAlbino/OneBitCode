const Pessoa = require("./Pessoa");

const Gualter = new Pessoa("Gualter", "7 de Setembro", 33, "Centro", "Ubá", "Minas Gerais");


console.log(Gualter);
console.log(Gualter.pEndereco.EnderecoCompleto());
//Nessa forma, a associação foi feita dentro da classe PESSOA, onde a classe ENDEREÇO é passada
//como parâmetro

