import { useState } from 'react';

import HellWorld from '../HelloWorld';
/* <HellWorld /> => Importado */

import CallMeByYourName from '../CallMeByYourName'
/* <CallMeByYourName /> => Importado */

import Foto from '../Foto.js'
/* <Foto /> => Importado */

import Frase from '../Frase'
/* <Frase /> => Importado */

import List from '../List'
/* <List /> => Importado */

import Event from '../Event'
/* <Event /> => Importado */

import Form from '../Form'
/* <Form /> => Importado */

import Condicional from '../Cond'
/* <Condicional /> => Importado */

import ListaArray from '../ListArray'
/* <ListaArray /> => Importado */

import YourName from '../YourName';
/* <YourName /> => Importado */

import Saudacao from '../Saudacao';
/* <Saudacao /> => Importado */

function Home(){
    const nomeApp = "Tony"
    const meusItens = ['React', 'Vue', 'Angular']
    const [nome, setNome] = useState()

    return(
      <div>
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
      </div>
    )
}

export default Home