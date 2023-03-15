const Hello = require('hello-world-npm')

console.log("Executando função alterando os script do Package.Json")

/*
Exemplo de como podemos executar a aplicação de forma mais simples:

-Maneira que vem
{
    "scripts:"{
        "test": "echo \ Error: no teste"
    }
}




-Exemplo de alteração

{
    "scripts:"{
        "hello": "npx hello-world-npm",
        "start": "node index.js"
    }
}


Podendo utilizar apenas "npm start" para incialziar o programa
*/