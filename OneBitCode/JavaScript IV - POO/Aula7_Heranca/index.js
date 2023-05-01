class Propriedade {
    constructor(area, preco){
        this.area = area;
        this.preco = preco;
    }

    getPrecoPorMetro(){
        return this.preco / this.area;
    }
}

class Casa extends Propriedade{}


const Terreno = new Propriedade(200,5000)
const CasaGualter = new Casa(200,5000)

//A casa por ter herdado de Propriedade possui o construtor de Propriedade

console.log(Terreno);
console.log(CasaGualter.getPrecoPorMetro());

console.log(CasaGualter instanceof Propriedade);
//O JS considera a classe filha como uma instancia da classe mãe


//Quando queremos que a classe filha possua suas proprias caracteristicas além das da classe
//que ela herda, utilizamos o SUPER indicando os parâmetros da classe mãe, mas sem causar repetição
//Podendo incluir os demais se necessario também
class Apartamento extends Propriedade{
    constructor(numero,area,preco){
        super(area,preco);
        this.numero = numero;

    }

    getAndar(){
        return this.numero.slice(0, -2);
    }
}

const apt = new Apartamento("201", 100, 160000);

console.log(apt);

//Dessa forma é possivel criar conceitos mais especificos em cada classe