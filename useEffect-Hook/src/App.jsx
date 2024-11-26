import React, { useEffect, useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(100)

  useEffect(()=>{
    setNum1(200)
  },[])
  
  
  return (
    <div>
      <h1>{num1}</h1>
      
    </div>
  )
}

export default App