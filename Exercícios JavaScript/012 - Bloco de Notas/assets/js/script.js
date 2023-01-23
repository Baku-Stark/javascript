const createBTN = document.querySelector(".main_btn")

function create_Note(task, note){
    // Salvando dados no localStorage
    localStorage.setItem(task, JSON.stringify(note))
}

function delete_Note(noteName){
    /*
        ├── Ler o contéudo do localStorage
        ├
        ├── Return:
            └── noteName ->  Nome do dicionário salvo
    */
    // Deletando dados do localStorage
}

function read_Note(){
    /*
        ├── Ler o contéudo do localStorage
    */
}

createBTN.addEventListener('click', (e) => {
    /*
        ├── Função para ativar o CRUD.
        ├
        ├── Return:
            ├── preventDefault() -> Impedir página de recarregar.
            ├── con_Select -> Valor da <textarea> (str)
            ├── task_Select -> Valor do <input type="text"> (str)
            └── qtd_Select -> Valor do <input type="number"> (int)
    */ 
    e.preventDefault()
    let con_Select = document.getElementById('i_conteudo').value
    let task_Select = document.querySelector('#i_obs').value
    let qtd_Select = document.querySelector('#i_qtd')

    if(con_Select === ""){
        window.alert("Preencha o campo de anotação.")
        console.log('\033[1;31m [-][INVALID] Não pode ser inserido... \033[m')

        // Colorir a borda da <textarea de vermelho>
        document.getElementById('i_conteudo').style.border = "1px solid red"

        // Alterar texto no botão
        createBTN.textContent = "Tente novamente"
    }

    else{
        if(parseInt(qtd_Select.value) === 0){
            qtd_Select = "Nenhuma quantidade"

            const noteContent_Dic = {
                "conteudo": con_Select,
                "quantidade": qtd_Select
            }

            create_Note(noteContent_Dic)
        }

        else{
            qtd_Select = parseInt(qtd_Select.value)
            
            const noteContent_Dic = {
                "conteudo": con_Select,
                "quantidade": qtd_Select
            }

            create_Note(task_Select, noteContent_Dic)
            console.log('\033[1;32m [-][VALID] Inserido ao localStorage com sucesso! \033[m')

            // Alterar texto no botão
            createBTN.textContent = "Fazer anotação"
        }
    }
})