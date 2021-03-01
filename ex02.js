//Exercício 2 Use Promise.reject (erro) para criar uma promessa que será rejeitada com a string "Boo!"

let promise = new Promise ((resolve, reject) =>{
    let str = "Boo!";
    if (str === "Boo!"){
        reject(`String não aceita, não vale sustos!! ${str}`);
    }else{
        resolve(`String aceita. ${str}`);
    }
}) 

promise.then((data) => console.log(`${data}`)).catch((data) => console.log(`${data}`));