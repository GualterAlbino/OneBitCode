/* 
 Export nomeado = precisa utilizar o nome exato dele ao chamar no main.js
 inline = o export é usado na mesma linha
*/

export function inline(){
    console.log('Export nomeado de inline')
}

/*
A palavra reservada "default" depois de "export" permite que usemos outro nome, mas permite apenas
um default por arquivo. Qualquer nome que você colcar na chamada será o default, já que só existe um
*/
export default function defaultInline(){
    console.log('Export default inline')
}