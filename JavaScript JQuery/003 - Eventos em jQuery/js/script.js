// EVENTO "onClick"
$('.bloco').click(() =>{
    // INSERINDO TEXTO NA TAG [p id="texto"]
    $('#texto').text('Função de [click] ativada!!!')
})

// EVENTO "onMouseEnter"
$('.bloco').mouseenter(() =>{
    // INSERINDO TEXTO NA TAG [p id="texto"]
    $('#texto').text('Função de [onMouseEnter] ativada!!!')
})

// EVENTO "onMouseLeave"
$('.bloco').mouseleave(function () { 
    // INSERINDO TEXTO NA TAG [p id="texto"]
    $('#texto').text('Função de [onMouseLeave] ativada!!!')
});