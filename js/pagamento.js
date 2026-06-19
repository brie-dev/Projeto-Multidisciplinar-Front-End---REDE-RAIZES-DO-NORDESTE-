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
    alert("Pagamento aprovado!");
    window.location.href="pedido.html";
}