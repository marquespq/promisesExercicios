/*Exercício 3
Você tem o esboço de uma função makePromiseWithConstructor(itShouldResolve)

Use o construtor Promise para criar uma promessa que irá:

resolver se itShouldResolve é verdadeiro
rejeitar se itShouldResolve for falso
*/

function makePromiseWithConstructor(itShouldResolve){
    itShouldResolve = false;
    let promise = new Promise((resolve, reject) =>{
       if(itShouldResolve){
           resolve("Result is true")
       }else{
           reject("Result is false")
       }
    })
    return promise;
}
makePromiseWithConstructor().then((data) => console.log(`Sucess: ${data}`)).catch((data) => console.log(`Foult: ${data}`));


