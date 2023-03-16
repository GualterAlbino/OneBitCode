Comando:
npm i --save-dev @babel/core @babel/cli @babel/preset-env

@babel/core : Nucleo do babel, parte que faz o procedimento de compilar

@babel/cli : Ferramenta de interação via terminal do babel core

@babel/preset-env : Aplica as configurações padrões do Babel para poupar tempo

(Como no node_modules tem o arquivo BIN, pdoemos usar o comando NPX para executar): npx babel index.js


Ao dar o comando: npx babel index.js

Ele imprime no console.log o codigo "refatorado"

Podemos especificar um arquivo de saida, como pro exemplo:

npx babel index.js --out-file dist.js

Vai criar o arquivo dist.js (Dist de distribuição)

Para utilizar o babel e especificar a refatoração do codigo para o JS antigo:


npx babel index.js --out-file dist.js --presets=@babel/preset-env


Para utilizar e transformar uma pasta inteira em uma nova refatorada;

npx babel src --out-dir dist --presets=@babel/preset-env

Como coloquei esse comando no script do package.json, basta executar:

npm run babel
