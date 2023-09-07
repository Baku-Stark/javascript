export interface IUser{
    user?: string
    email?: string
    password?: string
    con_password?: string
    token?: string
}

export interface IContext extends IUser{
    authenticate: (email: string, token: string) => Promise<void>
    Logout: () => void
}

export interface IAuthProvider{
    children: JSX.Element
}