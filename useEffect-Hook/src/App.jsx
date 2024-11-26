import React, { useEffect, useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(100)

  useEffect(()=>{
    setNum1(2003)
  },[])
  
  
  return (
    <div>
      <h1>{num1}</h1>
      
    </div>
  )
}

export default App