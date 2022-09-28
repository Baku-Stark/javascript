let div = document.querySelector('.container')

// Utilizando o [insertAdjacentText]
div.insertAdjacentText('beforebegin', 'Antes do [div]')
div.insertAdjacentText('afterbegin', 'Depois do [div]')

div.insertAdjacentText('beforeend', 'Antes do fim [div]')
div.insertAdjacentText('afterend', 'Depois do fim [div]')

// Utilizando o [insertAdjacentHTML]
div.insertAdjacentHTML('beforebegin', '<p>Parágrafo adicionado por JavaScript</p>')

//Utilizando o [insertAdjacentElement]
let paragrafo = document.createElement('p')
paragrafo.innerText = "Texto com [AdjacentElement]"

div.insertAdjacentElement('beforebegin', paragrafo)
div.insertAdjacentElement('afterbegin', paragrafo)
div.insertAdjacentElement('beforeend', paragrafo)
div.insertAdjacentElement('afterend', paragrafo)