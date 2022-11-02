document.addEventListener('DOMContentLoaded', () => {
    console.log("Documento carregando...")
    document.querySelector('h1').textContent = "Texto alterado"
})

window.addEventListener('load', () => {
    console.log('Documento completo!')
})