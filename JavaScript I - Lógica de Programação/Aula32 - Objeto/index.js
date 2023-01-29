//Assim como em arquivos JSON utiliza do recuros chave - valor

let nome = "prop";

let objeto = {};

objeto.prop = "Olá Teste";

//Se você chamar:
objeto;
/*Efeito similar a:
Objeto{
    prop:"Ola teste"
}
*/

//Se você chamar: 
objeto.prop;

//"Ola Teste"
//A marcação com o . (ponto) faz selecionar a propriedade presente naquele objeto


//Também é possivel fazer esses tipos de comparação:
objeto.prop === objeto["prop"];
//Retorno : true

objeto.prop === objeto[nome];
//retorno : true

objeto.prop === objeto["pro" + "p"];
//retorno : true

//Essas combinações permitem criar propriedades dinamicamente


//*************************************************** */

//Outra possibilidade interessante;

let abreviador = "log";

console[abreviador]("Imprime na tela");
//retorno : Imprime na tela
//Isso é capaz de permitir abreviarmos sentenças repetititvas entre outras coisas
//Deixando as coisas mais dinâmicas e flexiviveis

//************************************************ */

//Tipo de dado composto/complexo
//Não respeita ordem
let Pessoa = {};

Pessoa.idade = "27";
Pessoa.Tamanho = "185";
//Retorno : {idade: '27', Tamanho: '185'}

Pessoa.endereco = {
    Rua : "Rua tal",
    Numero : 45,
    Bairro : "Bairro tal"
}