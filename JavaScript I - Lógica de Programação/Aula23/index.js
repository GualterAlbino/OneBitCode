const nome = prompt("Qual seu nome?");
let resposta = prompt("Já visitou alguma cidade? (S / N)");
let cidades = "\n";
let contagem = 0;



while(resposta === 'S'){

    let cidade = prompt("Qual nome dessa cidade?");

    //Concatenação de Strings em uma mesma variavel
    cidades += " - " + cidade + "\n";
    
    contagem++;
    resposta = prompt("Já visitou alguma outra cidade? (S / N)");


}

alert(nome + ", você visitou um toal de " + contagem + " cidades. Sendo elas: " + cidades);