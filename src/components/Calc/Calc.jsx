import React, { useState } from 'react'

import Window from '../Window/Window';
import Button from '../Button/Button';
import './calc.css';

export default function Calc() {
  const [display, setDisplay] = useState('0');

  const handleClick = (key) => {
    if (/^[0123456789+.x*\/)(-]$/.test(key)) {
      setDisplay((prev) => {
        if (prev === '0') {
          return `${key}`;
        };
        return prev + `${key}`;
      });
      console.log(display)
    };

    if (key === 'DEL') {
      setDisplay((prev) => {
        if (prev.length > 1) {
        return prev.slice(0, -1)
      } else {
        return '0';
      }});
    };

    if (key === 'CLEAR') {
      setDisplay('0');
    };

    if (key === 'ENTER') {
      setDisplay(eval(display));
    };

  };

  return (
    <div className='calc'>
      <Window display={display} />
      <Button handleClick={handleClick} />
    </div>
  )
}

// /*what to keep track of:
// - total
// -display
//   -string
