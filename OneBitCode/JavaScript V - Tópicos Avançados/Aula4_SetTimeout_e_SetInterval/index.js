console.log("Inciado.")

const ID = setTimeout(() => {
    console.log("3s se passaram...")
}, 1000 * 3)
//O parâmetro de tempo é passado depois da virgula em milisegundos
//A função retorna um ID

clearTimeout(ID);


let segundos = 0;

let ID2 = setInterval(() => {
    segundos += 1;
    console.log(`Se passaram ${segundos} segundos...`)

    if(segundos > 10) {
        clearInterval(ID2);
        console.log("Tempo esgotado")
    }

}, 1000 * 3);
//O parâmetro de tempo é passado depois da virgula em milisegundos
//A função retorna um ID