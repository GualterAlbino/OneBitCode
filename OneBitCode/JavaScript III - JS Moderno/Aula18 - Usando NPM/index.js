console.log(
    "A primeira coisa a se fazer é inicia o projeto com o comando:"
    + "npm init"
    + "o comando --save era utilizado antigamente para dizer que queria salvar a dependencia no PACKAGE JSON"
    + "O package-lock.json trava as versões dos arquivos"
    + "O comando --save-dev" + " salva bibliotecas que apenas estarão disponiveis no desenvolvimento"
    + "Ao realizar o DEPLOY já não mais estarão. EX: Identador"
);

//Usando o CommonJS para importar
const lodash = require("lodash");

console.log(lodash.isArray([]));
console.log(lodash.kebabCase("Gualter Albino"))

/*
--save-dev

Comando utilizado para instalar dependecias que só serão utilizadas no desenvovlimento e que "sairão" 
no DEPLOY. Ex: Identador de codigo


--global

Instala o pacote em nosso computador fazendo com que fique disponivel pra qualquer projeto




npm uninstall "nome do pacote" -Para remover pacotes

*/