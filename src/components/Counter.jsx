import React from 'react'

const Counter = ({count,increment,decrement,reset}) => {
  return (
    <div className='flex gap-3'>
        <h1>Counter:{count}</h1>
        <button className='btn py-2 px-3 bg-red-300 rounded-md' onClick={increment}>increase</button>
        <button className='btn py-2 px-3 bg-red-700 rounded-md' onClick={reset}>reset</button>
        <button className='btn py-2 px-3 bg-green-300 rounded-md' onClick={decrement}>dicrease</button>

    </div>
  )
}

export default Counter