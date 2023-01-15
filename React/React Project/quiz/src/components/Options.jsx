import { useContext } from "react";

/*IMPORT [context > quiz]*/
import { QuizContext } from "../context/quiz";

const Options = ({option, selectOption, answer}) => {
    const [quizState, dispatch] = useContext(QuizContext)
    /*
        quizState -> Pega os valores
        dispatch -> Altera os valores
    */
  return (
    <div className={`options-class 
    ${quizState.answerSelected && option === answer ? 'correct' : ''}
    ${quizState.answerSelected && option !== answer ? 'wrong' : ''}`} onClick={() => selectOption()}>
        <p>{option}</p>
    </div>
  )
}

export default Options