import React from 'react';
import './button.css';

export default function Button({handleClick}) {
  const keys = [  { 'key': '(', 'color': 'blk' }, { 'key': ')', 'color': 'blk' }, { 'key': 'DEL', 'color': 'blk' }, { 'key': 'CLEAR', 'color': 'blk' }, { 'key': 7, 'color': 'white' }, { 'key': 8, 'color': 'white' }, { 'key': 9, 'color': 'white' }, { 'key': '/', 'color': 'blue' }, { 'key': 4, 'color': 'white' }, { 'key': 5, 'color': 'white' }, { 'key': 6, 'color': 'white' }, { 'key': '*', 'color': 'blue' }, { 'key': 1, 'color': 'white' }, { 'key': 2, 'color': 'white' }, { 'key': 3, 'color': 'white' }, { 'key': '-', 'color': 'blue' }, { 'key': 0,
   'color': 'white' }, { 'key': '.', 'color': 'white' }, { 'key': 'ENTER', 'color': 'blue' }, { 'key': '+', 'color': 'blue' }];

  return (
    <div className='btns'>
      {
        keys.map((n) => {
          return (
            <button key={n.key} className={n.color} onClick={() => handleClick(n.key)}>{n.key}</button>
          )
        })
      }
    </div>
  )
}
