import './assets/css/App.css'

// IMPORTANDO [content]
import { Header } from './content/Header'
import { Footer } from './content/Footer'
import { Container } from './components/layouts/Container'

function App() {
  return (
    <>
      <Header/>
      <Container/>
      <Footer/>
    </>
  )
}

export default App
