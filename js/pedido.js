function finalizarPedido(){
    window.location.href = "pagamento.html";
}

let statusElement = document.getElementById("status");
if (statusElement) {
    setTimeout(() => {
        statusElement.innerHTML = "Em preparo";
    }, 2000);

    setTimeout(() => {
        statusElement.innerHTML = "Saiu para entrega";
    }, 10000);

    setTimeout(() => {
        statusElement.innerHTML = "Pedido entregue";
    }, 20000);
}