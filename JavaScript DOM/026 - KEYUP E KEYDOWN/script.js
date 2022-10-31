let elemento = document.querySelector("#caixa_texto")

elemento.addEventListener('keydown', () => {
    console.log('a')
})

elemento.addEventListener('keyup', () => {
    console.log('largou')
})

elemento.addEventListener('keydown', (event) => {
    console.log(event.target)
})

elemento.addEventListener('keyup', (event) => {
    console.log(event.target)
})


elemento.addEventListener('keydown', (e) => {
    if(e.key == "a"){
        e.preventDefault()
    }
})

elemento.addEventListener('keydown', (event) => {
    var value = event.target.value

    if(value == "Wallace"){
        document.querySelector("p").style.display = 'none'
    }
    else{
        document.querySelector("p").style.display = 'block'
    }
})