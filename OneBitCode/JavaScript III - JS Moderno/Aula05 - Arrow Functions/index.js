/*
Uma forma nova de escrever funções anonimas, utilizando o ( => )em vez de utilizar a 
palavra reservada FUNCTION , por isso o arrow do inglês flecha =>
*/

//Exemplo:

//Função normal
function Soma(a,b) {
    return a + b;
}
console.log(`Soma normal: ${soma(2,2)}`);

//Função Arrow
const ArrowSoma = (a,b) =>{
    return a + b;
}
console.log(`Arrow Soma: ${ArrowSoma(2,2)}`);

//Com uma unica variavel não precisa dos parenteses
const ArrowDobro = x =>{`O dobro de ${x} é ${x*2}`};


const multiplica = (a,b) => a * b;

const Lista = ['José', 'Maria', 'Antonieta', 'Madalena'];

//Função que filtra todos os nomes do ARRAY começados com M
const ComecaComM = Lista.filter(Nome => Nome[0] === 'M');
console.log(ComecaComM);



