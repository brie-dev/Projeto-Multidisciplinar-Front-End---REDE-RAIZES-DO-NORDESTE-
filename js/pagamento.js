function pix(){
    document.getElementById("mensagem").innerHTML=
    `
    <h3>PIX selecionado</h3>
    <p>Chave PIX:</p>
    <p>contato@raizesdonordeste.com</p>
    `;
}

function cartao(){
    document.getElementById("mensagem").innerHTML=
    `
    <h3>Pagamento por cartão</h3>
    <p>Transação aprovada.</p>
    `;
}

function confirmarPagamento(){
    let pontos =
    localStorage.getItem("pontos");
    if(pontos == null){
        pontos = 0;
    }
    pontos = parseInt(pontos) + 10;
    localStorage.setItem(
        "pontos",
        pontos
    );

    let pedidos =
    JSON.parse(localStorage.getItem("pedidos")) || [];
    pedidos.push({
    numero: pedidos.length+1,
    status:"Em preparo"
    });
    localStorage.setItem(
    "pedidos",
    JSON.stringify(pedidos)
    );

    alert("Pagamento aprovado!");
    window.location.href="pedido.html";

}