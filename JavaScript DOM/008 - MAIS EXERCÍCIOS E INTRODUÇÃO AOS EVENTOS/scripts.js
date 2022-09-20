let title1 = document.querySelector(".noticia > h1");
let title2 = document.querySelector(".noticia-2 > h1");

document.querySelector("#titulo").innerText = "Novo Título com JS xxx";

function Executar() {
    document.querySelector(".noticia > h1").innerText = "Texto alterado usando uma FUNCTION (Título 1)";
    
    title1.style.color = "blue";
    title2.style.color = "green";

    document.querySelector(".noticia-2 > h1").innerText = "Texto alterado usando uma FUNCTION (Título 2)";
}