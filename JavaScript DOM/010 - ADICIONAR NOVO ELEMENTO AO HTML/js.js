let novoElemento = document.createElement('p');
let elemento = document.querySelector('.caixa');

novoElemento.className= 'alerta';
novoElemento.innerText = 'Essa é uma mensagem de alerta!';

function aviso(){
    elemento.appendChild(novoElemento);
}