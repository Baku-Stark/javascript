function Convert(){
    //-------------- SELECIONAR ELEMENTO
    var priSelect = document.querySelector('.pri-select')
    var secSelect = document.querySelector('.sec-select')
    
    //-------------- ALTERAR TEXTO
    var select = document.getElementById("selec-1")
    var select2 = document.getElementById("selec-2")
    var valor1 = select.options[select.selectedIndex].text
    var valor2 = select.options[select2.selectedIndex].text

    if(valor1 == valor2){
        window.alert("Você precisa escolher outro valor de moeda para conversão.")
    }
    else{
        priSelect.innerHTML = `<strong>${valor1}</strong>`
        secSelect.innerHTML = `<strong>${valor2}</strong>`
    }

    //-------------- SELECIONAR VALOR PARA CALCULADO [moeda]
    var set = document.querySelector('#num')
    var moeda = parseInt(set.value)
    var res = document.querySelector('.value-box')

    // DÓLAR PARA REAL === x5.2061
    if(valor1 == "Dólar" && valor2 == "Real"){
        var result = moeda * 5.2061
        res.innerHTML = `<p><strong>U$${result}</strong></p>`
    }

}