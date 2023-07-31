import React, { createContext, useState } from 'react'
import { IAuthProvider, IContext, IUser } from './Types'

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ 
    children 
}: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    async function authenticate(email: string, password: string){

    }

    async function logout(){

    }

    return(
        <AuthContext.Provider
            value={{...user, authenticate, logout}}
        >
            {children}
        </AuthContext.Provider>
    )
}