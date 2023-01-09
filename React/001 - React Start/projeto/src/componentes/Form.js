import {useState} from 'react'

function Form(){
    function cadastroUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(senha)
    }
    const [name, setName] = useState()
    const [senha, setSenha] = useState()
    return(
        <div>
            <h1>Testando Formulário:</h1>
            <form onSubmit={cadastroUsuario}>
                <div>
                    <label htmlFor="user">Usuário: </label>
                    <input
                        type="text"
                        id="user"
                        name="user"
                        placeholder="Digite o seu nome"
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="senha">Senha: </label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite sua senha"
                        onChange={(e) => setSenha(e.target.value)}/>
                </div>
                <button>Cadastrar usuário</button>
            </form>
        </div>
    )
}

export default Form