import React from 'react'
import { useContext } from 'react'

/*IMPORT [context > quiz]*/
import { QuizContext } from '../context/quiz'

/* IMPORT [components > Content] */
import Options from './Options'

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
      <div className="options-container">
        {currentQuestion.options.map((option) => (
          <Options option={option} key={option}/>
        ))}
      </div>
      <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    </div>
  )
}

export default Questions