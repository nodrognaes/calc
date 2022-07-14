import React, { useState, useEffect } from 'react'

import Window from '../Window/Window';
import Button from '../Button/Button';
import './calc.css';

export default function Calc() {
  const [display, setDisplay] = useState('0');
  const [isSnake, setIsSnake] = useState(false);

  //for snake
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [foodCoord, setFoodCoord] = useState({});
  const [snakeDots, setSnakeDots] = useState([[0, 0]]);
  const [direction, setDirection] = useState('RIGHT');

  const reset = () => {
    setIsSnake(false);
    setDisplay('0');
    setSnakeDots([[0, 0]]);
    setDirection('RIGHT');
  };

  //for snake
  const randomCoord = () => {
    const randHeight = Math.floor(Math.random() * 130)
    const randWidth = Math.floor(Math.random() * 200);

    setFoodCoord({ top: `${randHeight}px`, left: `${randWidth}px` })
}

const startGame = () => {
    setIsStarted(true);
    setIsEnded(false);
    randomCoord();
}

const endGame = () => {
    setIsStarted(false);
    setIsEnded(true);
    setSnakeDots([[0, 0]]);
    setDirection('RIGHT');
}

const moveSnake = (dir) => {
  const body = [...snakeDots];
  let head = body[body.length - 1];

  if (dir === "LEFT") {
      head = [head[0], head[1] - 10];
      setDirection('LEFT');
  };

  if (dir === "DOWN") {
      head = [head[0] + 10, head[1]]
  };

  if (dir === "RIGHT") {
      head = [head[0], head[1] + 10]
  };

  if (dir === "UP") {
      head = [head[0] - 10, head[1]]
  };

  body.push(head);
  body.shift();
  setSnakeDots(body);

  if (head[0] < 0 || head[0] > 130 || head[1] < 0 || head[1] > 200) {
      endGame();
  }
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

    if (isSnake) {
      if (key === '⇦') {
        console.log('butts');
      };

      if (key === '⇧') {
        console.log('butts');
      };

      if (key === '⇨') {
        console.log('butts');
      };

      if (key === '⇩') {
        moveSnake('DOWN');
      };
    }
  };

  useEffect(() => {
    const handleKeydown = ({ key }) => {
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

      if (isSnake) {
        if (key === 'ArrowUp') {
          moveSnake('UP');
          setDirection('UP');
          console.log(direction);
      };

      if (key === 'ArrowDown') {
          moveSnake('DOWN');
          setDirection('DOWN');
          console.log(direction);
      };

      if (key === 'ArrowLeft') {
          moveSnake('LEFT');
          // setDirection('LEFT');
          console.log(direction);
      };

      if (key === 'ArrowRight') {
          moveSnake('RIGHT');
          setDirection('RIGHT');
          console.log(direction);
      };

      if (key === 'Enter') {
          startGame();
      };

      if (key === 'Backspace') {
          reset();
      };
      }
  
    };
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
}, [display, isSnake, direction, snakeDots]);

  return (
    <div className='calc'>
      <Window display={display} 
              isSnake={isSnake} 
              reset={reset}
              isStarted={isStarted}
              isEnded={isEnded}
              foodCoord={foodCoord}
              startGame={startGame}
              endGame={endGame}
              snakeDots={snakeDots}
              />
      <Button handleClick={handleClick} />
    </div>
  )
}