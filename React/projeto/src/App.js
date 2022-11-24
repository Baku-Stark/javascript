import './App.css';
import HellWorld from './componentes/HelloWorld.js';
/* <HellWorld /> => Importado */

import CallMeByYourName from './componentes/CallMeByYourName.js'
/* <CallMeByYourName /> => Importado */

import Foto from './componentes/Foto.js'
/* <Foto /> => Importado */

function App() {
  const nomeApp = "Tony"

  return (
    <div className="App">
      <HellWorld />
      <CallMeByYourName nome="Wallace"/>
      <CallMeByYourName nome={nomeApp}/>
      <Foto
        nome={nomeApp}
        idade="52"
        profissao="Vingador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;