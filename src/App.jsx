import React, { useState } from 'react'
import Counter from './components/Counter'

const App = () => {
  const [count, setcount] = useState(0)

  const increment = ()=>{
     setcount(count +1)
  }

  const reset =()=>{
    setcount(0)
  }

  const decrement =()=>{
    setcount(count - 1)
  }
  return (
    <div>
      
    <Counter count={count} increment={increment} reset={reset} decrement={decrement} />
    </div>
  )
}

export default App