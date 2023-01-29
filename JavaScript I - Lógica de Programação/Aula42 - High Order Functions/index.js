//High Order Functions - Função de Alta Ordem
//Função onde passamos outra função como parametro

function calcular(a, b, operacao){
    console.log("Realizando uma operação.");
    const resultado = operacao(a,b);
    return resultado;

}

function somar (x, y){
    console.log("Realizando uma soma.");
    return x + y;
}

//Nesse caso eu passei a função "somar" como parâmetro, substituindo o termo OPERACAO que utilizei em "calcular"
calcular(3,5,somar)

//Também é possivel criar uma função anonima como um parâmetro da função
calcular(8,4, function(x,y){
    console.log("Realizando uma subtração.");
    return x - y;
})

//Nesse exemplo criamos uma função que recebe um elemento para imprimir na tela
function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão"];
//E aqui utilizamos os dados de um FOR para alimentar a função
for(let i = 0; i < lista.length; i++){
    exibirElemento(lista[i],i,lista);
}

//No lugar de utilizar o FOR podemos utilizar uma função que faz a mesma coisa:
//Como parâmetro sempre exige: Elemento , indice e o proprio Array
lista.forEach(exibirElemento);