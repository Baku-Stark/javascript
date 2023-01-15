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
  /*
    currentQuestion -> Questão atual
  */ 

  const onSelectOption = (option) => {
    /*
      onSelectOption -> Função para mostrar a escolha de  
                        resposta do usuário.
    */ 
    dispatch({type: "CHECK_ANSWER", payload: {answer: currentQuestion.answer, option}})
  }
  return (
    <div className="question-content">
      <p>
        Pergunta {quizState.currentQuestion+1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option) => (
          <Options option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)}/>
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
      )}
    </div>
  )
}

export default Questions