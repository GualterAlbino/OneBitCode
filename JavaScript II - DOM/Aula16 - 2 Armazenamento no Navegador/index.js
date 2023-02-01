//Exemplo do SessionStorage (Armazenamento de sessão)
document.getElementById('sessionBtn').addEventListener(click,function(){

    const input = document.getElementById('session');

    //Objeto "sessionStorage" nativo do JS, com o atributo "setItem", onde passamos 
    //uma chave (nome) e o valor a ser salvo
    sessionStorage.setItem('info',input.value);
    input.value;
});


//Exemplo de como podemops visualziar a informação armazenada
document.getElementById('readSession').addEventListener('click',function(){

    //Para obter a informação passamos apenas a chave (nome)
    const info = sessionStorage.getItem('info');

    alert("A informação salva é: " + info);

})

