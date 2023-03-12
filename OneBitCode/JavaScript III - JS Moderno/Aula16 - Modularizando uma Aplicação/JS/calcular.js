
export default function Calcular(){

    const Resultado = document.querySelector('#result')

    //No JS o codigo executa ate a parte que não tem erro, sendo assim, caso tenha algum erro ele 
    //Trava nessas duas linhas iniciais deixando a mensagem de erro na tela
    Resultado.value =  'ERROR';
    Resultado.classList.add('error');


    //A função eval executa o script que está em uma string (no caso nossa "equação" que está concatenada na string)
    //Faz o mesmo que o console do inspecionar elemento
    //Metodo extremamente perigoso em aplicações que lidam com dados
    const result = eval(input.value);//Variavel intermediara que recebe o calculo do eval
    Resultado.value = result;

    //Caso execute o eval, ele remove a classe de erro
    Resultado.classList.remove('error');
}