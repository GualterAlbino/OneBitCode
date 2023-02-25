/*
Operador que permiter espalhar os elementos de um objeto iteravel, como um array ou string
Utiliza três pontos da seguinte forma: ...iterableObject

Utilidade:
-Passar varios parametros de uma vez
-Transformar string em arrays
-Clonar objetos iteraveis

*/

const cidades = ["Noxus" , "Shurima" , "Targon" , "Freljord"];


//Sem o SPREAD
console.log(cidades);
//resultado:(4) ['Noxus', 'Shurima', 'Targon', 'Freljord']

//Com o SPREAD
console.log(...cidades);
//resultado: Noxus Shurima Targon Freljord

//Com o SPREAD em um unico elemento
console.log(...cidades[0]);
//resultado: N O X U S

//---------------------------------------

//Se fizermos apenas:

const CopiaCidades = cidades;
//Ele pegará por REFERENCIA o array das cidades, ou seja, não será uma copia de verdade
//Para fazer uma copia, podemos fazer:

const CloneCidades = [...cidades];
//Dessa forma será verdadeiramente uma copia, e não uma passagem por referencia

//Criando um objeto com base em um array:
const ObjCidade = {...cidades};
//Obs: Ele irá atribuir como propriedas 0,1,2...
