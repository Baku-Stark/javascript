function func(){
    var valor = document.querySelector("#num")
    var num = parseInt(valor.value)

    multi = num * 2
    triplo = num * 3
    rq = num **(0.5)

    var res = document.querySelector(".res")
    
    res.innerHTML = `Multiplicação por 2: ${multi}<br>Multiplicação por 3: ${triplo}<br>Raiz Quadrada: ${rq}`
}