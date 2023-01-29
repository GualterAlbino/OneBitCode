let carteira = prompt("Quanto de dinheiro você tem?");
carteira = parseFloat(carteira); //Convertendo STRING em FLOAT
let op = " ";

do{
    op = prompt("Atualmente você tem R$ " + carteira + ". Escolha o que deseja fazer \n" 
    +"1 - Adicionar mais diinheiro;" + "\n"
    +"2 - Remover dinheiro" + "\n"
    +"3 - Sair"+"\n");

    switch(op){

        case '1':
            let valor_somado = prompt("Qual valor a ser somado a sua carteira? ");
            carteira += parseFloat(valor_somado);
            alert("Com isso, você possui R$ " + carteira + " guardado.");
            break;
        
        case '2':
            let valor_substraido = prompt("Qual valor a ser subtraido da sua carteira? ");
            carteira -= valor_substraido;
            alert("Com isso, você possui R$ " + carteira + " guardado.");
            break;
        
        case '3':
            alert("Você escolheu sair! ");
            exit(0);
            break;

        default:
            alert("Opção invalida!");

    }

}while(op !== 3)