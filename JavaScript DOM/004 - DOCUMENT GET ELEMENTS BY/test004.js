console.log('Teste em andamento.')

//--- Selecionando o ID
console.log(document.getElementById('titulo'))
document.getElementById('titulo').innerText = "Novo Titulo em JavaScript"

//--- Selecionando o NOME
console.log(document.getElementsByName('div-site'))

//--- Selecionando o INPUT
document.getElementsByName('text_user')[0].value = 'Wallace'

//--- Selecionando uma TAG
document.getElementsByTagName('p')[0].innerText = 'Valor alterado com JavaScript.'

//--- Selecionando a CLASSE DE UMA TAG
function darkTheme(){
    const elem = document.getElementById("theme");
    elem.classList.add("black-theme")
}