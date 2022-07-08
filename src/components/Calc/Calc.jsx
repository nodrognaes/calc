import React, { useState, useEffect } from 'react'

import Window from '../Window/Window';
import Button from '../Button/Button';
import './calc.css';

export default function Calc() {
  const [display, setDisplay] = useState('0');
  const [isSnake, setIsSnake] = useState(false);

  const reset = () => {
    setIsSnake(false);
    setDisplay('0');
  };

  const handleClick = (key) => {
    if (/^[0123456789+.x*\/)(-]$/.test(key)) {
      setDisplay((prev) => {
        if (prev === '0') {
          return `${key}`;
        };
        return prev + `${key}`;
      });
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
      isSnake ? reset() : setDisplay('0');
    };

    if (key === 'ENTER') {
      setDisplay(eval(display));

      if (display === '96744') {
        setIsSnake(true);
      };
    };
  };

  useEffect(() => {
    const handleKeyup = ({ key }) => {
      if (/^[0123456789+.x*/)(-]$/.test(key)) {
        setDisplay((prev) => {
          if (prev === '0') {
            return `${key}`;
          };
          return prev + `${key}`;
        });
      };
  
      if (key === 'Backspace') {
        setDisplay((prev) => {
          if (prev.length > 1) {
          return prev.slice(0, -1)
        } else {
          return '0';
        }});
      };
  
      if (key === 'Enter') {
        setDisplay(eval(display));

        if (display === '96744') {
          setIsSnake(true);
        };
      };
  
    };
    window.addEventListener('keyup', handleKeyup);

    return () => window.removeEventListener('keyup', handleKeyup);
}, [display, isSnake]);

  return (
    <div className='calc'>
      <Window display={display} isSnake={isSnake} reset={reset}/>
      <Button handleClick={handleClick} />
    </div>
  )
}