var Matriz = [[1,2,3],[4,5,6]];

console.log(Matriz);

//Diferentemente do habitual, para percorrer uma matriz em JS, nas colunas devemos usar Matriz[i].length para obter o resultadoc correto
for(let i = 0; i < Matriz.length; i++){
    for(let j = 0; j < Matriz[i].length; j++){
        console.log("\nPosição: [" + i + "] [" + j + "] = " + Matriz[i][j]);
    }
}