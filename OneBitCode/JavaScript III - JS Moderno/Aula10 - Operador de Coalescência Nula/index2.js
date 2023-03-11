let a = 0;

let b = a || 42;

console.log({a, b});
//retorna {a:0 e b:42}

//Uso: Verifica se uma variavel tem valor, se não, coloca um valor padrão
//PORÉM, e se quisermos considerar o 0 como um valor padrão? Ai entra o "??", ficando:

let c = a ?? 42;
//Se A tiver algum conteudo, esse será o valor de C. Se não, o seu valor será 42

console.log({a, c});
//retorna {a:0 e c:0}