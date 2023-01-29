let valor1 = prompt("Digite o primeiro valor: ");

let valor2 = prompt("Digite o segundo valor: ");

//Converte os valores de string pra number
let x = parseFloat(valor1);
let y = parseFloat(valor2);


let soma = x + y;
let subtracao = x - y;
let multiplicacao = x * y;
let divisao = x / y;

alert(
    "Resultados:\n"
    +"\nSoma: " + soma
    +"\nSubtração: " + subtracao
    +"\nMultiplicação: " + multiplicacao
    +"\nDivisão: "+ divisao
);
