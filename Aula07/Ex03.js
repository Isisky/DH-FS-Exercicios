/* 3) Crie uma função que imprime de 10 até 1 e depois 
imprime na tela “feliz ano novo” através de uma callback */

function ContadorAnoNovo(callback){
    /* Contagem Regressiva de 10 */
    for(let i=10; i>0;i--){
        setTimeout(function(){console.log((i));}, 1000*(10-i));
        /* Coloca o callback após o 1. */
        if(i == 1)
        {setTimeout(function(){callback();}, 1000*(10-i+1));}
    }
}

function imprimirAnoNovo(){
      console.log("Feliz ano novo!");
}

/* Chamada para verificar a função */
ContadorAnoNovo(imprimirAnoNovo);
