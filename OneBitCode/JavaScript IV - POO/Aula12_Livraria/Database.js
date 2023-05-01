module.exports = class Database {

    #storage = {
        autores: [],
        livros: [],
        posters: [],
        pedidos: [],
        usuarios: []
    }

    pesquisa(chave) {
        return this.#storage[key]
    }

    salvarAutor(autor) {
        this.#storage.push(autor);
    }
}
    
