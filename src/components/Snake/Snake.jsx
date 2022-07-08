import React, { useState } from 'react';
import './snake.css';

export default function Snake({ reset }) {
    const [isStarted, setIsStarted] = useState(false);

    return (
        <div className='snakeWindow'>
            {isStarted ? <div className='startScreen'>
                <div className='snakeTitle'>SNAKE</div>
                <div className='snakeBtns'>
                    <button className='start'>START</button>
                    <button className='reset' onClick={reset}>RETURN</button>
                </div>
            </div>
            :
            <div>
                <div className='snakeDot' style={{top:0, left:0}}></div>
                <div className='snakeDot' style={{top:0, left:'10px'}}></div>
                <div className='snakeDot' style={{top:0, left:'20px'}}></div>
                <div className='food' style={{top:0, left:'40px'}}></div>
            </div>}
        </div>
    )

}