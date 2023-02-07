

//Exemplo do SessionStorage (Armazenamento de sessão)
document.getElementById('sessionBtn').addEventListener('click', function () {

    const input = document.getElementById('session')

    
    //Objeto "sessionStorage" nativo do JS, com o atributo "setItem", onde passamos 
    //uma chave (nome) e o valor a ser salvo
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

//Exemplo de como podemos visualzar a informação armazenada
document.getElementById('readSesssion').addEventListener('click', function () {

    //Para obter a informação passamos apenas a chave (nome)
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info)
})

/*-------------------------------------------------------------------------------------------- */

//Exemplo de LocalStorage(Armazenamento Local)
document.getElementById('localBtn').addEventListener('click',function(){

    const input = document.getElementById('local');
    localStorage.setItem('text',input.value);
    input.value = '';

})

//Exemplo de como podemos visualziar a informação armazenada
document.getElementById('readLocal').addEventListener('click',function(){
    const text = localStorage.getItem('text');
    alert("A informação é: " + text);
});

/*-------------------------------------------------------------------------------------------- */

document.getElementById('cookiebtn').addEventListener('click',function(){

    const input = document.getElementById('cookie');

    const cookie = 'info=' + input.value + ';';
    const expiration = 'expires' + new Date(2023,02,02) + ';'; //Expiração do cookie
    const path = 'path=/;'

    document.cookie == cookie + expiration + path
    input.value = '';
    console.log(document.cookie);

});
document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2022, 8, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
  })
  
document.querySelector







