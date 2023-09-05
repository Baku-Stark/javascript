import { Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/AuthProvider/Index'
import { ProtectedLayout } from './components/Index_Components'
import { Login } from './components/Login/Index_Login'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path={"/profile"} element={
          <ProtectedLayout>
            <h2>Olá esse é o componente profile!</h2>
          </ProtectedLayout>
        }></Route>

        <Route path={"/login"} element={<Login/>}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
