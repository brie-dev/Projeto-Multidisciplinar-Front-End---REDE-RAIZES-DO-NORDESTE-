let menu = document.querySelector("nav");
let menuButton = document.getElementById("menuMobile");

if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
        let isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menu.classList.toggle("ativo");
        menuButton.setAttribute("aria-expanded", String(!isExpanded));
    });
}