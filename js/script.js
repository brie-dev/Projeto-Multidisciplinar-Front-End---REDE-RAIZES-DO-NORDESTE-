let areaProdutos = document.getElementById("produtos");

produtos.forEach(produto => {
    areaProdutos.innerHTML += `
    <div class="card">
        <img src="${produto.imagem}" width="200">

        <h3>${produto.nome}</h3>

        <p>R$ ${produto.preco}</p>

        <button onclick="adicionarCarrinho(${produto.id})">
            Adicionar
        </button>
    </div>
    `;
});