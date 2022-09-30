function mensagem(){
    var nomeRcev = document.querySelector("#nome")
    var nome = nomeRcev.value
    
    var res = document.querySelector(".res")
    res.innerHTML = `<p>Seja bem-vindo ao JavaScript, ${nome}</p>`
};