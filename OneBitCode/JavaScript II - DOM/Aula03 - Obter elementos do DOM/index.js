function show(){
    //Nessa função com o "getElementById" ele obtem 1 elemento do HTML usando seu nome (ID)
    const contactList = document.getElementById('contact-list');
    console.log(contactList);


    //Nesse fução com o "getElementsByTagName" trazemos os elementos do HTML baseado em tags, nesse caso todos os 'li'(TAG)
    const listElements = document.getElementsByTagName('li');
    console.log(listElements);


    //Nessa função com o "getElementsByClassName" trazemos os elementos do HTML baseados em suas ckasses, nesse caso a "contact-input(CLASS)"
    const contactInputs = document.getElementsByClassName('contact-input');
    console.log(contactInputs);


    //Nessa função com o "querySelectorAll" podemos ser bem mais especificos usando os mesmo operadores do CSS de herança. o #, ->, > e .
    const contacts = document.querySelectorAll('#contact-list > li > label')
    //Puxando o ID contact list com o (#) e dentro dele o elemento (li) e dentro dele o label (label)
    console.log(contacts)


    //Nessa função com o "getElementsByName" podemos usar o nome que demos na tag NAME lá no HTML 
    const contact1 = document.getElementsByName('contact1');
    console.log(contact1);


    //A diferença do "querySelector" para o "querySelectorAll", é que ele retorna apenas o primeiro elemento mesmo exisitndo outras
    const firstContact = document.querySelector('#contact-list > li > label');
    console.log(firstContact);


    //Esses são os seletores do JAVASCRIPT que fazem referencia ao HTML
}