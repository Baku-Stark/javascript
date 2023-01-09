import {useState} from 'react'

function Condicional(){
    const [email, setMail] = useState()
    const [userEmail, setUserMail] = useState()
    function send(e){
        e.preventDefault()
        setUserMail(email)
    }
    return(
        <div>
            <h2>Cadastro de e-mail</h2>
            <form>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => setMail(e.target.value)}
                    placeholder="Digite seu e-mail"/>
                    <button onClick={send}>
                        Enviar email
                    </button>
                    {userEmail &&(
                        <div>
                            <p>O e-mail é: {userEmail}</p>
                        </div>
                    )}
            </form>
        </div>
    )
}

export default Condicional