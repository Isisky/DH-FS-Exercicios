/* 4) Faça o mesmo utilizando Promise com concatenação de then */
const contagemRegressiva = new Promise((resolve, reject) => {
    /* Contagem regressiva de 10 */
    for(let i=10; i>0;i--){
            setTimeout(function(){console.log((i));}, 1000*(10-i));
    }
    /* resolve o promise após 10s. */
    setTimeout( function() {
        resolve();
    }, 10000)

})

const imprimirAnoNovo2 = new Promise((resolve, reject) => {
    resolve('Feliz Ano Novo!');
})

/* Chamada da 1ª Promise(contagemRegressiva), que quando resolvido(1º then) retorna a 2ª promise (imprimirAnoNovo2).
A resolução do segundo promise imprime no console a sua resolução (res) */
contagemRegressiva.then(function() {return imprimirAnoNovo2})
.then(function(res) {return console.log(res)});
