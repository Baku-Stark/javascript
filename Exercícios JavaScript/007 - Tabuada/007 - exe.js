function multi(){
    var valor = document.querySelector(".number")
    var num = document.getElementById("num")
    var tab = document.getElementById("seltab")

    if (num.value.length==0){
        window.alert("Por favor, você precisa escolher um número para realizar a multiplicação.")
    } 
    
    else{
        var numMulti = Number(num.value)
        var c = 1
        valor.innerText = `${numMulti}`

        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement("option")
            item.text = `${numMulti} * ${c} = ${numMulti*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}