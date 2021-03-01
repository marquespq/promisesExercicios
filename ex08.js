function aoQuadrado(n1){
    return new Promise(resolve =>{
        resolve(resultado = n1 *n1)
    })
}
function strNumero(digtnum){
    let converte = parseFloat(digtnum * digtnum);
    return new Promise(resolve =>{
        resolve(converte);
    })
}
function naoTransforma(str){
    return new Promise(reject =>{
        reject(`Não é possivel transformar esses caracteres: ${str} em números!`);
    })
}
aoQuadrado(20)
    .then(v => console.log(`Valor do número ao quadrado é de: ${v}`));
strNumero('200')
    .then(v1 => console.log(`Valor da string convertida é de: ${v1}`));
naoTransforma('Gabriel Borba Marques')
    .then(v2 => console.log(v2))


