/*
Para utilizar a modularização nativa do JS com o ESMODULES basta adicionar a palavra reservada

"exports" antes das funções e variaves, como por exemplo:

exports function soma(a,b){
    return a+b;
}

Depois basta ir no arquivo que deseja utilizar, basta usar a palavra reservada "import":

import {"nome da função" , "nome da variavel"} from "./caminho da função.js"

E por fim, basta ir no HTML onde chamou a tag <script> e adicionar :

    type="module"

*/

import {name,label,input,br} from "./functions.js"

console.log(name)
console.log(label({ for: 'fullname', textContent: 'Nome Completo'}));
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}));
console.log(br());