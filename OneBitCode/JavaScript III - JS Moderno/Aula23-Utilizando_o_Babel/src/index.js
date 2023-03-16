

//Dois exemplos para o cálculo de média simples
let MediaSimples = (...valores) =>{
    let soma = 0;
    for(let i=0; i < valores.length;i++){
        soma +=valores[i];
    }
    return soma/valores.length;
}
console.log(`Media Aritimetica Simples: ${MediaSimples(1,2,3)}`);

//Ou então:
let MediaSimples2 = (...valores) =>{
    let Soma = valores.reduce((Acumulador,NumeroAtual) =>Acumulador,NumeroAtual,0)
    return Soma/valores.length;
}
console.log(`Media Aritimetica Simples: ${MediaSimples(1,2,3)}`);










let MediaPonderada = (...valores)=>{
    let Soma = valores.reduce((Acumulador,{NumeroAtual,Peso})=>Acumulador + (NumeroAtual*Peso),0);

    let SomaDosPesos = valores.reduce((Acumulador,NumeroAtual) => Acumulador + NumeroAtual.Peso,0);

    return Soma/SomaDosPesos;
}
console.log(`A Media Ponderada é: ${MediaPonderada(
    {NumeroAtual: 9, Peso: 3},
    {NumeroAtual: 7, Peso: 1},
    {NumeroAtual: 10, Peso: 1}
    
)}`);









let Mediana = (...valores) =>{

    valores.sort((a,b)=>a-b);
    //Função nativa "Math.floor() pega o numero inteiro mais proximo"
    let meio = Math.floor(valores.length/2);

    //Se o meio for IMPAR,  existe apenas um valor no meio
    if (valores.length % 2 !== 0){
        return console.log(`A mediana é: ${valores[meio]} `)

    //Se o valor for PAR, existem dois valores no meio, sendo o do calculo e seu antecessor    
    }else{
        return console.log(`A mediana é ${valores[meio-1]} e ${valores[meio]}`)
    }
    
}
Mediana(2,5,99,4,42,7);
Mediana(2,5,99,4,42);



let Moda = (...valores) =>{

    //[ [numero,quantidade], [numero,quantidade], [numero,quantidade] ]
    const Contador = valores.map(Numero =>[
        Numero,
        valores.filter(n => Numero === n).length
    ]);

    Contador.sort((a,b) => b[1] - a[1] )
    return Contador[0][0];
}
console.log(`Moda: ${Moda(1,1,5,4,9,7,4,3,5,2,4,0,4)}`);






