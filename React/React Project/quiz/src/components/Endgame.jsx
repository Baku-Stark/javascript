import React from 'react'
import { useContext } from 'react'

/*IMPORT [context > quiz]*/
import { QuizContext } from '../context/quiz'

import WellDone from '../img/welldone.svg'

const Endgame = () => {
  return (
    <div className="game-over">
        <h2>Game Over</h2>
        <p>Pontuação</p>
        <p>Você acertou y de z perguntas!</p>
        <img src={WellDone} alt="Fim do Jogo!" />
        <button>Recomeçar</button>
    </div>
  )
}

export default Endgame