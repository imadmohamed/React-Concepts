import React, { useEffect, useState } from 'react'

const App = () => {

  const [first, setFirst] = useState(1)
  const [second, setSecont] = useState(100)

const getData = () => {
  console.log("data loding")
}

useEffect(() =>{
getData();
},[]);

useEffect(()=>{
  console.log("First value changed")
},[first])

  return (
    <div>
      <h1>First: {first}</h1>
      <h1>Second: {second}</h1>
      <button onClick={()=> setFirst((curr) => curr +1)}>Add First
      </button>
      <button onClick={()=> setSecont((curr)=> curr + 1)}>Add Second</button>
    </div>
  )
}

export default App