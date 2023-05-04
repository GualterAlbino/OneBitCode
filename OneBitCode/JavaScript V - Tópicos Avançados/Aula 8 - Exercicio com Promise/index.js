//A função devolve o valor RESOLVIDO ou REJEITADO
function IMC(Peso,Altura) {
    return new Promise((Resolvido,Rejeitado) => {

        if(isNaN(Peso) || isNaN(Altura)){
            Rejeitado("Parâmetros informados não são do tipo numerico");

        }else{
            Resolvido(Peso / (Altura * Altura));
        }

    })
}

function ExibeIMC(Peso,Altura){
    IMC(Peso,Altura)

    .then((Resolvido) => {
        console.log(`O resultado do IMC foi: ${Resolvido}`);

        if(Resolvido <= 18,5){
            console.log("Magreza");
        }else if (Resolvido >= 18,5 && Resolvido <= 24,9){
            console.log('Normal');
        }else if (Resolvido >= 25 && Resolvido <= 29,9){
            console.log("Sobrepeso");
        }else if (Resolvido >= 30 && Resolvido <= 39,9 ){
            console.log('Obesidade');
        }else if (Resolvido >= 40){
            console.log("Obesidade grave");
        }else{
            console.log("Vazou")
        }
    })
    .catch((err) => {
        console.log(err);
    })

    console.log(`Calculando para ${Peso} e ${Altura}`);
}

ExibeIMC(71,1.74);
ExibeIMC(48,1.60);
ExibeIMC(71,"texto");
ExibeIMC(82,1.72);
ExibeIMC(120,1.80);
