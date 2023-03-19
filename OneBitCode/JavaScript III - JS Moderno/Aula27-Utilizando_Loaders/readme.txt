

Instalação dos loaders para permitir empacotar o CSS junto com o JS:

npm install --save-dev style-loader 

npm install --save-dev css-loader

Depois de baixados, para que o WEBPACK o utilize, devemos ir no arquivo de configuração do webpack
e utilizar a tag "module"




Ao definir o ponto de entrada onde importamos tudo que vamos usar, ao usar o webpack, a partir
do ponto de entrada ele empacota