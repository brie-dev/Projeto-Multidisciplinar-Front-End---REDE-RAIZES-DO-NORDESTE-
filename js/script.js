let areaProdutos = document.getElementById("produtos");
let categoriaElement = document.getElementById("categoria");

function exibirProdutos(lista){
    if (!areaProdutos) return;
    areaProdutos.innerHTML = "";
    lista.forEach(produto => {
        areaProdutos.innerHTML += `
        <div class="card">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarCarrinho(${produto.id})">
                Adicionar
            </button>
        </div>
        `;
    });
}

function filtrar(){
    if (!categoriaElement || typeof produtos === "undefined") return;
    let categoria = categoriaElement.value;
    if (categoria == "Todos") {
        exibirProdutos(produtos);
    } else {
        let resultado = produtos.filter(
            produto => produto.categoria == categoria
        );
        exibirProdutos(resultado);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    if (typeof produtos !== "undefined" && areaProdutos) {
        exibirProdutos(produtos);
    }
});