let tarefa = document.querySelector('[name="tarefa"]')
let dia = document.querySelector('[name="duracao"]')

// Form [change]
tarefa.addEventListener('change', () => {
    console.log('alterado [tarefa]')
})
dia.addEventListener('change', () => {
    console.log('alterado [duração]')
})

// Form [input]
tarefa.addEventListener('input', () => {
    console.log('alterado [tarefa]')
})
dia.addEventListener('input', () => {
    console.log('alterado [duração]')
})

// Form [cut]
tarefa.addEventListener('cut', () => {
    console.log('cortado [tarefa]')
})
dia.addEventListener('cut', () => {
    console.log('cortado [duração]')
})

// Form [copy]
tarefa.addEventListener('copy', () => {
    console.log('copiado [tarefa]')
})
dia.addEventListener('copy', () => {
    console.log('copiado [duração]')
})

// Form [paste]
tarefa.addEventListener('paste', () => {
    console.log('colado [tarefa]')
})
dia.addEventListener('paste', () => {
    console.log('colado [duração]')
})


function paste(){
    window.alert("Você não pode colar")
}