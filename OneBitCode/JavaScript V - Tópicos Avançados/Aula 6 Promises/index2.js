function execute() {
    return new Promise((resolvido,rejeitado) =>{
        console.log("Execução iniciada...")
        setTimeout(() => {
            console.log("Executando...")
            resolvido('Resultado')
        }, 1000)
    })
}

const p = execute();

console.console.log(p);