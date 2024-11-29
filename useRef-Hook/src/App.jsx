import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [input, setInput] = useState("")
  
  const inputRef = useRef();
  console.log("getting Render")

  useEffect(() => {
    inputRef.current = input;
  }, [input])

  const display = () => {
    console.log(inputRef.current)
    inputRef.current.focus()
  }
 
  return (
    <div>
      <h1>usman whatsapp data <b>Loading...</b></h1>
      <input 
      type='text'
      value={input}
      onChange={(event) => setInput(event.target.value)}
      />
      <h1>usman imo datas {input}</h1> 
      <h1>usman gmail data pass {inputRef.current}</h1> 
      <button onClick={display}>Show input</button>
    </div>
  )
}

export default App

