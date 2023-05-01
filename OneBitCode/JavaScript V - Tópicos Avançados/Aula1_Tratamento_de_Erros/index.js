function Soma (a, b) {
    const PrimeiroNumero = Number(a);
    const SegundoNumero = Number(b);
    //isNaN - Verifica se é um numero
    if(isNaN(PrimeiroNumero) || isNaN(SegundoNumero)){
        //throw é lançar
        throw new Error('Parâmetros informados não são numericos!')
    }

    return PrimeiroNumero + SegundoNumero;
}

try {
    console.log(Soma(2,9));
    console.log(Soma(true,14)); //TRUE é considerado como 1
    console.log(Soma(undefined, 22));
    console.log(Soma(18, "0"));
    console.log(Soma(39, null));
    console.log(Soma(13, "zero"));

} catch (error) {
    console.log("Ocorreu um erro!");
    console.log(error.message); //Traz exatamante a mensagem de erro que ocorreu

} finally {
    console.log("Testando...")
}








