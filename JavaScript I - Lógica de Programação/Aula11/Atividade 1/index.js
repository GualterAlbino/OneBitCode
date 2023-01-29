let nome = prompt("Digite seu primeiro nome: ");

let sobrenome = prompt("Digite seu sobrenome: ");

let campoDeEstudo = prompt("Digite seu campo de estudo: ");

let ano = prompt("Digite seu ano de nascimento: ");
ano = +(2022 - ano);

window.alert(
    "Recruta contratado com sucesso!\n"
    +"\nNome: "+nome
    +"\nSobrenome: "+sobrenome
    +"\nCampo de estudo: "+campoDeEstudo
    +"\nIdade: "+ano
    );