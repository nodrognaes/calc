import React from 'react'

export default function Button({handleClick}) {
  const keys = [{ 'key': 0 }, { 'key': 1 }, { 'key': 2 }, { 'key': 3 }, { 'key': 4 }, { 'key': 5 }, { 'key': 6 }, { 'key': 7 }, { 'key': 8 }, { 'key': 9 }, { 'key': '.' }, { 'key': '+' }, { 'key': '-' }, { 'key': '/' }, { 'key': '*' }, { 'key': '(' }, { 'key': ')' }, { 'key': 'ENTER' }, { 'key': 'CLEAR' }, { 'key': 'DEL' }];

  return (
    <div>
      {
        keys.map((n) => {
          return (
            <button key={n.key} className='keys' onClick={() => handleClick(n.key)}>{n.key}</button>
          )
        })
      }
    </div>
  )
}
