class Reserva {
    constructor(hospedes, quarto, dias){
        this.hospedes = hospedes;
        this.quarto = quarto;
        this.quarto = dias;
        this.total = dias * Reserva.taxaBase;
    }

    static taxaBase = 150

    static exibirTaxa() {
        console.log(`A taxa base é ${Reserva.taxaBase}`)
    }

    static get taxaPremium() {
        return Reserva.taxaBase * 1.5;
    }

    
}

Reserva.exibirTaxa();

const r1 = new Reserva(3, "201", 5);
console.log(r1)