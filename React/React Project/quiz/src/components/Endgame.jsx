import React from 'react'
import { useContext } from 'react'

/*IMPORT [context > quiz]*/
import { QuizContext } from '../context/quiz'

import WellDone from '../img/welldone.svg'

const Endgame = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    /*
        quizState -> Pega os valores
        dispatch -> Altera os valores
    */
  return (
    <div className="game-over">
        <h2>Fim de jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>
            Você acertou {quizState.score} de {quizState.questions.length} perguntas!
        </p>
        <img src={WellDone} alt="Fim do Jogo!" />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Recomeçar</button>
    </div>
  )
}

export default Endgame