class Livro {
    constructor(Titulo){
        this.Titulo = Titulo;
        this.Publicado = false;
    }

    Publicar(){
        this.Publicar = true;
    }

}

const RainhaVermelha = new Livro("Rainha Vermelha")
RainhaVermelha.Publicar();

console.log(RainhaVermelha);

//Instanceof verifica se um objeto é uma instância de uma classe
console.log(RainhaVermelha instanceof Livro);