import React from 'react'
import ReactDOM from 'react-dom/client'

/*IMPORT [context > quiz]*/
import { QuizProvider } from './context/quiz'

/* APP */ 
import App from './App'
import './assets/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
)
