let pedidos =
    JSON.parse(localStorage.getItem("pedidos")) || [];
    let lista =
    document.getElementById("listaPedidos");
    pedidos.forEach(pedido=>{
        lista.innerHTML += `
        <div class="card">
        <h3>
        Pedido #${pedido.numero}
        </h3>
        <p>
        ${pedido.status}
        </p>
        </div>
        `;
});