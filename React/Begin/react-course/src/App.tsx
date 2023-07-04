import { Routes, Route } from 'react-router-dom';

// IMPORTANDO COMPONENTES PARA O APP
import Titulo from './Titulo'
import Variables from './Variables'
import Props from './Props'
import State from './State'

import { Home } from './router/Home';
import { Sobre } from './router/Sobre';
import { Contato } from './router/Contato';

import './App.css'

function App(){
  return (
    <div>
      <nav>
        <a href="/home">Home</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </nav>
      <div>
        <Routes>
          <Route path='/'/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </div>
      <h1>APP</h1>
      <Titulo/>
      <Variables/>
      <Props cor="cyan" city="New York"/>
      <Props/>
      <State/>
    </div>
  )
}

export default App