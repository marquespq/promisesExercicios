/*Este é um exercício simples de apenas esperar que uma promessa seja 
cumprida antes de realizar uma ação. A promessa será resolvida após um certo número de milissegundos.
*/

let promise = new Promise((resolve) =>{
    let result = false;
    let delayInMs = 2000;
    setTimeout(() => {
        resolve('Ok')
    }, delayInMs);
  }); 
promise.then((check) => console.log(`${check}`)).catch((check) => console.log(`${check}`));
console.log('fui executado antes!');
  


