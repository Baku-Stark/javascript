document.querySelector('#adicionar').addEventListener('click', adicionarEventos)
document.querySelector('#remover').addEventListener('click', removerEventos)


function adicionarEventos(){
    let e = document.querySelector('#executar')
    e.addEventListener('click', executar_1)
    e.addEventListener('click', executar_2)
}

function executar_1(){
    let nowHours = new Date() 
    document.querySelector('#titulo_1').textContent = nowHours.getSeconds()
}

function executar_2(){
    let nowHours = new Date() 
    document.querySelector('#titulo_2').textContent = nowHours.getSeconds()
}

function removerEventos(){
    document.querySelector('#executar').removeEventListener('click', executar_2)
}