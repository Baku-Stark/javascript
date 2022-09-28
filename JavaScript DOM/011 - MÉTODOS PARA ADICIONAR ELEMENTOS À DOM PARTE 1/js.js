let div = document.querySelector('.container')

// Elemento adicionado antes da [div].
div.before("AAAA")

// Elemento adicionado dentro da [div], mas no início do texto.
div.prepend("---BBBB---")

// Elemento dentro da [div], mas no fim do texto.
div.append("---CCCC---")

// Elemento depois da [div].
div.after("DDDD")


// ==== TESTES ====
let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
let p4 = document.createElement('p')

p1.innerText = "Parágrafo 1"
p2.innerText = "Parágrafo 2"
p3.innerText = "Parágrafo 3"
p4.innerText = "Parágrafo 4"

div.before(p1)
div.prepend(p2)
div.append(p3)
div.after(p4)