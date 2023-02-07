function CalcularMedia(a,b){
    const media = (a + b) / 2
}

const resultado = CalcularMedia(7,2);
//Dessa forma não retorna nada 


function CriarProduto(nome,preco){
    const produto = {
        nome,
        preco,
        estoque : 1
    }
    return produto
}

const notebook = CriarProduto("Notebook Intel Core i3 8gb",2500);
console.log(notebook);

parseFloat();
//converte string para tipo numerico.

function AreaRetangulo(base,altura){
    return base * altura
}

console.log(AreaRetangulo(3,5));

function AreaQuadrado(lado){
    return (lado * lado);
}

console.log(AreaQuadrado(3,5));

function ola(){
    let texto = "...";
    texto = "olá, Mundo!"
    return texto;
    console.log("Esse codigo está inacessivel porque a função para no return");
}

