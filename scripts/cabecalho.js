const header = document.querySelector(".cabecalho");
const titulo = document.querySelector(".cabecalho-titulo");

window.addEventListener("scroll", () => {
    header.classList.toggle("rolagem", window.scrollY > 0 );
    titulo.classList.toggle("cabecalho-titulo-some", window.scrollY > 0);
})