var ListaDeCartas = [];
var Opcao = '';
var Carta;


do{

    Opcao = prompt("Atualmente as seguintes cartas estão no baralho: "
    + ListaDeCartas.length + "\n"
    +"Selecione o que deseja: " + "\n"
    +"1 - Adiconar uma carta" + "\n"
    +"2 - Remover uma carta" + "\n"
    +"3 - Sair");

    switch(Opcao){
        case "1":
           Carta = prompt("Infome a carta que deseja adicionar: ");
           ListaDeCartas.push(Carta);
           break;
        case "2":
            Carta = ListaDeCartas.pop();
            if(!Carta){
                alert("Não há cartas no baralho!")

            }else{
                alert("A carta removida foi: -" + Carta);  
            }
            break;
        case "3":
            alert("Finalizando...");
            break;
        default:
            alert("Opção invalida! ");
           
    }   


}while(Opcao !== "3");