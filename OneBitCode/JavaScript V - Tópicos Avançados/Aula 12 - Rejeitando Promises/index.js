async function asyncSomar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('Parâmetros informados não são do tipo numerico!')
    }
        return Promise.resolve( a + b);
 }
 
 async function asyncSubtrair(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('Parâmetros informados não são do tipo numerico!')
    }
        return Promise.resolve(a - b);
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