import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import './snake.css';

export default function Snake({ reset }) {
    const [isStarted, setIsStarted] = useState(false);
    const [isEnded, setIsEnded] = useState(false);
    // const [snakePosition, setSnakePosition] = useState({top:0, left:0});
    const [snakeDots, setSnakeDots] = useState([[0, 0]]);
    const [foodCoord, setFoodCoord] = useState({});
    const [direction, setDirection] = useState('RIGHT')

    const randomCoord = () => {
        const randHeight = Math.floor(Math.random() * 130)
        const randWidth = Math.floor(Math.random() * 200);

        setFoodCoord({top:`${randHeight}px`, left:`${randWidth}px`})
    }

    const startGame = () => {
        setIsStarted(true);
        setIsEnded(false);
        randomCoord();
    }

    const moveSnake = () => {
        const body = [...snakeDots];
        let head = body[body.length - 1];

        if (direction === "LEFT") {
            head = [head[0], head[1] - 10]
        };

        if (direction === "DOWN") {
            head = [head[0] + 10, head[1]]
        };

        if (direction === "RIGHT") {
            head = [head[0], head[1] + 10]
        };

        if (direction === "UP") {
            head = [head[0] - 10, head[1]]
        };

        body.push(head);
        body.shift();
        setSnakeDots(body);
    };

    useEffect(() => {
        const handleKeyup = ({ key }) => {
          if (key === 'ArrowUp') {
            console.log('butts');
            setDirection('UP');
          };

          if (key === 'ArrowDown') {
            console.log('butts');
            setDirection('DOWN');
          };

          if (key === 'ArrowLeft') {
            console.log('butts');
            setDirection('LEFT');
          };

          if (key === 'ArrowRight') {
            console.log('RIGHT');
            setDirection('RIGHT');
          };

        };
        window.addEventListener('keyup', handleKeyup);
    
        return () => window.removeEventListener('keyup', handleKeyup);
    }, []);

    const endGame = () => {
        setIsStarted(false);
        setIsEnded(true);
    }

    return (
        <div className='snakeWindow'>
            {!isStarted && !isEnded ? <div className='startScreen'>
                <div className='snakeTitle'>SNAKE</div>
                <div className='snakeBtns'>
                    <button className='start' onClick={startGame}>Start</button>
                    <button className='reset' onClick={reset}>Return</button>
                </div>
            </div>
            : !isEnded ? <div>
                {/* <div className='snakeDot' style={snakePosition}></div> */}
                {snakeDots.map((dot, index) => {
                    const style = { top: `${dot[0]}px`, left: `${dot[1]}px` };
                    return (
                        <div className='snakeDot' key={index} style={style}></div>
                    )
                })}

                <div className='food' style={foodCoord}></div>
                <div className='exitText'>Exit by hitting 'CLEAR'</div>
                <button className='endGame' onClick={endGame}>End</button>
            </div>
            :
            <div className='endScreen'>
                <div className='gameOver'>GAME OVER</div>
                <div className='snakeBtns'>
                    <button className='replay' onClick={startGame}>Replay</button>
                    <button className='reset' onClick={reset}>Return</button>
                </div>
            </div>}
        </div>
    )
};