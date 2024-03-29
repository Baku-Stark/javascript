import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const userToken = localStorage.getItem("user_token")
        const usersStorage = localStorage.getItem("users_bd")

        if(userToken && usersStorage){
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user: any) => user.email === JSON.parse(userToken).email
            )

            if(hasUser) setUser(hasUser[0])
        }
    }, [])

    function signin(email: any, password: any){
        const usersStorage = JSON.parse(localStorage.getItem("users_bd") || '{}')

        const hasUser = usersStorage?.filter(
            (user: any) => user.email === email
        )

        if(hasUser?.length){
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2)
                localStorage.setItem("user_item", JSON.stringify({email, token}))
                setUser({email, password})
                return
            }

            else{
                return "E-mail ou senha incorretos"
            }
        }

        else{
            return "Usuário não cadastrado"
        }
    }

    function signup(email: any, password: any) {
        const usersStorage = JSON.parse(localStorage.getItem("users_bd") || '{}')

        const hasUser = usersStorage?.filter(
            (user: any) => user.email === email
        )

        if(hasUser?.length){
            return "Já tem uma conta com esse E-mail"
        }

        let newUser

        if(usersStorage){
            newUser = [...usersStorage, {email, password}]
        }

        else{
            newUser = [{ email, password }]
        }

        localStorage.setItem("users_bd", JSON.stringify(newUser))

        return
    }

    const signout = () => {
        setUser({})
        localStorage.removeItem("user_item")
    }

    return(
        <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
            {children}
        </AuthContext.Provider>
    )
}