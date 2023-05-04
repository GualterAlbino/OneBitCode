const numeros = [4, 9, 5, 13, 77]

async function asyncQuadrado(x){
  return x * x
}

//A função MAP vai retornar um ARRAY de Promises 

Promise.all(numeros.map(numero => asyncQuadrado(numero)))

.then(Quadrados => {
    console.log(Quadrados);
})

.catch(err => {
    console.log(err);
})