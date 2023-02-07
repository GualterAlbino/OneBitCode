function dobro (x){
    alert("O dobro de " + x + " é " + (x * 2));
}
//Caso eu a passe sem parâmetro
//NaN - Not a Number


function ola(nome = "mundo"){
    alert("Olá, " + nome + "!");
}
//ola("Gualter");

function soma(a,b){
    alert("O resultado da soma é: " + (a+b));
}

function CriarUsuario(nome, email, senha, tipo){
    const usuario = {
        nome: nome, //=> Tambem posso apenas colocar nome,  (Quando recebe o parâmetro)
        email: email,
        senha: senha,
        tipo: tipo
    }
   console.log(usuario);
} 
CriarUsuario("Gualter","gualter@gmail.com","12345","admin");

//É possivel passar um objeto como parâmetro de uma função:

const Pessoa = {
    nome : "",
    endereço: "",
    telefone: ""
}

function ObjetoComoParametro(Pessoa){
    Pessoa.nome
    Pessoa.endereço
    Pessoa.telefone
}

//Ao inves de fazer:

function MuitosParametros(Nome,endereço,telefone){
 //....
}

