let FilaDeEspera = [];

let Op = "";

let NomeDoPaciente;
let PacienteConsultado;


do{
    let Pacientes = "";
    for(let indice = 0; indice < FilaDeEspera.length; indice++){
        Pacientes += (indice + 1) + "º - " + FilaDeEspera[indice] + "\n";
    }
    Op = prompt("Bem vindo ! "+ "\n\n"
    +"No momento temos " + FilaDeEspera.length + " pacientes na fila de espera" + "\n"
    +"Sendo eles: " + "\n" 
    +Pacientes + "\n"  
    +"Escolha dentre as opções o que deseja: " + "\n"
    +"1 - Novo paciente" + "\n"
    +"2 - Consultar Paciente" + "\n"
    +"3 - Sair");

    switch(Op){
        case '1':
            NomeDoPaciente = prompt("Qual o nome do paciente? ");
            FilaDeEspera.push(NomeDoPaciente);
            break;

        case '2':
            
            if(FilaDeEspera.length > 0){
                PacienteConsultado = FilaDeEspera.shift();
               alert("O nome do paciente a sair da fila é: -" + PacienteConsultado); 
            }else{
                alert("Não existem pacientes na fila!");
            }
            
            break
        case '3':
            alert("Encerrando...");
            
        default:
            console.log("Opção invalida!");
            break
        
    }

}while(Op != '3');