import React, { use, useEffect } from 'react'
// import axios from 'axios';
import axios from "./axios"

function App() {

  // async function apiCall(){
  //   const responce = await fetch('https://joke.deno.dev/type/programming');
  //   const data = await responce.json();
  //   console.log(data);
  // }

  async function apiCall(){
    const responce = await axios.get('/programming');

    console.log(responce.data);
  }
  
useEffect(() =>{
apiCall();
},[])

  return (
    <div>
      <h1>Api Call</h1>
      <button onClick={apiCall}>Api Call</button>
    </div>
  )
}

export default App