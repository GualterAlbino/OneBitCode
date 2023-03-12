/*
Outra alternativa a usar "export" no incio de cada função 
é usar apenas um ao fim do arquivo contendo todos

*/


function group(){
    console.log('Export nomeado não-inline (agrupado');
}

function a() {}
function b() {}
function c() {}
function d() {}

function exportDefault(){
    console.log('Export default não-inline');
}


export { group, a, b, c, d }

export default exportDefault
