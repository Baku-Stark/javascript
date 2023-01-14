import { useContext, useEffect } from 'react'

/* CSS [main] */ 
import './assets/css/style.css'

/*IMPORT [context > quiz]*/
import { QuizContext } from './context/quiz'

/* IMPORT [components > Content] */
import Welcome from './components/Welcome' 
import Question from './components/Question'
import Endgame from './components/Endgame'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)
    /*
        quizState -> Pega os valores
        dispatch -> Altera os valores
    */
  
  useEffect(() => {
    // embaralhar as perguntas
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])
  return (
    <div className="App">
      <h1 className="main-title">Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <Endgame />}
    </div>
  )
}

export default App
