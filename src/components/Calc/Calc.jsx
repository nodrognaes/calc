import React, { useState, useEffect } from 'react'

import Window from '../Window/Window';
import Button from '../Button/Button';
import './calc.css';

export default function Calc() {

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
      setDisplay('0');
    };

    if (key === 'ENTER') {
      setDisplay(eval(display));
    };

  };

  const [display, setDisplay] = useState('0');

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
      };
  
    };
    window.addEventListener('keyup', handleKeyup);

    return () => window.removeEventListener('keyup', handleKeyup);
}, [display]);

  return (
    <div className='calc'>
      <Window display={display} />
      <Button handleClick={handleClick} />
    </div>
  )
}