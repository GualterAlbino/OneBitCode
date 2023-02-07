const main = document.querySelector('main'); //Para selecionarmos o dataset dele posteriormente (Tema claro e escuro)
const root = document.querySelector(':root');//Para manipular as cores do CSS
const input = document.getElementById('input');
const Resultado = document.getElementById('Resultado');

//Array que contem todas teclas permitidas
const TeclasPermitidas = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

//keydown = quando uma tecla é pressionanda
input.addEventListener('keydown', function(evento){
    evento.preventDefault();//Evita que o valor pressionado seja inserido antes da verificação das teclas permitidas

    //Se a tecla pressionada está continda no ARRAY de teclas permitidas
    if(TeclasPermitidas.includes(evento.key)){
        input.value += evento.key;
        return
    }

    //Se a tecla pressionada for a Backspace vai ir até a String Atual 
    //E cortar a parte que começa na posição inicial (0) e vai até o penultimo (-1), se fosse (-2) seria o antepenultimo
    if(evento.key === 'Backspace'){
        input.value = input.value.slice(0, -1);
    }

    //Se a telca pressionada for o Enter ele chama a função calcular
    if(evento.key ==='Enter'){
        Calcular();
    }
});

//Pegar todos os elementos com essa classe e pra cada um deles executar uma função (forEach)
document.querySelectorAll('.TeclaPressionada').forEach(function(TeclaPressionada){
    TeclaPressionada.addEventListener('click',function(){
        const value = TeclaPressionada.dataset.value; //constante value recebe  valor predefinido no HTML de data-value
        input.value += value; // o input recebe o valor da constante
    });
});

//Função do botão de limpar a tela
document.getElementById('Limpar').addEventListener('click',function(){
    input.value = ''; //Limpa os valores
    input.focus(); //Função focus faz com que o foco vá para o Input
});

document.getElementById('Igual').addEventListener('click',Calcular);

function Calcular(){

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


//Evento que verifica o Tema atual e troca o tema e suas respectivas variaveis do CSS para o tema oposto
document.getElementById('TrocarTema').addEventListener('click',function(){

    if(main.dataset.tema === 'Escuro'){
        //Acessando a classe root que criei no CSS e alterando suas propriedades e variaveis manualmente
       root.style.setProperty('--bg-color', '#f1f5f9');
       root.style.setProperty('--border-color', '#aaa');
       root.style.setProperty('--font-color', '#212529');
       root.style.setProperty('--primary-color', '#26834a');

       main.dataset.tema = 'Claro';

    }else{

        //Acessando a classe root que criei no CSS e alterando suas propriedades e variaveis manualmente
       root.style.setProperty('--bg-color', '#212529');
       root.style.setProperty('--border-color', '#666');
       root.style.setProperty('--font-color', '#f1f5f9');
       root.style.setProperty('--primary-color', '#4dff91');
       

       main.dataset.tema = 'Escuro';

    }

});


document.getElementById('CopiarParaTransferencia').addEventListener('click',function(evento){
    const BotaoCopiar = evento.currentTarget;

    //Se o texto do meu botão ainda for Copiar (Texto inicial) eu executo
    if(BotaoCopiar.innerText === 'Copiar'){
        BotaoCopiar.innerText = 'Copiado!'; //Altero o texto para copiado
        BotaoCopiar.classList.add('sucesso');//Atribui a propriedade sucesso do CSS ao botão (troca a cor pra verde)

        //Função do JS que permite copiar para area de trasnferencia = navigator.clipboard.write(variavel)
        window.navigator.clipboard.writeText(Resultado.value);

    //Se o usuario clicar novamente ele volta o botão pro seu estagio original 
    }else{
        BotaoCopiar.innerText = 'Copiar';
        BotaoCopiar.classList.remove('sucesso');
    }

});

