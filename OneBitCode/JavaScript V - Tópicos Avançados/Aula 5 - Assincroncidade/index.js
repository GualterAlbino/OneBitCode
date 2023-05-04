function passo2() {
    console.log('Passo 02')
}

console.log('Passo 01')

passo2();

setTimeout(() => {
    console.log("Passo 03");
},1000 * 1)

console.log('Passo 04')
