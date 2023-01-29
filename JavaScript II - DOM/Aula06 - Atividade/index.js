function addPlayer(){
    const position = document.getElementById('position').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    
    const confirmation = confirm("Você confirma a escalação de:" + "\n"
    + "Nome: " + name + "\n"
    + "Posição: " + position + "\n"
    + "Numero da Camisa: " + number + "\n");

    if(confirmation){
        const teamList = document.getElementById('teamList');
        const playerItem = document.createElement('li');
        playerItem.id = 'player-' + number;
        playerItem.innerText = position + ": " + name + "(" + number + ")";
        teamList.appendChild(playerItem);

        document.getElementById('position').value = '';
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
    }


}

function removePlayer() {

    const number = document.getElementById('numberToRemove').value;
    const playerToRemove = document.getElementById('player-' + number);
    // playerToRemove.remove()  --> Outra forma de usar removendo apenas o elemento filho

    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + '?');

    if(confirmation){
        document.getElementById('teamList').removeChild(playerToRemove);
        document.getElementById('numberToRemove').value ='';
    }
}

/*
function Escalar(){
    const Times = document.getElementById('Times');

    const Jogador = document.createElement('h3')
    Jogador.innerText = 'Jogador';

    const ul = document.createElement('ul');

    const posicaoLi = document.createElement('li');
    posicaoLi.innerText = 'Posição: ';
    const posicaoInput = document.createElement('input');
    posicaoInput.type = 'text';
    posicaoInput.name = 'posicao';
    posicaoLi.appendChild(posicaoInput);
    ul.appendChild(posicaoLi);
    ul.appendChild(document.createElement('br'));

    const nomeLi = document.createElement('li');
    nomeLi.innerText = 'Nome: ';
    const nomeInput = document.createElement('input');
    nomeInput.type = 'text';
    nomeInput.name = 'nome';
    nomeInput.appendChild(nomeLi);
    ul.appendChild(nomeInput);
    ul.appendChild(document.createElement('br'));

    const camisaLi = document.createElement('li');
    camisaLi.innerText = 'Numero da camisa: ';
    const camisaInput = document.createElement('input');
    camisaInput.type = 'text';
    camisaInput.name = 'camisa';
    camisaInput.appendChild(camisaLi);
    ul.appendChild(camisaInput);
    ul.appendChild(document.createElement('br'));

    const confirmarLi = document.createElement('li');
    confirmarLi.innerHTML = '<button onclick="confirmar()">Confirmar<\button>';
    confirmarLi.name = 'confirmar';
    ul.appendChild(confirmarLi);
    
    Times.append(h3,ul);
    


}
*/