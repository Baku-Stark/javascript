import React from 'react'
import { useContext } from 'react'

/*IMPORT [context > quiz]*/
import { QuizContext } from '../context/quiz'

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext)
    /*
        quizState -> Pega os valores
        dispatch -> Altera os valores
    */
   
  const currentQuestion = quizState.questions[quizState.currentQuestion]
  return (
    <div className="question-content">
      <p>
        Pergunta {quizState.currentQuestion+1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div className="options">
        <p>Opções</p>
      </div>
      <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    </div>
  )
}

export default Questions