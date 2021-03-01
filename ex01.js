//Exercício 1 Use Promise.resolve (valor) para criar uma promessa que será resolvida com o valor 3.

let promise = new Promise((resolve, reject) =>{
    let valor = 4;
    if(valor === 3){
        resolve(`O valor foi resolvido, ele é: ${valor}`);
    }else{
        reject(`O valor deu errado, ele é: ${valor}`)
    }
});

promise.then((data) => console.log(`${data}`)).catch((data) => console.log(`${data}`));
