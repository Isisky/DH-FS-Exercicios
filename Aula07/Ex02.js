/*2) Crie uma arrow function que receba um número e verifique se é primo. */
primeCheck = (num) =>{
    /* verifica se há algum divisor até a raiz quadrada de n
    Algoritmo conhecido como divisão por tentativa. */
    for (let i = 2; i <= Math.sqrt(num); i++) {
        
        /* Se encontrar um divisor antes do número, sai da função. */
        if(num % i == 0){
            return (console.log(num+" não é primo. =("))
        }
    }
    return (console.log(num+" é primo! =)"))
}    

/* Chamada para verificar a função */
primeCheck(96)
