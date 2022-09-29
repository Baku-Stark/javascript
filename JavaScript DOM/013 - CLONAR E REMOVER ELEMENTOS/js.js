let div2 = document.querySelector("#container").cloneNode(true)

// Clonar ELEMENTOS.
document.querySelector("#container").after(div2)

// Remover ELEMENTOS.
document.querySelector("#container").remove(div2)