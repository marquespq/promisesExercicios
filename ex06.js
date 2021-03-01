/*
Neste exercício, usaremos then and catch para seu uso mais básico: consumir o resultado de um processo assíncrono bem-sucedido
 ou lidar com o erro de um processo assíncrono com falha. Receberemos uma promessa, um consumidor e um manipulador. 
 Configure-o de forma que, se a promessa for resolvida, o consumidor seja chamado com o resultado e, 
 se a promessa for rejeitada, o manipulador seja chamado com o erro.
*/

let promise = new Promise ((resolve, reject) =>{
    resolve('Sucesssed');
});
promise.then((check) =>{
    if(check){
        console.log(`Nice ${check}`);
    }else{
        throw new Error('erro');
    }
    return check;
}).then((check) => console.log( `sucesso: ${check}`)).catch((check) => console.log(`falta: ${check}`))