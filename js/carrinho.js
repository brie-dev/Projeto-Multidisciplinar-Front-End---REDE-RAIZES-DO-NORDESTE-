let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(id){
    let produto = (typeof produtos !== "undefined")
        ? produtos.find(item => item.id === id)
        : null;
    if (!produto) {
        return;
    }
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

function atualizarCarrinho(){
    let areaCarrinho = document.getElementById("carrinho");
    if (!areaCarrinho) return;
    let total = 0;
    areaCarrinho.innerHTML = "";
    carrinho.forEach(item => {
        total += item.preco;
        areaCarrinho.innerHTML += `
            <div class="itemCarrinho">
                <p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>
                <button onclick="removerItem(${item.id})">
                    Remover
                </button>
            </div>
        `;
    });
    let totalElement = document.getElementById("total");
    let quantidadeElement = document.getElementById("quantidade");
    if (totalElement) {
        totalElement.innerHTML = total.toFixed(2);
    }
    if (quantidadeElement) {
        quantidadeElement.innerHTML = carrinho.length;
    }

    if(carrinho.length == 0){
        areaCarrinho.innerHTML = "<h3>Carrinho vazio</h3>";
    }
}

atualizarCarrinho();

function limparCarrinho(){
    carrinho = [];
    localStorage.removeItem("carrinho");
    atualizarCarrinho();
}

function removerItem(id){
    let indice = carrinho.findIndex(item => item.id === id);
    if(indice !== -1){
        carrinho.splice(indice,1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        atualizarCarrinho();
    }
}

