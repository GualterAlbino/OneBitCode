function execute() {
    return new Promise((resolvido,rejeitado) =>{
        console.log("Execução iniciada...")
        setTimeout(() => {

            if(true) {
                rejeitado("A promise foi rejeitada")
            } else {
                console.log("Executando...")
                resolvido('Resultado')
            }
            
        }, 1000 * 2) 
    })
}







execute().then((resultado) => {
    console.log(`A promise foi resolvida. O resultado foi ${resultado}`)

}).catch((err) =>{
    console.log(`Ocorreu o seguinte erro: ${err}`)

}).finally(() => {
    console.log("Finalizada.")

});

