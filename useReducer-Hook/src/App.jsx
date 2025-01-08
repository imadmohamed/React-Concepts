import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((curr) => curr + 1);
  };

  const degrement = () => {
    setCount((curr) => curr - 1);
  };

  return (
    <div style={{
      display:"flex",
      alignItems:"center"
      
    }}>
      <button onClick={degrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>

    </div>
  )
}

export default App