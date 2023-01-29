

do{
    let op = prompt("Escolha dentre uma dentre as opções: " + "\n"
        +"1 - Opção A" + "\n"
        +"2 - Opção B" + "\n"
        +"3 - Opção C" + "\n"
        +"4 - Opção D" + "\n"
        +"5 - Encerrar"
    );

    switch(op){
        case '1':
            alert("A opção escolhida foi a A. ");
            break;

        case '2':
            alert("A opção escolhida foi a B. ");
            break;

        case '3':
            alert("A opção escolhida foi a C. ");
            break;
        case '4':
            alert("A opção escolhida foi a D. ");
            break;

        case '5':
            alert("A opção escolhida foi a de encerrar. ");
            break;

        default:
            alert("A opção invalida! ");
    }
  

}while(op !== '5')
    


