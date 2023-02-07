let numero = prompt("Digite um numero para se obter sua tabuada: ");
let resultado = '';

for (let i = 0; i <= 20; i++){
    resultado += " -> " + numero + " * " + i + " = "+ ((numero * i)) + "\n";
  
}

alert("O resultado da tabuada de " + numero + " é:\n\n"+ resultado);