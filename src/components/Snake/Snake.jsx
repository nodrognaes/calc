import React from 'react';
import './snake.css';

export default function Snake({ reset, isEnded, isStarted, foodCoord, startGame, snakeDots }) {
    

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
                    {snakeDots.map((dot, index) => {
                        const style = { top: `${dot[0]}px`, left: `${dot[1]}px` };
                        return (
                            <div className='snakeDot' key={index} style={style}></div>
                        )
                    })}

                    <div className='food' style={{top: `${foodCoord[0]}px`, left: `${foodCoord[1]}px`}}></div>
                    <div className='exitText'>'CLEAR' TO EXIT</div>
                </div>
                    :
                    <div className='endScreen'>
                        <div className='gameOver'>GAME OVER</div>
                        <div className='score'>your score: {snakeDots.length}</div>
                        <div className='snakeBtns'>
                            <button className='replay' onClick={startGame}>Replay</button>
                            <button className='reset' onClick={reset}>Return</button>
                        </div>
                    </div>}
        </div>
    )
};