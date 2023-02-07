function Somar (a,b){
    return a + b;
}

//Nesse exemplo, a variavel Operação recebe a função Somar sem utilizar os (), ou seja, ela 
//recebe a função, e não só o seu retorno
const Operacao = Somar;

const Subtrair = function (a,b){
    return a - b;
}

console.log(Subtrair(36, 13));

//As funções anonimas so podem ser usadas depois de suas variaveis serem declaradas