import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../context/useAuth'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

import styles from './_pages.module.css'

export function SignUp(){
    const [email, setEmail] = useState("")
    const [emailConf, setEmailConf] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const { signup }: any = useAuth()

    const handleSignUp = () => {
        if(!email || !emailConf || !senha){
            setError("Preencha todos os campos")
            return
        }

        else if(email !== emailConf){
            setError("Os e-mails não são iguais")
            return
        }

        const res = signup(email, senha)

        if(res){
            setError(res)
            return
        }

        else{
            alert("Usuário cadastrado com sucesso!")
            navigate('/')
        }
    }

    return(
        <div className={styles.form}>
            <label>CRIE UMA CONTA</label>
            <div className={styles.block}>
                <Input
                    type="email"
                    value={email}
                    onChange={(e: any) => [setEmail(e.target.value), setError("")]}
                    placeholder="Digite seu E-mail"
                />
                <Input
                    type="email"
                    value={emailConf}
                    onChange={(e: any) => [setEmailConf(e.target.value), setError("")]}
                    placeholder="Confirme o seu E-mail"
                />
                <Input
                    type="password"
                    value={senha}
                    onChange={(e: any) => [setSenha(e.target.value), setError("")]}
                    placeholder="Digite sua senha"
                />
                <span className={styles.error_message}>{error}</span>
                {/* ================= */}
                <Button
                    Text="Cadastrar-se"
                    onClick={handleSignUp}
                />
                <span className={styles.sign_in}>
                    Já tem uma conta? <Link to={"/"}>&nbsp;Entre</Link>
                </span>
            </div>
        </div>
    )
}