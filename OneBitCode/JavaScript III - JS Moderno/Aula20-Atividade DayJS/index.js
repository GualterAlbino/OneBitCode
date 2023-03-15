var dayjs = require('dayjs');//Importação da biblioteca dayjs para manipulação de datas


function DataDeAniversario(Data){
    const Aniversario = dayjs(Data); //Passa o parâmetro para a função do DayJS que o trasnforma em uma data
    const Hoje = dayjs() //Faz com que a variavel "Hoje" recebe as informações do dia de hoje, inclusive a hora

    const IdadeEmAnos = Hoje.diff(Aniversario,'year'); //Funão DIFF que calcula a diferença entre datas pela unidade de medida selecionada entre o ''
    const ProximoAniversario = Aniversario.add(IdadeEmAnos + 1,'year')//Função que pega a data de nascimento da pessoa e soma +1 para descobrir o proximo aniversario
    const DiasParaProximoAniversario = ProximoAniversario.diff(Hoje,'day');

    console.log(`Idade: ${IdadeEmAnos} anos`);
    console.log(`O proximo aniversario será em: ${ProximoAniversario.format("DD/MM/YYYY")}`); //Dom o atributo ".format" é possivel definir o formato desejado para exibição da data
    console.log(`Faltam ${DiasParaProximoAniversario} dias para o proximo aniversario`)

}

DataDeAniversario("2003-01-17");

//Obs: Quanto a diferença de dias é sempre interessante somar 1 (+ 1), já que o dia de hoje é menor que 1, ele não o conta
//EXEMPLO: Se for meio dia 0,5 dia, ou seja, 0