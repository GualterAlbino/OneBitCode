const Endereco = require("./Endereco");
const Pessoa = require("./Pessoa");

const Local = new Endereco("7 de Setembro", 33, "Centro", "Ubá", "Minas Gerais");
const Gualter = new Pessoa("Gualter", Local);
//Passado o objeto LOCAL como parâmetro para classe PESSOA

console.log(Gualter)

console.log(Gualter.Endereco.EnderecoCompleto())

//Por meio do metodo "main" foi possivel criar uma associação entre o objeto GUALTER e o LOCAL 
//que representam PESSOA e ENDERECO, respectivamente
//Obs: Ainda foi possivel chamar um metodo de ENDERECO com a instancia GUALTER