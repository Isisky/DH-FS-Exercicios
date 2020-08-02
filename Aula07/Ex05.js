/* 5) Agora repita a função utilizando o método async/await */
const contagemRegressiva2 = new Promise((resolve, reject) => {
    /* Contagem regressiva de 10 */
    for(let i=10; i>0;i--){
            setTimeout(function(){console.log((i));}, 1000*(10-i));
    }
    /* resolve o promise após 10s. */
    setTimeout( function() {
        resolve();
    }, 10000)

})

const imprimirAnoNovo3 = new Promise((resolve, reject) => {
    resolve('Feliz Ano Novo!');
})

const chamarAnoNovoAsync = async () => {
    try{
        /* chama a parte 1 e aguarda resolução, antes de continuar para a parte 2 */
        const parte1 = await contagemRegressiva2;
        const parte2 = await imprimirAnoNovo3;
        /* imprime a resolução da parte 2 */
        console.log(parte2);
    }
    catch(err){
        console.log(err);/* caso haja erro, imprimir o erro. */
    }
}

/* chamada da função assincrona */
chamarAnoNovoAsync();
