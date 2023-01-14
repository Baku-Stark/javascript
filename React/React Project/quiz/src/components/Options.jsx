import { useContext } from "react";

/*IMPORT [context > quiz]*/
import { QuizContext } from "../context/quiz";

const Options = ({option}) => {
    const [quizState, dispatch] = useContext(QuizContext)
    /*
        quizState -> Pega os valores
        dispatch -> Altera os valores
    */
  return (
    <div className="options-class">
        <p>{option}</p>
    </div>
  )
}

export default Options