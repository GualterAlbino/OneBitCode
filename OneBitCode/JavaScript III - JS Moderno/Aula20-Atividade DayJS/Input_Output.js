
const readline = require('readline'); //Biblioteca que permite utilizar o INPUT e o OUTPUT

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Informe a data de nascimento da forma DDMMAAAA:",function(data){
    console.log("A data de nascimento é: " + data);
    
    leitor.close();
});