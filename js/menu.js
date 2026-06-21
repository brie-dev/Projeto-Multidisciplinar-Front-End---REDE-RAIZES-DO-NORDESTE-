let menu = document.querySelector("nav");
let menuButton = document.getElementById("menuMobile");

if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}