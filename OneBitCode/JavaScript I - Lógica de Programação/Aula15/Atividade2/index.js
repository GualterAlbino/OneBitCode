const nome1 = prompt("Qual nome do primeiro personagem? ");
const poder1 = prompt("Qual poder de ataque dele?");

const nome2 = prompt("Qual nome do segundo personagem? ");
const vida2 = prompt("Quantos pontos de vida ele tem? ");
const defesa2 = prompt("Qual poder de defesa dele? ");
const escudo2 = prompt("Ele possui escudo?");


let danoCausado = 0;

if(poder1 > defesa2 && escudo2 ==="Não"){
    danoCausado = (poder1 - defesa2);

}else if(poder1 > defesa2 && escudo2 ==="Sim"){
    danoCausado = (poder1 - defesa2) / 2;
}

vida2 -= danoCausado;

alert("O atacante causou :\n\n"
    +"Pontos de vida perdidos: "+vida2
    );

