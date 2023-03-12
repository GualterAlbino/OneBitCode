/*
Para usar a modularização deve-se utilizar a sintaxe:

    module.exports = "nome do aquivo"

Para que o arquivo possa ser utilizado em outros locais


Depois deve-se criar uma váriavel que vai receber o arquivo de outro local da sefuinte forma:

    const "nome da variavel" = require("caminho do arquivo")

*/



function render(){
    console.log('Renderizando a interface da aplicação...')
}

module.exports = render;