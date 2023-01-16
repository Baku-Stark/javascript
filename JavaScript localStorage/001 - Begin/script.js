localStorage.setItem("name", "Wallace")
// salvar um dado no localStorage (<nome da chave>, <valor>)

// resgatar item
const name = localStorage.getItem("name")
// printar o nome -> "Wallace"
console.log(name)

// resgatando item que não existe
const lastName = localStorage.getItem("lastname")
// printar o último nome -> "null"
console.log(lastName)

if(!lastName){
    console.log("Sem sobrenome!!!")
}

// remover item
localStorage.removeItem("name")

// todo valor na localStorage retorna como `string`
localStorage.setItem("a", 1)
localStorage.setItem("b", 2)
console.log(typeof localStorage.getItem("a"))

// limpar todos os itens
localStorage.clear()

// salvar objeto [UTILIZANDO JSON]
const personObj = {
    name: "Wallace",
    age: 22,
    job: "Full-Stack"
}

localStorage.setItem("person", JSON.stringify(personObj))

// resgatar objetos [UTILIZANDO JSON]
const getPerson = localStorage.getItem("person")
console.log(getPerson)
const objPerson = JSON.parse(getPerson)
console.log(objPerson.name)