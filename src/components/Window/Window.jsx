import React from 'react'
import './window.css';

export default function Window({ display }) {

  return (
    <div className='windowBorder'> ☘ SPG Instruments <span>SG-89</span>
      <div className='display'>{display}</div>
    </div>
  )
}
