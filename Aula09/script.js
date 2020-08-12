function printForm(arInputs){
    console.clear()
    arrayForm = []
    for(let i=0; i < arInputs.length;i++){
        console.log(`${arInputs[i].name}: ${arInputs[i].value}`)
    }
}


function validateForm(arInputs){
    let arrayErros = []

    for(let i=0; i < arInputs.length;i++){
        if(arInputs[i].value == ""){
            arrayErros.push(arInputs[i].name)
        }
    }
    if(arrayErros != [] && arrayErros.length > 1){
        alert(`Os campos ${arrayErros.join(", ")} são obrigatórios`)
        return false
    }
    else if(arrayErros != [] && arrayErros.length == 1){
        alert(`O campo ${arrayErros[0]} é obrigatório`)
        return false
    }
}


function validatePassword(arInputs){
    if(arInputs.namedItem('senha').value != arInputs.namedItem('senha2').value){
        alert('Senha não confirmada')
        return false
    }
}


function nomeCompleto(arInputs){
    let fullName = ""
    fullName = fullName.concat(arInputs.namedItem('nome').value, " ", arInputs.namedItem('sobrenome').value)
    console.log(`Nome completo: ${fullName}`)
}


function submitForm(){
    var arInputs = document.getElementById('formDados').getElementsByTagName('input')
    validateForm(arInputs)
    validatePassword(arInputs)
    printForm(arInputs)
    nomeCompleto(arInputs)
}


function hideForm(){
    document.getElementById('form1').style.display = 'none' //some o formulário completo

    let listaResumida = document.createElement("ul") //cria a lista UL
    listaResumida.id = "formUL" //estabelece o ID da lista UL
    document.body.appendChild(listaResumida) //Insere a UL no corpo do doc

    let arInputs = document.getElementById('formDados').getElementsByTagName('input') //gera um objeto com todos os inputs

    /* Gerador das strings de inputs */
    arrayForm = []
    for(let i=0; i < arInputs.length;i++){
        arrayForm.push(`${arInputs[i].name}: ${arInputs[i].value}`) //gera as strings com template ´nome: valor´
    }

    for (let i=0;i<arrayForm.length;i++){
        let item = document.createElement("li") //gera um item LI
        let itemText = document.createTextNode(arrayForm[i]) //gera um textNode com uma strings geradas
        item.appendChild(itemText) //adiciona o textNode à LI
        document.getElementById("formUL").appendChild(item) //adiciona a LI à UL gerada
    }

    let editButton = document.createElement("button")
    document.body.appendChild(editButton)
    editButton.id = "edBtn"
    editButton.innerText = "Editar"
    editButton.addEventListener("click", ()=>editForm())
    console.log(editButton)
}


function editForm(){
    document.getElementById('form1').style.display=""
    document.getElementById("formUL").remove()
    document.getElementById("edBtn").remove()
}


//previne o envio padrão.
document.getElementById('formDados').onsubmit = function(event){
    event.preventDefault();
}

//modifica o valor do checkbox de subscrição
let subs = document.getElementById('subscribe')
subs.addEventListener("change",function(){
    (subs.checked) ? (subs.value = "checked") : (subs.value = "unchecked")
})

//atualiza o fundo da pagina de acordo com o gênero
let gender = document.getElementById('gender')
gender.addEventListener("change",function(){
    switch(gender.value){
        case 'F':
            document.body.style.backgroundColor = "lightpink"
            break
        case 'M':
            document.body.style.backgroundColor = "lightblue"
            break
        case 'O':
            document.body.style.backgroundColor = "lightgray"
            break
        default:
            document.body.style.backgroundColor = "white"
    }
})

