const p = new Promise((resolve,rejected) => {
    console.log('A promise está sendo executada.')
    if (true){
        //rejected(false);
    }

   setTimeout(() =>{
    console.log("Resolvendo a promise...");
    resolve(true);
   },1000 * 2);
})

console.log(p);

setTimeout(() => {
    console.log(p);
}, 1000 * 3)

//A promisse tem seus proprios status, mas ao passar um parâmetro, podemos pedir que ele devolva
//algo em especifico, como o true por exemplo