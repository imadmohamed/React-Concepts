// import React, { useState } from 'react'


// const App = () => {

//   const [num, setNum] = useState(1)

//  let x = 1;

//  const handleChange = () => {
//     // x = x+1;
//     // console.log("x: ",x)
//     setNum(num + 1);
    
//  };
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={handleChange}>Add</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(1)

  const handleChange = ()=> {
    setNum((crrValue)=>{
     return crrValue +1
    })
  }

  return (
    <div>  
    <h1>{num}</h1>
    <button onClick={handleChange}>Add</button>
    </div>
  )
}

export default App