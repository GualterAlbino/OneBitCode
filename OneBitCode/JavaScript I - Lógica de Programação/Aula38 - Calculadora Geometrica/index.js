


function Menu(){
    let Op = prompt("Informe qual cáculo deseja fazer:" + "\n"
    + "1 - Área do triângulo" + "\n"
    + "2 - Área do retângulo" + "\n"
    + "3 - Área do quadrado" + "\n"
    + "4 - Área do trapezio" + "\n"
    + "5 - Área do círculo" + "\n" 
    + "6 - Sair" + "\n");
    return parseInt(Op);
}

function AreaDoTriangulo(){
    let Base = prompt("Qual a base do trinagulo? ");
    let Altura = prompt("Qual altura do triangulo? ");
    alert("A área do triângulo é: " + (Base * (Altura/2) ));
}

function AreaDoRetangulo(){
    let Base = prompt("Qual a base do retangulo? ");
    let Altura = prompt("Qual altura do retangulo? ");
    alert("A área do retangulo é: " + (Base * Altura/2 ));
}

function AreaDoQuadrado(){
    let Lado = prompt("Qual a lado do quadrado? ");
    alert("A área do quadrado é: " + (Lado * Lado));
}

function AreaDoTrapezio(){
    let BaseMaior = prompt("Qual a base maior do trapezio? ");
    let BaseMenor = prompt("Qual a base menor do trapezio? ");
    let Altura = prompt("Qual altura do trapezio? ");
    alert("A área do trapezio é: " + ((BaseMaior * BaseMenor) * (Altura/2)));
}

function AreaDoCirculo(){
    let Raio = prompt("Qual o raio do circulo? ");
    alert("A área do circulo é: " + ((Raio * Raio) * 3.14));
}


do{

    switch(Menu()){

        case 1:
            AreaDoTriangulo();
            break;
        case 2:
            AreaDoRetangulo();
            break;
        case 3:
            AreaDoQuadrado();
            break;
        case 4:
            AreaDoTrapezio();
            break;
        case 5:
            AreaDoCirculo();
            break;
        case 6:
            alert("Finalizando...")
            break;
        default:
            alert("Opção Invalida!");
            break;
    }


}while(Menu() !== 6);