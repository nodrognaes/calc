import React from 'react'
import './window.css';

export default function Window({ display }) {

  return (
    <div className='windowBorder'> ☘ SPG Industries
      <div className='display'>{display}</div>
    </div>
  )
}
