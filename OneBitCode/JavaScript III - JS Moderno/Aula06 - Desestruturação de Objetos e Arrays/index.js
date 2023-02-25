/*
Funcionaldiade que permite criar variaveis a partir de propriedades de um objeto ou 
elemento de um array.

-Com os objetos, as variaveus serão criadas com o mesmo nome da propriedade

-No caso do ARRAY, podemos atribuir qualquer nome para a variavel

*/ 

const Pessoa = {
    nome: "Luke",
    trabalho: "Fazendeiro",
    pais: ["Anakin", "Padme"]
}

//Forma normal de pegar a propriedade de um objeto
const nome = Pessoa.nome;

//Usando a desestruturção
const { trabalho, pais } = Pessoa;

console.log(nome,trabalho, pais);

//Desestruturação de Arrays
const [ Pai , Mae] = pais;
console.log(Pai,Mae);

function CriarUsuario(Pessoa){
    const ID = Math.floor(Math.random() * 9999);
    return{
        ID,
        nome: Pessoa.nome,
        trabalho: Pessoa.trabalho,
        pais: Pessoa.pais
    }
}

const user = CriarUsuario(Pessoa);
console.log(user);


//Usando a desestruturação de Objetos
function CreateUser({nome, trabalho, pais}){
    const ID = Math.floor(Math.random() * 9999);
    return{
        ID,
        nome,
        trabalho,
        pais
    }
}
