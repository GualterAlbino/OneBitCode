function useLigthTheme(){
    document.body.style.color = '#212529'; //Cor da letra
    document.body.style.backgroundColor = '#f1f5f9'; //Cor do fundo
}

function useDarkTheme(){
    document.body.style.color = '#f1f5f9'; //Cor da letra
    document.body.style.backgroundColor = '#212529'; //Cor do fundo
}

function switchTheme(){
    document.body.classList.toggle('is-light');
    document.body.classList.toggle('is-dark');
    //toggle serve para alternar
}

document.getElementById('lightBtn').addEventListener('click',useLigthTheme);
document.getElementById('darkBtn').addEventListener('click',useDarkTheme);
document.getElementById('switchBtn').addEventListener('click',switchTheme);