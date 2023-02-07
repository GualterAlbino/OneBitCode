let Palavra = prompt("Digite uma palavra: ");

let ReversoDaPalavra = '';

let Flag;

for(let i = Palavra.length - 1 ; i >= 0; i-- ){
    ReversoDaPalavra += Palavra[i];
}

if(ReversoDaPalavra === Palavra){
    alert("São palindromos!");
}else{
    alert("Não são palindromos!\n" 
    +"A palavra em sua forma normal é: "
    +Palavra + "\n"
    +"E ao contrario é: "
    +ReversoDaPalavra);
}
