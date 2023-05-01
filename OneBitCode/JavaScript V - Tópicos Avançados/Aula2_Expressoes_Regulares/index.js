function NumeroDeTelefone(pNumero) {
    /*
    A função REPLACE é nativa do JS e permite substituir uma parte da sytring usando 
    expressões regulares

    \s  - Seleciona todos os espaços em branco
    a-z - Todas as letras minusculas de (A) a (Z)
    A-Z - Todas as letras maiusculas de (A) a (Z)
    g   - Seleciona toda a String
    " " - Substitui por nada(apagar)

    */
    const stringAjustada = pNumero.replace(/[\s a-z A-Z]/g,"")  

    /*
    A função MATCH é nativa do JS e serve para encontrar determinada coisa (comparar), 
    e devovle um array com a posição onde ocorreu o math[0] é a posição que você indica para ele 
    capturar nesse novo array que ele gera

    ?<=    - "Olhar para trás (inicio)" e procurar o simbolo "+"
    d{1,3} - Deveolver de 1 a 3 caracteres depois do "+"

    */
    this.codigoPais = stringAjustada.match(/(?<=\+)\d{1,3}/)[0]

    this.DDD = stringAjustada.match(/(?<=\()\d+(?=\))/)[0]

    this.Numero = stringAjustada.match(/(?<=\)).+/)[0]

}

console.log(new NumeroDeTelefone('+55 (32) 9 9876-5432'))
/*
Retorna:
NumeroDeTelefone { codigoPais: '55', DDD: '32', Numero: '99876-5432' }
*/


console.log(new NumeroDeTelefone('+1 (55) as555-8888'))
/*
Retorna:
NumeroDeTelefone { codigoPais: '1', DDD: '55', Numero: '555-8888' }
*/