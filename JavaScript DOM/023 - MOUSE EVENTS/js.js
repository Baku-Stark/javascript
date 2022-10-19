document.querySelector('div').addEventListener('click', () => {
    console.log('Click!')
})

// ===== PRESSIONAR O BOTÃO DO MOUSE =====
document.querySelector('div').addEventListener('mousedown', () => {
    console.log('Mouse Down')
})

document.querySelector('div').addEventListener('mouseup', () => {
    console.log('Mouse Up')
})
// ===== PRESSIONAR O BOTÃO DO MOUSE =====

// ===== MOUSE DENTRO DO ELEMENTO =====
document.querySelector('div').addEventListener('mouseenter', () => {
    console.log('Mouse Enter')
})
// ===== MOUSE DENTRO DO ELEMENTO =====

// ===== MOUSE FORA DO ELEMENTO =====
document.querySelector('div').addEventListener('mouseleave', () => {
    console.log('Mouse Leave')
})
// ===== MOUSE FORA DO ELEMENTO =====

// ===== CLICK DUPLO NO ELEMENTO =====
document.querySelector('div').addEventListener('dblclick', () => {
    console.log('Double Click')
})
// ===== CLICK DUPLO NO ELEMENTO =====

// ===== CLICK COM O BOTÃO DIREITO DO MOUSE =====
document.querySelector('div').addEventListener('contextmenu', () => {
    console.log('Contexto ativado')
})
// ===== CLICK COM O BOTÃO DIREITO DO MOUSE =====