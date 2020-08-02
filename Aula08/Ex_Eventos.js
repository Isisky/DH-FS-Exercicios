/* Adiciona um evento de click no botao "Cumprimentar" e dispara um alerta */
    document.getElementById("botaoOi")
    .addEventListener("click", function(){
        alert("Olá!")
    })

/* Adiciona um evento de click no botao "Alterar fundo" e modifica o background color do body no documento */
    document.getElementById("botaoBackground")
    .addEventListener("click", function(){
        document.body.style.backgroundColor="green"
    })

/* Adiciona um evento de "mouseover" à imagem e imprime mensagem ao passar o mouse por cima da imagem */

    // ***********Comentado para evitar poluir o console no exercicio 9*****************

    // document.getElementById("imgMouseOver")
    // .addEventListener("mouseover", function(){
    //     console.log("Estou vendo a imagem")
    // })


/* Adiciona um evento de click à imagem e imprime mensagem ao clicar o mouse encima da imagem */
    document.getElementById("imgClick")
    .addEventListener("click", function(){
        console.log("Posição X:"+event.clientX);
        console.log("Posição Y:"+event.clientY);
    })

/* adiciona um evento de click no body que muda o background inteiro para vermelho */

    /* Comentado para remover, conforme parte 7 */

    // document.body.addEventListener("click", function(){
    //     this.style.backgroundColor = "red"
    // })

/* Busca o primeiro form, pega o primeiro botão(submit) e remove o "Default" do action */
    document.getElementsByTagName("form")[0].getElementsByTagName("button")[0]
    .addEventListener("click",function(){
        event.preventDefault();
    })

/* Timer 1 - Após 10s na página, dispara um alerta */
    setTimeout( () => 
    alert("Tempo esgotado!")
    , 10000);

/* Timer 2 - A cada 5s, dispara um alerta */
    setInterval(() => {
        alert("Hora do intervalo!")
    }, 5000);
