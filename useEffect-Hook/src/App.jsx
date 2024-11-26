import React, { useEffect, useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(100)

  useEffect(()=>{
    setNum1(2003)
  },[])

  console.log("num1", num1)
  
  
  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={()=>setNum1((currValue)=> currValue+1)}>Add</button>
    </div>
  )
}

export default App