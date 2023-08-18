import { createContext, useState, useEffect } from 'react'
import { IAuthProvider, IContext, IUser } from './Types'
import { LoginRequest, setUserLocalStorage } from './Util'

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ 
    children 
}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {

    }, [])

    async function authenticate(email: string, password: string){
        const response = await LoginRequest(email, password)
        const payload = {token: response.token, email}
        setUser(payload)
        setUserLocalStorage(payload)
    }

    function logout(){
        setUser(null)
        setUserLocalStorage(null)
    }

    return(
        <AuthContext.Provider
            value={{...user, authenticate, logout}}
        >
            {children}
        </AuthContext.Provider>
    )
}