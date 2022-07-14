import React from 'react'
import './window.css';
import Snake from '../Snake/Snake';

export default function Window({ display, isSnake, reset, isEnded, isStarted, foodCoord, startGame, endGame, snakeDots }) {

  return (
    <div className='windowBorder'> ☘ SPG Instruments <span>SG-89</span>
      {isSnake ? <Snake isSnake={isSnake} display={display} 
              reset={reset}
              isStarted={isStarted}
              isEnded={isEnded}
              foodCoord={foodCoord}
              startGame={startGame}
              endGame={endGame}
              snakeDots={snakeDots}/> 
              : 
              <div className='display'>{display}</div>}
    </div>
  )
}
