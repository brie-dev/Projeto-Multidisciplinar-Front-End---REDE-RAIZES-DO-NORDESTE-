let menu =
document.querySelector("nav");
document
.getElementById("menuMobile")
.addEventListener("click",()=>{
    menu.classList.toggle("ativo");
});