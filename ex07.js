function matrizQuadrados (){
    const n1 = [2, 5, 3].map(num => num * num)
    return new Promise (resolve => {
        resolve(n1)
    })
}
matrizQuadrados().then((soma) =>{
    console.log(soma)
})