let jaExecutou = false;
let outputPromise = doSomethingAsync(1000);
outputPromise.then(function (result) {
    jaExecutou = true;
});
setTimeout(() => {
    if (jaExecutou) {
        log('executou rápido...');
        return;
    }
    log('não executou rápido. vai esperar para verificar novamente.');
    setTimeout(() => {
        outputPromise.then(function (result) {
            log('terminou a execução pelo caminho mais lento...');
        });
    }, 3000);
}, 5); //Necessário pois como a verificação da promise na linha 6 é assíncrona o if da linha 11 iria falhar caso a promise já estivesse resolvida.
function log(text) {
    console.log(new Date(), ` - ${text}`);
}
function doSomethingAsync(time) {
    log('Início da operação');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Operação com sucesso');
        }, time);
    });
}
doSomethingAsync();
