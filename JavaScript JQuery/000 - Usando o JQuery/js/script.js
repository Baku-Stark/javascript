// Fazer o elemento sumir(fadeOut) e aparecer (fadeIn)
$('h1').fadeOut("2000").fadeIn("2000")

// Adicionando texto
$('h1').append("(feito em JQuery)")

// Função
const deleteList = () => {
    // Remover elemento
    $('li').remove()
    $('#btn').remove()
}

const changeColor = () => {
    $('li').css({color: 'cyan'})
}
$('#btn').on("click", changeColor)