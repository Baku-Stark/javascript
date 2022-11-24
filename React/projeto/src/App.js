import './App.css';
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

function App() {
  const nomeApp = "Tony"

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
    </div>
  );
}

export default App;