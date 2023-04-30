const Autor = require("./Autor");



const Gualter = new Autor("Gualter");
const Publicacao = Gualter.escreverPost("Titulo do post", "Lorem Ipsum dolor...");

Publicacao.addComentario("Isaac", "Legal!");
Publicacao.addComentario("Joao","Interessante.");

console.log(Gualter);
console.log(Publicacao);

//Fazendo dessa forma, só foi preciso instancia a classe AUTOR e nenhuma outra mais
