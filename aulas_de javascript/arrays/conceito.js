
let frutas = []

function adicionarFruta() { 

    const inputFruta = document.getElementById("inputFruta")
    let fruta = inputFruta.value.trim()

    const mensagem = document.getElementById("mensagem")

    
   if (fruta == "") {
    let mensagemErro = "Digite uma fruta para adicioná-la a sua lista!"
      mensagem.textContent = mensagemErro;
      mensagem.style.color = "#a34743";
   } else {
      let mensagemSucesso = "Fruta adicionada com sucesso!";
      mensagem.textContent = mensagemSucesso;
      mensagem.style.color = "#28a745";
      frutas.push(fruta)
      renderizarFrutas() 
   } 

   inputFruta.value = ""
}

   function renderizarFrutas() {
   const listaFrutas = document.getElementById("listaFrutas")
   listaFrutas.innerHTML = ""

   //for itens na lista
   //1. item inicial (iterador)
   //2. item final (condição)
   //3. se vai de 1 em 1 elemento ou se pula

   //for (iterador, condição, frequencia)
   
   for (let i = 0; i < frutas.length; i++){
      let novaFruta = document.createElement("li")
      novaFruta.textContent = frutas[i]
      listaFrutas.appendChild(novaFruta)
   }
}
