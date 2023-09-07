import { useState } from "react"
import { IUser } from "./type_auth"

import styles from '../../assets/CSS/style.module.css'

export function Login(){
    const [account, setAccount] = useState<IUser | null>()

    function handleChange(e:any){
        setAccount({...account, [e.target.name]: e.target.value})
    }

    function submitLogin(e:any){
        e.preventDefault()
        console.log("Logado!")
        console.log(account)
        e.target.reset()
    }

    return(
        <div>
            <form method="POST" onSubmit={submitLogin}>
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
                        type="password"
                        name="password"
                        placeholder="Type your password"
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