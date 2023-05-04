async function asyncSomar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('Parâmetros informados não são do tipo numerico!')
    }
        return Promise.resolve( a + b);
}



async function execute(){
    //Await - Esperar a execução de uma PROMISE
    const resultado = await asyncSomar(50,33);
    console.log(resultado)
}

//Await so funciona dentro de funções ASYNC
//AWAIT FAZ A FUNÇÃO SER SINCRONA E FIQUE "ESPERANDO"

execute()
