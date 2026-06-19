let areaProdutos =
document.getElementById("produtos");

function exibirProdutos(lista){
    areaProdutos.innerHTML="";
    lista.forEach(produto=>{
        areaProdutos.innerHTML += `
        <div class="card">
        <img src="${produto.imagem}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
        <button onclick="adicionarCarrinho(${produto.id})">
        Adicionar
        </button>
        </div>
        `;
    });
}

function filtrar(){
    let categoria =
    document.getElementById("categoria").value;
    if(categoria=="Todos"){
        exibirProdutos(produtos);
    }
    else{
        let resultado =
        produtos.filter(
            produto =>
            produto.categoria == categoria
        );
        exibirProdutos(resultado);
    }
}
exibirProdutos(produtos);