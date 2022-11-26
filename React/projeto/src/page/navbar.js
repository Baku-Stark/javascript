import Home from './Home'
import Empresa from './Empresa'
import Contato from './Contato'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/' element={<Empresa />}/>
                    <Route path='/' element={<Contato />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default NavBar