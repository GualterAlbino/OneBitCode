let Lista = [1,2,3,4,5,6,7,8,9];
console.log(Lista);
//adicionar elementos
//push

//Tomos os metodos de ARRAY do JS retornarm o valor, podendo armazenar ele em uma variavel

Lista.push(11); //Adiciona um valor ao fim do array
console.log(Lista);


Lista.unshift("Teste");//Adiciona um valor ao inicio ?e ao fim da lista?
console.log(Lista);

const UltimoElemento = Lista.pop(); //remove o ultimo elemento 
console.log(Lista);
console.log(UltimoElemento);


Lista.shift();//remove o primeiro elemento

const PrimeiroElemento = Lista.shift(); 
console.log(PrimeiroElemento);


//Pesquisar por um elemento
const Pesquisa = Lista.includes(2);
//Pesquisa se há um valor e retorna V ou F


//IndexOF
//retorna a posição de um elemento
const indice = Lista.indexOf(2);
console.log(indice);


//Cortar e concatenar

//slice
const Parte = Lista.slice(0,4); //Copia os elementos dos indices 0,1,2,3 para esse novo array
console.log(Lista);
console.log(Parte);

const CorteReverso = Lista.slice(-4);//Copia os elementos de trás para frente por conta do (-)


const sociedade = Parte.concat(Lista,"Swain"); //Metodo para concatenar array
console.log(sociedade);


//Substituição dos elementos
//splice

const ElementosRemovidos = sociedade.splice(indice, 1 , "Vlad");
//Remove, substitui e retorna o elemento removido

console.log(sociedade);
console.log(ElementosRemovidos);


//Iterar sobre os elementos
for(let indice = 0; indice < sociedade.length; indice ++){
    const elemento = sociedade[indice];
    console.log(elemento + " se encontra na posição " + indice);

}

