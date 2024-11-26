import React, { useEffect, useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(100)

  useEffect(()=>{
    
  },[100])
  
  
  return (
    <div>
      <h1>{num1}</h1>
      <h2>dsdds</h2>
    </div>
  )
}

export default App