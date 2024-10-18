const dados2 = {
    "rebeca andrade": "item-resultado-1",
    "rayssa leal": "item-resultado-2",
    "beatriz souza": "item-resultado-3",
}
function pesquisar(campo_pesquisa){
    document.getElementById("item-resultado-1").style.display = "none";
    document.getElementById("item-resultado-2").style.display = "none";
    document.getElementById("item-resultado-3").style.display = "none";
    let section = document.getElementById("resultados-pesquisa");
    section.style.display = "block"
    campo_pesquisa = campo_pesquisa.toLowerCase()
    keys = Object.keys(dados2)
    keypesquisa = ''
    for (i in keys){
        if(keys[i].includes(campo_pesquisa) && campo_pesquisa!=''){
            keypesquisa = keys[i] 
            break
        }
    } console.log(campo_pesquisa)  
    if (keypesquisa != ''){
        document.getElementById(dados2[keypesquisa]).style.display="block"
    } else {
        document.getElementById("item-resultado-1").style.display = "block";
        document.getElementById("item-resultado-2").style.display = "block";
        document.getElementById("item-resultado-3").style.display = "block";
    }
}    


let resultados = "";

//cada dado dentro da lista
for (let dado of dados) {
    if (dado.titulo.includes("campoPesquisa")){
        resultados += `
       <div class="item-resultado">
            <h2>        
                <a href="" target="_blank">${dado.titulo}</a>
            </h2>
             <p class="descrição-meta">${dado.descricao}</p>
             <a href="${dado.link}" target = "_blank"> Para acessar mais informações.</a>
          </div> 
` 
    }
    
}


