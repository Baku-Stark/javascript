import { useState } from "react"
import { IUser } from "./type_auth"

import styles from '../../assets/CSS/style.module.css'

export function Register(){
    const [account, setAccount] = useState<IUser | null>()

    function handleChange(e:any){
        setAccount({...account, [e.target.name]: e.target.value})
    }

    function submitRegister(e:any){
        e.preventDefault()
        if(account?.password == account?.con_password){
            console.log("Registro feito com sucesso!")
            console.log(account)
            e.target.reset()
        }

        else{
            console.error("Error")
        }
    }

    return(
        <div>
            <form method="POST" onSubmit={submitRegister}>
                <div className={styles.divider_form}>
                    <input
                        type="text"
                        name="user"
                        placeholder="Type your username"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.divider_form}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Type your emaill address"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.divider_form}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Type your password"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.divider_form}>
                    <input
                        type="password"
                        name="con_password"
                        placeholder="Confirm your password"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.divider_form}>
                    <input type="submit" value="Entrar" />
                </div>
            </form>
        </div>
    )
}