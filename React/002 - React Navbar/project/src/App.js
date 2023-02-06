/* CSS [main] */ 
import './App.css';

/* React [Router > npm i react-router-dom]*/
import { Route, Routes } from 'react-router-dom'; 

/* JavaScript [components > Folders] */ 
import Navbar from './components/navbar.js';

/* JavaScript [templates > Folders] */
import Home from './templates/Home';
import About from './templates/About';
import Pricing from './templates/Pricing';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/pricing' element={<Pricing />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;