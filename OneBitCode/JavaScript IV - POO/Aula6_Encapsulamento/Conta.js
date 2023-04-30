class Conta {

    #senha;
    #saldo = 0;

    constructor(usuario){
        this.email = usuario.email;
        this.#senha = usuario.senha;
        this.#saldo;
    }

    getSaldo(email,senha){
        if((email === this.email) && (senha === this.#senha)){
            console.log(`O saldo é de ${this.#saldo}`)

        }else{
            console.log("E-mail ou senha incorretos!")
        }
    }
}

const Gualter  = {
    email: "gualter@gmail.com",
    senha: "123"
}

const ContaTeste = new Conta(Gualter);

console.log(ContaTeste);
console.log(ContaTeste.getSaldo("gualter@gmail.com","123"));

//Nesse exemplo foi criado dois atributos privados que só podem ser acessados por um metodo de 
//dentro da classe, sendo o GETSALDO.

//Nesse mesmo exemplo foi mostrado uma forma diferente de passar objetos como parâmetros