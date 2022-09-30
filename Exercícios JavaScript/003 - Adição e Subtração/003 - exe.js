function calculo(){
    var valor1 = document.querySelector("#num1")
    var valor2 = document.querySelector("#num2")

    var num1 = parseInt(valor1.value)
    var num2 = parseInt(valor2.value)

    var res = document.querySelector(".res")

    res.innerText = `Adição: ${num1 + num2} ----- Subtração: ${num1 - num2}`
}