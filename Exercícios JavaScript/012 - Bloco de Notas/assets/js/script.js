// ├── createBTN -> Seletor do <button> do formulário
// ├── tbodyTable -> Seletor do <tbody> da tabela
const createBTN = document.querySelector(".main_btn")
const tbodyTable = document.querySelector('.body-table')

function create_Note(task_id, note){
    /*
        ├── Salvando dados no localStorage.
        ├
        ├── Args:
            ├── task_id -> ID da lista;
            └── note -> Anotação do usuário.
    */
    localStorage.setItem(task_id, JSON.stringify(note))
}

function delete_Note(task_id){
    /*
        ├── Deletando dados do localStorage.
        ├
        ├── Args:
            └── task_id -> ID da anotação.
    */
    localStorage.remove(task_id)
}

function read_Note(){
    /*
        ├── Ler o contéudo do localStorage.
    */
    console.log('Função ativada!!!')
}

const newRoleTable = (task_id, note, qtd_Select) => {
    /*
        ├── Criar uma nova linha na tabela.
        ├
        ├── Args:
            ├── task_id -> ID selecionado pelo usuário;
            ├── note -> Anotação principal
            └── qtd_Select -> Quantidade
        ├
        ├── Return:
            ├── tbodyTable -> Seletor do <tbody> da tabela
            ├── content_TR -> Criar um elemento <tr>
                ├── content_TD_id -> ID da anotação
    */

    const content_TR = document.createElement('tr')
    
    // ├── ID
    const content_TD_id = document.createElement('td')
    content_TD.textContent = task_id

    // ├── Note
    const content_TD_note = document.createElement('td')

    content_TD_note.textContent = note
    // ├── QTD
    const content_TD_qtd = document.createElement('td')
    content_TD_qtd.textContent = qtd_Select

    // ├── Button
    const content_TD_button = document.createElement('td')
    const delete_button = document.createElement('button')
    const icon_trash = document.createElement('i')
    icon_trash.classList.add('bi')
    icon_trash.classList.add('bi-trash-fill')
    delete_button.textContent = icon_trash
    content_TD_button.textContent = delete_button

    content_TR.appendChild(content_TD_id)
    content_TR.appendChild(content_TD_note)
    content_TR.appendChild(content_TD_qtd)
    content_TR.appendChild(content_TD_button)

    tbodyTable.appendChild(content_TR)
}


createBTN.addEventListener('click', (e) => {
    /*
        ├── Função para adicionar conteúdo ao localStorage.
        ├
        ├── Return:
            ├── preventDefault() -> Impedir página de recarregar.
            ├── con_Select -> Valor da <textarea> (str)
            ├── taskID_Select -> Valor do <input type="text"> (str)
            └── qtd_Select -> Valor do <input type="number"> (int)
    */
    e.preventDefault()
    let con_Select = document.getElementById('i_conteudo').value
    let taskID_Select = document.querySelector('#i_taskID').value
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
            newRoleTable(taskID_Select, con_Select, qtd_Select)
        }

        else{
            qtd_Select = parseInt(qtd_Select.value)
            
            const noteContent_Dic = {
                "conteudo": con_Select,
                "quantidade": qtd_Select
            }

            create_Note(taskID_Select, noteContent_Dic)
            console.log('\033[1;32m [-][VALID] Inserido ao localStorage com sucesso! \033[m')
            newRoleTable(taskID_Select, con_Select, qtd_Select)

            // Alterar texto no botão
            createBTN.textContent = "Fazer anotação"
        }
    }
})

// Ler notas do localStorage.
read_Note()
