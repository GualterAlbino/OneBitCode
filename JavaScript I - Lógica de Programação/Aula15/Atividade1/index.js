let nome1 = prompt("Qual o nome do primeiro veiculo? ");
let velocidade1 = prompt("Qual a velocidade do primeiro veiculo? ");

let nome2 = prompt("Qual o nome do segundo veiculo? ");
let velocidade2 = prompt("Qual a velocidade do segundo veiculo? ");

if (velocidade1 > velocidade2){
    alert("O veiculo " + nome1 + " é o mais rápido!");
}else if (velocidade2 > velocidade1){
    alert("O veiculo " + nome2 + " é o mais rápido!");
}else if(velocidade1 === velocidade2){
    alert("Os dois veiculos possuem a mesma velocidade!");
}