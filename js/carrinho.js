let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(id){
    let produto = produtos.find(item => item.id === id);
    carrinho.push(produto);
    atualizarCarrinho();

    localStorage.setItem(
    "carrinho",
    JSON.stringify(carrinho)
);
    atualizarCarrinho();
}

function atualizarCarrinho(){
    let areaCarrinho = document.getElementById("carrinho");
    let total = 0;
    areaCarrinho.innerHTML = "";
    carrinho.forEach(item => {
        total += item.preco;
        areaCarrinho.innerHTML += `
            <div class="itemCarrinho">
                <p>
                ${item.nome} - R$ ${item.preco}
                </p>
                <button onclick="removerItem(${item.id})">
                Remover
                </button>
            </div>
        `;
    });
    document.getElementById("total").innerHTML =
    total.toFixed(2);
    document.getElementById("quantidade").innerHTML = carrinho.length;

    if(carrinho.length==0){
        areaCarrinho.innerHTML=
        "<h3>Carrinho vazio</h3>";
    }
}

setTimeout(() => {
    document.getElementById("status").innerHTML =
    "Pedido saiu para entrega";
}, 10000);

atualizarCarrinho();

function limparCarrinho(){
    carrinho = [];
    localStorage.removeItem("carrinho");
    atualizarCarrinho();
}

function removerItem(id){
    let indice =
    carrinho.findIndex(item => item.id === id);
    if(indice !== -1){
        carrinho.splice(indice,1);
        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        );
        atualizarCarrinho();
    }
}

