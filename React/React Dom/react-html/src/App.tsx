import {Routes, Route} from 'react-router-dom'
import Input from './components/Input';
import Div from './components/Div';

import './App.css'

export default function App() {

  return (
    <>
      <nav style={{marginBottom: "10px"}}>
        <h1>Elements DOM</h1>
        <a href="/input/">INPUT</a>
        <a href="/div/">DIV</a>
      </nav>
      <Routes>
        <Route path={"/input"} element={<Input/>}/>
        <Route path={"/div"} element={<Div/>}/>
      </Routes>
    </>
  );
}