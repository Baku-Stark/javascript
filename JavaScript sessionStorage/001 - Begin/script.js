// salvar um dado no sessionStorage (<nome da chave>, <valor>)
sessionStorage.setItem("number", 123)

// resgatar
const n_session = sessionStorage.getItem("number")
console.log(n_session)

// remover itens
sessionStorage.removeItem("number")

// limpar todos os dados
sessionStorage.clear()