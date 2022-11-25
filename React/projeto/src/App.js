import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './page/Home';
import Empresa from './page/Empresa';
import Contato from './page/Contato';

import HellWorld from './componentes/HelloWorld.js';
/* <HellWorld /> => Importado */

import CallMeByYourName from './componentes/CallMeByYourName.js'
/* <CallMeByYourName /> => Importado */

import Foto from './componentes/Foto.js'
/* <Foto /> => Importado */

import Frase from './componentes/Frase'
/* <Frase /> => Importado */

import List from './componentes/List'
/* <List /> => Importado */

import Event from './componentes/Event'
/* <Event /> => Importado */

import Form from './componentes/Form'
/* <Form /> => Importado */

import Condicional from './componentes/Cond'
/* <Condicional /> => Importado */

import ListaArray from './componentes/ListArray'
/* <ListaArray /> => Importado */

import YourName from './componentes/YourName';
/* <YourName /> => Importado */

import Saudacao from './componentes/Saudacao';
/* <Saudacao /> => Importado */

function App() {
  const nomeApp = "Tony"
  const meusItens = ['React', 'Vue', 'Angular']
  const [nome, setNome] = useState()
  return (
    <div className="App">
      <HellWorld />
      <Frase />
      <CallMeByYourName nome="Wallace"/>
      <CallMeByYourName nome={nomeApp}/>
      <Foto
        nome={nomeApp}
        idade="52"
        profissao="Vingador"
        foto="https://via.placeholder.com/150"
      />
      <List />
      <Event/>
      <Form />
      <h1>Renderização Condicional</h1>
      <Condicional/>
      <h1>Lista de coisas boas</h1>
      <ListaArray itens={meusItens}/>
      <ListaArray itens=''/>
      <h1>Curso React: State Lift - #14</h1>
      <YourName setNome={setNome}/>
      <Saudacao nome={nome}/>
      <h1>Curso React: Implementando o React Router - #15</h1>
      <Router>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/Home">
            <Home/>
          </Route>
          <Route path="/empresa">
            <Empresa/>
          </Route>
          <Route path="/contato">
            <Contato/>
          </Route>
        </Switch>
      </Router>
  </div>
  );
}

export default App;