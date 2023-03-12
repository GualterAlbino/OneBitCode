export default function(evento){
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

};