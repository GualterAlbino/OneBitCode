/* 
Tecnica no JS que permite a uma função receber qualquer número (quantidade) de parâmetros
Além disso, permite a manipulação desses parâmetros
*/



//Soma todos os numeros de um array, passando o resultado da soma anterior,elemento atual e iniciação com 0
function soma (...numeros){
    return numeros.reduce((ResultadoAnterior,ElementoAtual)=> ResultadoAnterior + ElementoAtual, 0);
}

//Exemplo: soma(1,2,3,4,5,6);
//resultado: 6
//Podendo colocar quantos numeros quiser




