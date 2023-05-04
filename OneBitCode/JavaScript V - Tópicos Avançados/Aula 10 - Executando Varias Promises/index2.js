const numeros = [4, 9, 5, 13, 77]

function asyncQuadrado(x){
    return new Promise((Resolvido,Rejeitado) =>{
        Resolvido(x * x)
    })
}

//A função MAP vai retornar um ARRAY de Promises 

Promise.all(numeros.map(numero => asyncQuadrado(numero)))

.then(Quadrados => {
    console.log(Quadrados);
})

.catch(err => {
    console.log(err);
})