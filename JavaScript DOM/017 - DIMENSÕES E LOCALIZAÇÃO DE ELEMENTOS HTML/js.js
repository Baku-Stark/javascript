function buscarPropriedades(){
    let div = document.querySelector("div")
    let p = document.querySelector("#propriedades")

    let res = ""

    res += "offsetLeft = " + div.offsetLeft + " "
    res += "offsetTop = " + div.offsetTop + " "
    res += "offsetWidth = " + div.offsetWidth + " "
    res += "offsetHeight = " + div.offsetHeight + " "

    p.textContent = res
}