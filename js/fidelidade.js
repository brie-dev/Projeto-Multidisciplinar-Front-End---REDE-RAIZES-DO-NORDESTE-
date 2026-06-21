let pontos = parseInt(localStorage.getItem("pontos")) || 0;
let pontosElement = document.getElementById("pontos");
if (pontosElement) {
    pontosElement.innerHTML = pontos + " pontos";
}