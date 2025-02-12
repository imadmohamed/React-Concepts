import React from 'react'
import { useQuery } from 'react-query'

const Test1 = () => {
    const {isLoading, data, error} = useQuery('gihubdata', apiCall);

    function apiCall(){
         return fetch('https://api.github.com/repos/imadmohamed/iDart-Startup').then((res)=>res.json())
    }

    if(isLoading){
        return <h1>Loading...</h1>
        
    }

    if(error){
        return <h1>an error occourred {error}</h1>
    }

    console.log(data);

  return (
    <div>
        <h1>{data.full_name}</h1>
        <h1>{data.name}</h1>
        <h1>{data.id}</h1>
        <h1>{data.size}</h1>
    </div>
  )
}

export default Test1