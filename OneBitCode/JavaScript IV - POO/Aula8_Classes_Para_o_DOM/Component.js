//export para utilizar no navegador
export class Component {
    #element = null

    //Tag - A tag HTML desse elemento
    //Parent - Variavel para armazenar qual a classe desse OBJ
    //Options - Atributos do HTML ex: ID,Classe e etc
    constructor(tag, parent, options) {
        this.tag = tag;
        this.parent = parent;
        this.options = options;
        this.build();
    }

    getElement(){
        return this.#element;
    }

    //Metodo para criar o elemento com as informações do constructor
    build() {
        this.#element = document.createElement(this.tag); //Criação de elemento do DOM utilizando a TAG passada
        Object.assign(this.#element, this.options); //Metodo estatico que pede como parâmetro um obejto e os elementos que vão ser copiados para ele
        return this
    }

    //Metodo que faz o elemento aparecer na tela
    render() {
        if (this.parent instanceof Component) {
            this.parent.getElement().append(this.#element)

        }else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}