import React from 'react';
import './snake.css';

export default function Snake ({ reset }){

    return(
        <div className='snakeWindow'>
            <div className='snakeTitle'>SNAKE</div>
            <div className='snakeBtns'>
            <button className='start'>START</button>
            <button className='reset' onClick={reset}>RETURN</button>
            </div>
        </div>
    )

}