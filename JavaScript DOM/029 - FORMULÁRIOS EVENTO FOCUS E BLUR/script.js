let usuario = document.querySelector('[name="usuario"]')
let senha = document.querySelector('[name="senha"]')

document.forms.formulario.usuario.addEventListener('focus', () => {
    console.log('usuario')
})

// Form [focus]
usuario.addEventListener('focus', (focus_event) => {
    focus_event.target.classList.add('focus')
})
senha.addEventListener('focus', (focus_event) => {
    focus_event.target.classList.add('focus')
})



// Form [blur]
usuario.addEventListener('blur', (blur_event) => {
    blur_event.target.classList.remove('focus')
})
senha.addEventListener('blur', (blur_event) => {
    blur_event.target.classList.remove('focus')
})