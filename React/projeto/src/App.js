import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Wallace"
  const newName = name.toUpperCase()

  const idade = 22
  return (
    <div className="App">
      <h2 className="h2-text">Olá</h2>
      <p>Nome: {newName}</p>
      <p>Idade: {idade} anos</p>
    </div>
  );
}

export default App;
