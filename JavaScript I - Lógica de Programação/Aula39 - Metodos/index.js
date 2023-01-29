let Pessoa = {
    nome: "Isaac",
    idade: 26,
    dizerOla(){
        console.log("Olá, mundo! Meu nome é " + this.nome);
    }
}

//Para se referenciar ao proprio obejto usamos o THIS

//Icone da propriedade = Retangulo
//Icone do metodo = Cubo

console.log(Pessoa);

Pessoa.dizerOla();