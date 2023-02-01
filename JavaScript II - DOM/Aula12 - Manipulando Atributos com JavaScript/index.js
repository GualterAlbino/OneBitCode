const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function(){
    //input.value = 'Olá, mundo!';
    console.log(input.value);

    //input.value = input.value === '' ? 'Olá, mundo' : '';
    if(input.value === ''){
        input.value = 'Olá,mundo!';
    }

    console.log(input.value); //mostra o valor em tempo real
    console.log(input.getAttribute('value'))//mostra o valor pre-definido no HTML

    
});

//trocar de input para radio e vice versa
document.getElementById('type').addEventListener('click',function(){
    //input.type = input.type !== 'radio' ? 'radio' : 'text'

    if(input.type !== 'radio'){
        input.type = 'radio';
    }else{
        input.type = 'text';
    }

    //input.setAttribute('type','radio');
});

//Colocar o texto de fundo
document.getElementById('placeholder').addEventListener('click',function () {
    input.placeholder = 'Digite algo....';


});

//Desabilitar o input
document.getElementById('disable').addEventListener('click',function(){
    input.setAttribute('disabled', !input.disabled);
    //disabled é um atributo booleano
});

document.getElementById('data').addEventListener('click',function(){
    const data = input.dataset.somethingElse
    console.log("O valor do atributo data-something-else é:" + data);
    input.dataset.somethingElse = 'Algum outro valor'
    console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse);
});

input.attributes.disa