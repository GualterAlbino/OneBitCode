function dividir (num){
    console.log(num);
    if (num % 2 ===0){
        dividir(num/2)
    }else{
        return num;
    }
}

dividir(256);

//Na recursividade a primeira coisa a aser definida é a condição de parada

// !5 = 5*4*3*2*1
function Fatorial(num){
    console.log(num);
    if(num === 0){
        return 1

    }else if(num === 1){
        return 1
    }else{
        console.log(num + " * !" + (num - 1));
        return num * Fatorial(num - 1);
    }
}

console.log(Fatorial (5));