function asyncSomar(a, b) {
    return new Promise((Resolvido, Rejeitado) => {
        if(typeof a !== 'number' || typeof b !== 'number'){
            Rejeitado("O parâmetro passado não é um número!");
        }else {
            Resolvido(a + b);
        }
    })
}

function asyncSubtrair(a, b) {
    return new Promise((Resolvido, Rejeitado) => {
        if (typeof a !== 'number' || typeof b !== 'number'){
            Rejeitado("O parâmetro passado não é um número!");
        }else {
            Resolvido(a - b);
        }
    })
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