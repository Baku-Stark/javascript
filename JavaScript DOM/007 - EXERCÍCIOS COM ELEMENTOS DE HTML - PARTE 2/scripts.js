let elemento = document.querySelector('#titulo > i > u');
let elementoH1 = document.querySelector(".noticia > h1");
let elementoH2 = document.querySelector(".noticia-2 > h1");

console.log(elemento)

// --- APENAS O CONTEÚDO
console.log(elementoH1.innerText);
elementoH1.innerText = "Texto alterado em JavaScript -- Usando innerText";

// --- TODO O CONTEÚDO DENTRO DA TAG
console.log(elementoH2.innerHTML);
elementoH2.innerHTML = "Texto alterado em <u>JavaScript</u> - Usando innerHTML"

// --- IMPRIMIR TODA A TAG H1
console.log(elementoH1.outerHTML);
elementoH1.outerHTML = "<p>Adicionando a tag p </p>"
elementoH2.outerHTML = "<p>Adicionando a tag p </p>"