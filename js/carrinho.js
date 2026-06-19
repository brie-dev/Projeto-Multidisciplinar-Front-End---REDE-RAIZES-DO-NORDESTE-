let carrinho = [];

function adicionarCarrinho(id){
    let produto = produtos.find(item => item.id === id);
    carrinho.push(produto);
    atualizarCarrinho();
}

function atualizarCarrinho(){
    let areaCarrinho = document.getElementById("carrinho");
    let total = 0;
    areaCarrinho.innerHTML = "";
    carrinho.forEach(item => {
        total += item.preco;
        areaCarrinho.innerHTML += `
            <p>
                ${item.nome}
                - R$ ${item.preco}
            </p>
        `;
    });
    document.getElementById("total").innerHTML =
    total.toFixed(2);
}

setTimeout(() => {
    document.getElementById("status").innerHTML =
    "Pedido saiu para entrega";
}, 10000);

