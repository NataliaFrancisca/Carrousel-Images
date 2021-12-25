const cards = [...document.querySelectorAll(".card-image")];
const container_image = document.querySelector(".container-image-principal");

// OPÇÃO DE TROCAR AS IMAGENS, CLICANDO NELAS
cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.map(element => element.classList.remove("selected"))
        
        // adicionando a classe selected ao card que foi clicado e adicionando a imagem dela ao card maior
        card.classList.add("selected");
        container_image.innerHTML = `${card.firstElementChild.outerHTML}`
    })
})
