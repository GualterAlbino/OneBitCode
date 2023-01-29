function Registrar(element){
    const username = element.children.username.value;
    const password = element.children.password.value;
    const confirmpassword = element.children.confirmpassword.value;

    if (password === confirmpassword){
        alert("Usuario cadastrado com sucesso!")
    }else{
        alert("As senhas não conferem!")
    }

}