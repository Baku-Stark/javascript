let elemento = document.querySelector('h3');

// attributes = Mostra todos o atributos dentro do elemento

// ===== console.log(elemento.attributes[0]);
// ===== console.log(elemento.attributes['src']);
console.log(elemento.attributes);

// hasAttribute = Determinar o atributo
if(elemento.hasAttribute('id')){
    console.log("O elemento possui um 'id'.")
} else {
    console.log("O elemento não possui esse atributo.")
};


//getAttribute = Busca o valor do atributo
console.log("-> " + elemento.getAttribute('id'));


//setAttribute = Definir criar um novo atributo no elemento
elemento.setAttribute('class', 'sumario-class');


//removeAttribute = Remove o atributo
elemento.removeAttribute('id');