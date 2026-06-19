function finalizarPedido(){
    window.location.href="pedido.html";
}

setTimeout(()=>{
document.getElementById("status").innerHTML=
"Saiu para entrega";
},10000);

setTimeout(()=>{
document.getElementById("status").innerHTML=
"Pedido entregue";
},20000);