/* 6) Crie um array com as seguintes notas [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5,
     7.4, 7.0], construa uma função para imprimir apenas as notas acima de 7 */

function filtroArray7 (array){
    array.forEach(
        function(value){
            if(value > 7)
                console.log(value)
        }
    )
}

var arrayNotas = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];

filtroArray7(arrayNotas)
