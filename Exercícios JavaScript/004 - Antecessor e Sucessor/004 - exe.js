function show(){
    var num = document.querySelector("#num")
    var valor = parseInt(num.value)

    var res = document.querySelector(".res")

    res.innerHTML = `<p>Número Sucessor: ${valor + 1} <br>Número Antecessor: ${valor - 1}</p>`

}