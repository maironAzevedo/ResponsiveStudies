const openButton = document.querySelector(".menu-abrir")
const page = document.querySelector("html")
const closeButton = document.querySelector(".menu-fechar")

openButton.addEventListener("click", () => {
    page.classList.add('menu-ativo');
})

closeButton.addEventListener("click", () => {
    page.classList.remove('menu-ativo'); 
})

page.addEventListener("click", () => {
    if (event.target === page) {
        page.classList.remove('menu-ativo');
    }
})