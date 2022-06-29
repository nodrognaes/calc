import React, { useState } from 'react'

import Window from '../Window/Window';
import './calc.css';

export default function Calc() {
  const [total, setTotal] = useState(0);
  const [display, setDisplay] =useState('0');

  const nums = [{ 'key': 1 }, { 'key': 2 }, { 'key': 3 }, { 'key': 4 }, { 'key': 5 }, { 'key': 6 }, { 'key': 7 }, { 'key': 8 }, { 'key': 9 }]


  const add = (key) => {
    setTotal(total + key);
    setDisplay(total + key);
    console.log(key)
  }
  
  const clear = () => {
    setTotal(0);
    setDisplay('0');
  }
  
  return (
    <div className='calc'>
      <Window display={display}/>
      {nums.map((n) => {
        return (
          <button key={n.key} className='num' onClick={() => add(n.key)}>{n.key}</button>
        )
      })}
      <button onClick={clear}>Clear</button>
    </div>
  )
}

// /*what to keep track of:
// - total
// -display
//   -string
