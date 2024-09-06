function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = (document.getElementById("campo-pesquisa").value).toLowerCase();
    let titulo = "";
    let descricao = "";

    let resultado = "";
    
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        if (!campoPesquisa) {
            section.innerHTML = "<p>Busca Vazia</p>";
            return;
        } else{
            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
                resultado += `
                <div class="item-resultado">
                            <h2>${dado.titulo}</h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                            <a href= ${dado.link} target="_blank">Instagram da banda</a>
                        </div>
                `;
            }  
        }
               
    } 
    
    if(!resultado){
        resultado = "<p>Nada foi encontrado</p>"
    }
    
    section.innerHTML = resultado; 
}

