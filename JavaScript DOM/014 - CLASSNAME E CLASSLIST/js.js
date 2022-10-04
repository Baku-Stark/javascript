// UTILIZANDO [className]
let p = document.querySelector("p")
p.className = 'p-1'

let p2 = document.getElementById("text2")
p2.className = 'p-2'

// UTILIZANDO [classList]
let p3 = document.getElementById('text3')
p3.classList.add('p-3')

// Método [.toogle('espaco')]
p3.classList.toggle('espaco')
if (p3.classList.contains('espaco')){
    console.log('contém a tag [espaco]')
} else{
    console.log('não contém a tag [espaco]')
}