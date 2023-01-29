//Escopo

//Let - Escopo de Bloco
//Var - Escopo Global

let pokemon = "Charmander"

function Evoluir(){
    pokemon = "Charmeleon";
    return pokemon;
}

console.log(pokemon); //Charmander
Evoluir();//Depois de chamar a função
console.log(pokemon);//Charmeleon


function AvaliarNota(Nota){
    if(Nota > 60){
        var Aprovado = true;
        let Situação = "Aprovado";

    }else{
        var Aprovado = false;
        let Situação = "Reprovado"
    }

    console.log(Nota);
    console.log(Aprovado);
    console.log(Situação);//Daria erro pois o SITUAÇÃO está declarado como LET, e seu escopo não é atendido ao chamar a função.
}

//AvaliarNota(83);
//AvaliarNota(49);


//Se declarar VAR ela carrega antes de tudo

//EVITAR O USO DE VAR, USAR SEMPRE O LET