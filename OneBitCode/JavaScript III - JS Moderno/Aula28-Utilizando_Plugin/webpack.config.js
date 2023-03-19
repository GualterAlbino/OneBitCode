const MiniCssExtractPlugin = require('mini-css-extract-plugin')



module.exports = {
    entry: {

        index:'./src/index.js'
    },
    mode:'development',
    module: {
        rules: [{
            test: /\.css$/,
            //Indica qual ARQUIVO USAR
             //Expressões regulares são uma forma de analisar STRINGS
            //Essa regra vai fazer com que verifique todos os arquivos que tenham a extensão .css
            use: [MiniCssExtractPlugin.loader,'css-loader']
            //Indica qual LOADER USAR
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}