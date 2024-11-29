import React, { useRef, useState } from 'react'

const App = () => {

  const [input, setInput] = useState("")
  
  const inputRef = useRef();
  console.log("getting Render")

  const display = () => {
    console.log(inputRef.current.value)
  }

  return (
    <div>
      <h1>Input</h1>
      <input 
      ref={inputRef}
      type='text'
      // value={input}
      // onChange={(event) => setInput(event.target.value)}
      />
      <h1>My name is {inputRef.current?.value}</h1> 
      <button onClick={display}>Show input</button>
    </div>
  )
}

export default App

