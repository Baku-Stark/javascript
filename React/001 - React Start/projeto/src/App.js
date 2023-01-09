import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
/* <CSS da página */

import Home from './componentes/pages/Home'
import Empresa from './componentes/pages/Empresa'
import Contato from './componentes/pages/Contato'
/* pages => Importado */

import Header from './componentes/Navbar';
/* navbar <Header/> => Importado */


function App(){
  return (
    <div className="App">
      <Header />
      <Home />
      <Empresa />
      <Contato />
    </div>
  );
}

export default App;