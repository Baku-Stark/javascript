let elemento = document.querySelector("#caixa_texto")
elemento.addEventListener('keydown', (e) => {
    console.log(e.key) /*Mostrar teclas normais*/
})

elemento.addEventListener('keydown', (e) => {
    console.log(e.code) /*Mostrar teclas extras(F1, F2, F3, etc) e a forma em "key"*/
})

elemento.addEventListener('keydown', (e) => {
    if(e.code == 'ArrowLeft'){
        console.log("Pressionou a tecla para a direita!")
    }
})

elemento.addEventListener('keydown', (e) => {
    console.log(e.which) /*Mostrar código das teclas*/
})