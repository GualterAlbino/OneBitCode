/*
Existem algumas formas diferentes de exportar e importar as funções do arquivo,totalizando 4 formas 
variando com suas particularidades, mas principalmente por preferência e organização

default - Apenas 1 por modulo podendo receber o nome que quiser já que é unico
inline - usando a palavra "export" antes da função
non-inline - Utilizando ao fim do arquuivo "export{"nome da funcao","nome da função"}" permitindo vários de uma vez
export default - Onde se exporta o arquivo inteiro e importa ele inteiro
*/ 

import { inline } from "./inline.js"
import defaultInline from "./inline.js"

import { group } from "./non-inline.js"
import exportDefault from "./non-inline.js"

inline()
defaultInline()

group()
exportDefault()