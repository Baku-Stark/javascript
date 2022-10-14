let themeBtn = document.querySelector('button').onclick = () => {
    let elemento = document.querySelector('h1')

    if(elemento.style.backgroundColor == ""){
        elemento.style.cssText = "background-color: #111111; color: #f0f8ff;"
        document.querySelector('#dark_modebtn').textContent = "Light Mode"
    }
    else{
        elemento.style.cssText = "color: #111111;"
        document.querySelector('#dark_modebtn').textContent = "Dark Mode"
    }
}