/*
JSON - JavaScript Object Notation

Json é um formato de arquivo utilizado para troca de dados

É um formato compacto, representado em texto, de padrão aberto
e que trabalha com sistema de chave-valor


- " " Para nomear as chaves
- Tipos primitivos suportados para os valores:
(string,number,boolean,null)
- { } para definir grupos de propriedades (Objetos)
- [ ] para definir lista de dados(arrays)
- , para separar as propriedades

Utilizado para integrações pois é um padrão que todas utilizam para comunicação

*/

/*
exemplo de um json
const str = '{
 "name": "Gualter",
 "website":"null"   
}'


onde podemos trasnforma ele em um objeto do JS:

const obj = JSON.parse(str)

função parse() faz isso pra gente.


*/

JSON.parse(); //Converte uma string para objeto json-compatible
JSON.stringify();//Converte um objeto json-compatible para string