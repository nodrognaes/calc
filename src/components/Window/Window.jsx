import React from 'react'
import './window.css';
import Snake from '../Snake/Snake';

export default function Window({ display, isSnake, reset }) {

  return (
    <div className='windowBorder'> ☘ SPG Instruments <span>SG-89</span>
      {isSnake ? <Snake isSnake={isSnake} reset={reset}/> : <div className='display'>{display}</div>}
    </div>
  )
}
