var ListaDeVagas = [];



function Menu(){

    return prompt("Escolha uma opção:" + "\n"
    +"1 - Listar vagas disponíveis" + "\n"
    +"2 - Criar uma nova vaga" + "\n"
    +"3 - Visualizar uma vaga" + "\n"
    +"4 - Inscrever um candidaro em uma vaga" + "\n"
    +"5 - Excluir uma vaga" + "\n"
    +"6 - Sair" + "\n");

}

function CriarVaga(){

    let Nome = prompt("Informe um nome (titulo) para a vaga:");
    let Descricao = prompt("Informe uma descrição para a vaga:");
    let DataLimite = prompt("Informe a data limite para a vaga:");
    

    let confirmar = confirm("Confirma a inclusão da vaga com essas informações: " + "\n"
    + "Nome: " + Nome + "\n"
    + "Descrição: " + Descricao + "\n"
    + "Data Limite: " + DataLimite + "\n"
    );

    if(confirmar){

        let Vaga = {Nome , Descricao , DataLimite, Candidatos: [] };
        ListaDeVagas.push(Vaga);
        alert("Vaga criada!");
    }
}

function ListarVagas(){
    if(ListaDeVagas.length === 0){
        alert("Ainda não existem vagas cadastradas!");
        return 
    }

    
    let VagasEmTexto = ListaDeVagas.reduce(function(TextoFInal,Vaga,indice){
        TextoFInal += indice + ". ";
        TextoFInal += Vaga.Nome;
        TextoFInal += " (" + Vaga.Candidatos.length + " candidatos)" + "\n";
        return TextoFInal;
    }, "");

    alert(VagasEmTexto);
    
}

function ExibirVaga(){

    
    let indice = prompt("Informe o índice da vaga que deseja exibir:");
    if(indice >= vagas.length || indice < 0){
        alert("Indice invalido!");
        return
    }

    let Vaga = Vagas[indice];

    let CandidatosEmTexto = Vaga.Candidatos.reduce(function(TextoFinal,Candidato){
        return TextoFinal + "\n" + " - " + Candidato
    }, "");

    alert("Vaga nº " + indice  + "\n"
    + "Nome: " + Vaga.Nome + "\n"
    + "Descrição: " + Vaga.Descricao + "\n"
    + "Data Limite: " + Vaga.DataLimite + "\n"
    + "Quantidade de candidatos: " + Vaga.Candidatos.length + "\n"
    + "Candidatos inscritos: " + CandidatosEmTexto 
    );
}

function InscreverCandidato(){
    let Candidato = prompt("Informe o nome do candidato(a): ");
    let Indice = prompt("Informe o indcie da vaga para qual o(a) candidato(a) deseje se inscrever: ");
    let Vaga = Vagas[Indice];

    let confirmar = confirm(
    "Deseja inscrever o candidato " + Candidato + "na vaga " + Indice + "?" + "\n"
    + "Nome: " + ListaDeVagas.Nome + "\n"
    + "Descrição: " + ListaDeVagas.Descricao + "\n"
    + "Data Limite: " + ListaDeVagas.DataLimite + "\n"
    + "1 - Sim" + "\n"
    + "2 - Não" + "\n");

    if(confirmar){

        Vaga.Candidato.push(Candidato);
        alert("Inscrição realizada!");
    }

   
}

function ExcluirVaga(){
    let Indice = prompt("Informe o índice da vaga que deseja excluir:");
    let Vaga = Vagas[Indice];

    let confirmar = confirm(
        "Deseja excluir a vaga: " + Indice + "?" + "\n"
        + "Nome: " + ListaDeVagas.Nome + "\n"
        + "Descrição: " + ListaDeVagas.Descricao + "\n"
        + "Data Limite: " + ListaDeVagas.DataLimite + "\n"
       );

    if(confirmar){

        ListaDeVagas.splice(Indice,1);
        alert("Vaga excluida!");
    }
}

function Main(){
  
    do{
        
        switch ((Escolha = Menu())){
            case '1':
                ListarVagas();
                break;
            case '2':
                CriarVaga();
                break;
            case '3':
                ExibirVaga();
                break;
            case '4':
                InscreverCandidato();
                break
            case '5':
                ExcluirVaga();
                break
            case '6':
                alert("Finalizando...")
                break;
            default:
                alert("Opção invalida!")
                break;
        }
        
    
    }while (Escolha !== '6');



}
Main();



