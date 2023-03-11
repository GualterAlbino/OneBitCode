//Retorna seu operando do lado direito quando seu operador do lado esquerdo é NULL ou UNDEFINED

//Retorna seu  operadno do lado esquerdo quando seu operador do lado direito é NULL ou UNDEFINED

//A difrença dele para o || (OU) é que o OU dá um curto circuito em expressões FALSY, por exemplo
//o caso do número 0

//Seu operador é o "??"

const a = 0; //false

const b = null; //false

const c = "teste"; //true

console.log (a || b || c);
//O operador logico OU considera os valores 0 e NULL como falsos, retornando "teste"

console.log(a ?? b ?? c);
//Já o operador "??" considera apenas o NULL como falso, retornando 0