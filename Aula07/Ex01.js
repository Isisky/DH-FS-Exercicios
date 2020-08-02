/* 1) Crie uma função que recebe um número e verifica se ele é par ou ímpar.  */
function paridade(num){
    /* Verifica se o resto da divisão por 2 é 0 ou 1.
    0 implica par,
    1 implica ímpar*/
    if(num % 2 == 0){
        console.log(num+" é par!")
    }
    else{
        console.log(num+" é impar!")
    }
}

/* Chamada para verificar a função */
paridade(3)
