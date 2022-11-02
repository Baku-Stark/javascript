document.addEventListener('readystatechange', () => {
    if(document.readyState == "complete"){
        document.querySelector('h1').textContent = "Texto Alterado com readystatechange"
    }
})