/* CSS [main] */ 
import './assets/css/style.css'

/* IMPORT [components > folders] */
import Welcome from './components/Welcome' 

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Quiz de Programação</h1>
      <Welcome />
    </div>
  )
}

export default App
