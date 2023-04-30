class Usuario {
    constructor(NomeCompleto,Email,Senha){
        this.NomeCompleto = NomeCompleto;
        this.Email = Email;
        this.Senha = Senha;
    }

    Login(Email,Senha){
        if((Email === this.Email) && (Senha === this.Senha)){
            console.log("Login efetuado com sucesso!")
        }else(
            console.log("Email ou senha incorretos!")
        )
    }
}

const Alberto = new Usuario("Alberto","alberto@gmail.com","123");

Alberto.Login("alberto@gmail.com","123");