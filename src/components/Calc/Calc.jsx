import React, { useState, useEffect } from "react";

import Window from "../Window/Window";
import Button from "../Button/Button";
import "./calc.css";

export default function Calc() {
  const [display, setDisplay] = useState("0");
  const [isSnake, setIsSnake] = useState(false);
  const [calculated, setCalculated] = useState(false);

  //for snake
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [foodCoord, setFoodCoord] = useState([]);
  const [snakeDots, setSnakeDots] = useState([[0, 0]]);
  const [direction, setDirection] = useState("RIGHT");
  const [speed, setSpeed] = useState(550);

  //for snake
  const randomCoord = () => {
    let min = 1;
    let maxY = 200;
    let maxX = 130;

    let x = Math.floor((Math.random() * (maxX - min + 1) + min) / 10) * 10;
    let y = Math.floor((Math.random() * (maxY - min + 1) + min) / 10) * 10;

    setFoodCoord([x, y]);
  };

  const moveSnake = (dir) => {
    const snakeBody = [...snakeDots];
    let head = snakeBody[snakeBody.length - 1];

    if (dir === "LEFT") {
      head = [head[0], head[1] - 10];
    }

    if (dir === "DOWN") {
      head = [head[0] + 10, head[1]];
    }

    if (dir === "RIGHT") {
      head = [head[0], head[1] + 10];
    }

    if (dir === "UP") {
      head = [head[0] - 10, head[1]];
    }

    snakeBody.push(head);
    snakeBody.shift();
    setSnakeDots(snakeBody);

    if (head[0] < 0 || head[0] > 130 || head[1] < 0 || head[1] > 200) {
      endGame();
    }
  };

  const grow = () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([]);
    setSnakeDots(newSnake);
  };

  let head = snakeDots[snakeDots.length - 1];
  if (head[0] === foodCoord[0] && head[1] === foodCoord[1]) {
    grow();
    randomCoord();
    setSpeed((prev) => prev - 10);
  }

  const hitSelf = () => {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        endGame();
      }
    });
  };

  const startGame = () => {
    setIsStarted(true);
    setIsEnded(false);
    setSnakeDots([[0, 0]]);
    randomCoord();
    setSpeed(500);
  };

  const endGame = () => {
    setIsStarted(false);
    setIsEnded(true);
    setDirection("RIGHT");
  };

  const reset = () => {
    setIsSnake(false);
    setDisplay("0");
    setSnakeDots([[0, 0]]);
    setDirection("RIGHT");
    setIsEnded(false);
    setIsStarted(false);
  };

  const handleClick = (key) => {
    if (/^[0123456789+.x*\/)(-]$/.test(key)) {
      if (calculated) {
        if (/^[0123456789]$/.test(key)) {
          setCalculated(false);
          setDisplay(`${key}`);
        } else {
          setCalculated(false);
          setDisplay((prev) => {
            if (prev === "0") {
              return `${key}`;
            }
            return prev + `${key}`;
          });
        }
      } else {
        setDisplay((prev) => {
          if (prev === "0") {
            return `${key}`;
          }
          return prev + `${key}`;
        });
      }
    }

    if (key === "DEL") {
      setDisplay((prev) => {
        if (prev.length > 1) {
          return prev.slice(0, -1);
        } else {
          return "0";
        }
      });
    }

    if (key === "CLEAR") {
      isSnake ? reset() : setDisplay("0");
    }

    if (key === "ENTER") {
      setDisplay(eval(display));
      setCalculated(true);

      if (display === "96744") {
        setIsSnake(true);
      }
    }

    if (isSnake) {
      if (key === "⇦") {
        moveSnake("LEFT");
        setDirection("LEFT");
      }

      if (key === "⇧") {
        moveSnake("UP");
        setDirection("UP");
      }

      if (key === "⇨") {
        moveSnake("RIGHT");
        setDirection("RIGHT");
      }

      if (key === "⇩") {
        moveSnake("DOWN");
        setDirection("DOWN");
      }
    }
  };

  const handleKeydown = ({ key }) => {
    if (/^[0123456789+.x*/)(-]$/.test(key)) {
      if (calculated) {
        if (/^[0123456789]$/.test(key)) {
          setCalculated(false);
          setDisplay(`${key}`);
        } else {
          setCalculated(false);
          setDisplay((prev) => {
            if (prev === "0") {
              return `${key}`;
            }
            return prev + `${key}`;
          });
        }
      } else {
        setDisplay((prev) => {
          if (prev === "0") {
            return `${key}`;
          }
          return prev + `${key}`;
        });
      }
    }

    if (key === "Backspace") {
      setDisplay((prev) => {
        if (prev.length > 1) {
          return prev.slice(0, -1);
        } else {
          return "0";
        }
      });
    }

    if (key === "Enter") {
      setDisplay(eval(display));
      setCalculated(true);

      if (display === "96744") {
        setIsSnake(true);
      }

      if (isSnake && !isStarted && !isEnded) {
        startGame();
      }
    }

    if (isSnake && isStarted) {
      if (key === "ArrowUp") {
        moveSnake("UP");
        setDirection("UP");
      }

      if (key === "ArrowDown") {
        moveSnake("DOWN");
        setDirection("DOWN");
      }

      if (key === "ArrowLeft") {
        moveSnake("LEFT");
        setDirection("LEFT");
      }

      if (key === "ArrowRight") {
        moveSnake("RIGHT");
        setDirection("RIGHT");
      }

      if (key === "Backspace") {
        reset();
      }
    }

    if (isEnded) {
      if (key === "Enter") {
        startGame();
      }

      if (key === "Backspace") {
        reset();
      }
    }
  };

  const def = (e) => {
    if (isSnake && 
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", def);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", def);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [
    display,
    isSnake,
    direction,
    snakeDots,
    moveSnake,
    isEnded,
    startGame,
    isStarted,
    foodCoord,
    handleKeydown,
  ]);

  useEffect(() => {
    if (isStarted) {
      const startMove = setInterval(() => moveSnake(direction), speed);
      hitSelf();

      return () => clearInterval(startMove);
    }
  }, [foodCoord, snakeDots, isStarted, direction, moveSnake, speed, hitSelf]);

  return (
    <div className="calc">
      <Window
        display={display}
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
  );
}
