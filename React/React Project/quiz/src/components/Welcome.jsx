/* HOOK REACT*/
import { useContext } from 'react'

/*IMPORT [context > quiz]*/
import { QuizContext } from '../context/quiz'

/*IMAGE [SVG]*/ 
import Quiz from '../img/quiz.svg'

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    /*
        quizState -> Pega os valores
        dispatch -> Altera os valores
    */
    return (
        <div className="welcome-content">
            <h2>Seja bem-vindo</h2>
            <p>
                Clique no botão abaixo para começar:
            </p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
                Iniciar
            </button>
            <img src={Quiz} alt="Início do Quiz" />
        </div>
    )
}

export default Welcome