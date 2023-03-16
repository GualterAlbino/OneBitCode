console.log(`WebPack - Empacotador de Codigo Estatico
Tem o obejtivo de empacotar todos os modulos de um projeto gerando arquivos 
estaticos contendo tudo o que a aplicação precisa para funcionar. Pega todo o conteudo
da aplicação e junta tudo isso em um pacote que pode ser servido estaticamente.


Ele ajuda com a pasta node_modules ao fazer o deploy. Pega o arquivo principal (main) e 
analisa todas as dependências desse ponto principal e junta tudo em um arquivo contendo tudo o que
a aplicação precisa pra funcionar ao fazer o deploy

https://webpack.js.org/

`);

console.log(    
`
Pontos chave do webpack:
-Entry : Pontos de entrada de onde o webpack procurará por arquivos para empacotar
 (Arquivo inicial de onde ele procura as dependencias, o arquivo MAIN)

-Output: A saida é o resultado do processo de empacotamento dos modulos

-Loaders: Ferramentas para transformar os modulos. Por padrão o WebPack só entende JS e JSON, 
os loaders permitem que ele entenda outros tipos de arquivos  (CSS,JPG,Babel e etc...)

-Plugins: Sao utilizados para realizar tarefas mais elaboradas que os loaders não fazem









`

);

