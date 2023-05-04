async function asyncSomar(a, b) {
   return a + b;
}

async function asyncSubtrair(a, b) {
   return a - b;
}

//Ou as duas executam juntas e com sucesso, ou nada feito

const ResultadoSomar = asyncSomar(50, 33);
const ResultadoSubtrair = asyncSubtrair(50, 33);

//Promisse.all recebe como parâmetro um ARRAY de funções
Promise.all([ResultadoSomar,ResultadoSubtrair])

.then(Resultados =>{
    console.log(Resultados);

})
.catch(err => {
    console.log(err)
})