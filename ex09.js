function aoQuadrado(n1, resultado){
    if(n1){
        resultado = n1 * n1;
    }else{
        resultado = 0;
    }
    return new Promise(resolve=>{
       resolve(resultado)
    })
}
function strNumero(digtnum, converte){
    if(digtnum){
      converte = parseFloat(digtnum * digtnum);
    }else{
      converte = 0;
    }
    return new Promise(resolve =>{
        resolve(converte);
    })
}
aoQuadrado(15)
    .then(v => console.log(`Valor do número ao quadrado é de: ${v}`));
strNumero('238989239')
    .then(v1 => console.log(`Valor da string convertida é de: ${v1}`));

