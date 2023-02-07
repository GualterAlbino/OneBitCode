let Op = "";
let Contador = 0;

let Imovel = {
    NomeDoProprietario : "",
    QtdQuartos : "",
    QtdBanheiros : "",
    Garagem : ""
}
let ListaDeImoveis = [];

do{
    Op = prompt("Existem " + Contador + "imoveis até o momento. " + "\n\n"
    + "1 - Adicionar um novo imovel" + "\n"
    +"2 - Consultar imoveis" + "\n"
    +"3 - Sair");

    switch(Op){
        case "1":
            let Imovel = {};
            Imovel.NomeDoProprietario = prompt("Informe o nome do proprietario: ");
            Imovel.QtdQuartos = prompt("Quantidade de quartos: ");
            Imovel.QtdBanheiros = prompt("Quantidade de banheiros: ");
            Imovel.Garagem = prompt("Possui garagem: ");
            ListaDeImoveis.push(Imovel);
            Contador++;
            break;
        case "2":
            for( let i=0; i < ListaDeImoveis.length; i++){
                alert(
                    "Imovel" + (i + 1) 
                    + "\nProprietario: " + ListaDeImoveis[i].NomeDoProprietario 
                    + "\nQuartos: " + ListaDeImoveis[i].QtdQuartos
                    + "\nBanheiros: " + ListaDeImoveis[i].QtdBanheiros
                    + "\nGaragem: " + ListaDeImoveis[i].Garagem
                );
            }
            break;
        case "3":
            alert("Finalizando...");
            break;
        default:
            alert("Opção Invalida");
    }

}while(Op !== "3");








