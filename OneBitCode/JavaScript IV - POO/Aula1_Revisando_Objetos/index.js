//Objeto como vimos ate agora:
const book = {
    title: "Rainha Vermelha",
    paginas: 468,
    estoque:20,
    tags: ["fantasia","misterio"],
    autor: {
        nome: "Jose da silva"
    },
    addEstoque(quantidade){
        this.estoque += quantidade
    }
}


//Metodo construtor:
function Livro(titulo, paginas,tags,autor){
    this.titulo = titulo;
    this.paginas = paginas;
    this. tags = tags;
    this.autor = autor;
    this.publicado = false;
    this.estoque = 0;
    this.addEstoque = function addEstoque(quantidade){
        this.addEstoque += quantidade;
    }
    this.save = function(){
        //salvar no banco
    }
}


const autor = {nome: "Christopher Paolini"}
const tags = ["fantasia", "aventura"]

let Eragon = new Livro("Eragon",468,tags,autor);

console.log(Eragon)
