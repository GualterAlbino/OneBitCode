const RegistrarButton = document.getElementById('RegistrarButton');

function Registrar(ev){
    console.log(ev);
    //const Nome = ev.currentTarget.parentNode.children.NomeInput.value;
    const Senha = ev.currentTarget.parentNode.children.SenhaInput.value;
    const Confirma = ev.currentTarget.parentNode.children.ConfirmaInput.value;

    if (Senha === Confirma){
        alert("Usuario criado com sucesso!")
    }else{
        alert("As senhas não coincidem!")
    }

}

RegistrarButton.addEventListener('click', Registrar);



//const RemoverButton = document.getElementById('RemoverButton');

function Remover() {
    RemoverButton = document.removeEventListener('click', Remover);
    alert("Evento removido!")
}








/*Também poderia ter criado uma função anonima:

RegistrarButton.addEventListener('click',function(){
    alert("Clicou no botão!")
})

*/




/*
function Registrar(element){

    const Nome = element.children.NomeInput.value;
    const Senha = element.children.SenhaInput.value;
    const Confirma = element.children.ConfirmaInput.value;

    if (Senha === Confirma){
        alert("Usuario criado com sucesso!")
    }else{
        alert("As senhas não coincidem!")
    }

}
*/