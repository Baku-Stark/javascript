/* CSS [main] */ 
import './App.css';

/* JavaScript [components > Folders] */ 
import Navbar from './components/navbar.js';

/* JavaScript [templates > Folders] */
import Home from './templates/Home';
import About from './templates/About';
import Pricing from './templates/Pricing';

function App() {
  let components
  switch(window.location.pathname){
    case "/":
      components = <Home/>
      break
    case "/pricing":
      components = <Pricing/>
      break
    case "/about":
      components = <About/>
      break

  }
  return (
    <>
      <Navbar/>
      <div className="container">
        {components}
      </div>
    </>
  );
}

export default App;