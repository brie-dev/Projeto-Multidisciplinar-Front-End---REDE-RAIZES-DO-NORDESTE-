let pontos = localStorage.getItem("pontos");

if(pontos==null){
    pontos=0;
}
document.getElementById("pontos")
.innerHTML =
pontos + " pontos";