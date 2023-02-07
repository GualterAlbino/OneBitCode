const personagens = [
    {nivel: 42, nome: "Thrall", raca:"Orc" , classe :"Xamã"},
    {nivel: 28, nome: "Garrosh", raca:"Orc" , classe :"Guerreiro"},
    {nivel: 35, nome: "Varok", raca:"Orc" , classe :"Guerreiro"},
    {nivel: 35, nome: "Uther", raca:"Humano" , classe :"Paladino"},
    {nivel: 26, nome: "Jaina", raca:"Humano" , classe :"Maga"},
    {nivel: 39, nome: "Tyrande", raca:"Elfo Noturno" , classe :"Sacerdotisa"},
    {nivel: 29, nome: "Muradin", raca:"Anão" , classe :"Guerreiro"},
];

//Map: Transformar um array em uma lista de strings. Exemplo: Nesse array acima é uma lista de objetos com dados.
//Se eu quiser apenas os nomes em uma lista de todo o conteudo posso utilizar o Array


//Map - Funcionamento interno:
const nomes = [];
for (let i = 0; i < personagens.length; i++){
    nomes.push(personagens[i].nome)
}

console.log(nomes);

//Map - Função
const Name = personagens.map(function(personagem){
    return personagem.nome;
})

//Filter - Filtra elementos especificos de um array e cria um novo.Exemplo: Quero apenas pessoas que tenham 
//28 anos de idade.Poderia utilizar essa função que criaria uma lista com o nome dessas pessoas

//Filter - Funcionamento interno
const orcs = [];

for (let i = 0; i < personagens.length; i++) {
    if(personagens[i].raca === 'Orc'){
        orcs.push(personagens[i]);
    }
    
}

const Orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc";
})

//Reduce  -Transforma um array em outro elemeto, seja objeto,matriz ou outro array mesmo


//Nesse exemplo a função vai somar o nivel de todos os personagens, sendo que:
//valorAcumulado = Variavel que vai recebendo a soma
//personagem.nivel: Campo do array que eu escolhi pra participar do reduce
//0 : Valor inicla da variavel valorAcumulado

const nivelTotal = personagens.reduce(function (valorAcumulado,personagem){
    return valorAcumulado + personagem.nivel;
},0);


//Reduce para agrupar por classe(Organizar os dados)
//Cria um novo array a partir do passado como parâmetro "filtrando" apenas o com certa caracteristica

const racas = personagens.reduce(function(valorAcumulado,personagem){
    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)

    }else{
        valorAcumulado[personagem.raca] = personagem
    }
    return valorAcumulado
},{})

// Sort - Ordenação
//Modifica o proprio ARRAY passado como parâmetro
//Para não modificiar o original basta criar um array recebendo o pricnipal
// 1,2 4,7 3,0

personagens.sort(function(a, b) {
    return a.nivel - b.nivel
    //Se o resultado da conta for positivo joga o A pra frente, e se B for positivo joga ele pra frente
});

//Nesse exemplo estamos ordenando o ARRAY por nivel dos personagens

console.log(personagens);

function t(){
    console.log("teste");
}


    
