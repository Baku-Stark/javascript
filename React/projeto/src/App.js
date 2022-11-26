import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
/* <CSS da página */

import Home from './componentes/pages/Home'
import Empresa from './componentes/pages/Empresa'
import Contato from './componentes/pages/Contato'
/* pages => Importado */


function App(){
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Empresa</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/a' element={<Home />}/>
          <Route path='/b' element={<Empresa />}/>
          <Route path='/c' element={<Contato />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;