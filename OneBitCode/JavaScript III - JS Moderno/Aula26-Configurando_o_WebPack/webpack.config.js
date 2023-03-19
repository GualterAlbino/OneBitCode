//Arquivo de configuração do webpack

const path = require('path')//Caminhos do Sistema Operacional

module.exports ={
    entry: {
        index: './src/index.js', //Especidifcando qual será minha entrada
        hello: './src/hello.js'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname,'public'), //Localdo Output
        filename: '[name].bundle.min.js'//Ao ter mais de uma entarda, devemos ter mais de uma saida
        //Para especificar isso nos nomes dos arquivos usamos o [name] para diferenciar
    }
}