export const name = 'Gualter';

export function label(atributos){
    const element = document.createElement('label');
    Object.assign(element,atributos);
    return element;
}

export function input(atributos){
    const element = document.createElement('input');
    Object.assign(element,atributos);
    return element;
}

export function br(){
    const element= document.createElement('br');
    return element;
}