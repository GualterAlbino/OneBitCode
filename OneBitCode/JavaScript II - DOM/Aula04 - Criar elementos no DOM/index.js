function addInput(){
    const ul = document.getElementById('inputs');

    const newLi = document.createElement('li'); //Criando uma TAG toda vez que chamar a constante "newLi"
    newClassName = 'list-item'; //Já cria o elemento com essa classe
    newLi.innerText = 'Novo input: ' //Permite adicionar texto dentro da TAG que foi criada

    const newInput = document.createElement('input')//Vai criar um novo input vazio
    newInput.type = 'text'; //Cria o input com o tipo "text"
    newInput.name = 'input'; //Da a esse novo inpur o nome de "input"

    //Nesse metodo eu passo o elento PAI e colocando elemento FILHO dentro dele
    newLi.appendChild(newInput);

    ul.appendChild(newLi);


    //Com isso eu adcionei o input na LI e a LI na UL para seguir a estrutura padrão de:

    /* Simulação do que foi feito de forma "automatica":
        <ul>
            <li>
                <input type="text" name="input">
            </li>
        </ul>
    */

}

window.dom