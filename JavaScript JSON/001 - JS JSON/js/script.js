const objs = [
    {
        "nome": "Wallace",
        "idade": 22,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": ["programador", "professor"],
            "empresa": "Stark Industries"
        },
        "hobbies": ["Programar", "Escutar música", "Jogar YGO"]
    },
    {
        "nome": "Tony Stark",
        "idade": 52,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": ["vingador", "gênio", "bilionario", "playboy", "filantropo"],
            "empresa": "Stark Industries"
        },
        "hobbies": ["Criar Marks", "Zoar Steve Rogers"]
    }
]

/* Converter objeto em JSON */
const jsonDATA = JSON.stringify(objs)
console.log(jsonDATA)

/* Converter JSON para OBJETO */
const obj_jsonDATA = JSON.parse(jsonDATA)
obj_jsonDATA.map((pessoa) => {
    console.log(pessoa.nome)
    console.log(pessoa.idade)
})