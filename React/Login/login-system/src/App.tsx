import { Fragment } from "react"
import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { SignUp } from "./pages/Sign_up"
import { SignIn } from "./pages/Sign_in"
import { AuthProvider } from "./context/Auth"
import { useAuth } from "./context/useAuth"

const Private = ({Item}: any) => {
  const { signed }: any = useAuth();
  return signed > 0 ? <Item/> : <SignIn/>
}

export function App(){
  return(
    <>
      <AuthProvider>  
        <Fragment>
          <Routes>
            <Route path={"/"} element={<Private Item={Home}/>}></Route>
            <Route path={"/sign_in"} element={<SignIn/>}></Route>
            <Route path={"/sign_up"} element={<SignUp/>}></Route>
          </Routes>
        </Fragment>
      </AuthProvider>
    </>
  )
}