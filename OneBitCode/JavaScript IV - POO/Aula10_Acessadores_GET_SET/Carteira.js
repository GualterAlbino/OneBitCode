class Carteira {
    #saldo
    #Nome

    constructor(){
        this.#saldo = 100.99 * 100;
    }

    get ObterSaldo(){
        return this.#saldo / 100;
    }

    set setNome(pNome){
        if(typeof pNome === 'string'){
            this.#Nome = pNome;
        } else {
            console.log("O nome deve ser do tipo STRING")
        }
    }

    get getNome(){
        return this.#Nome;
    }
}

const MinhaCarteira = new Carteira();

console.log(`O valor é: ${MinhaCarteira.ObterSaldo}`);

MinhaCarteira.setNome = 'Gualter';

console.log(`O nome é ${MinhaCarteira.getNome}`)