import React from 'react'
import {QueryClient, QueryClientProvider, } from 'react-query'
import Test1 from './Test1';


const App = () => {

  const queryClint = new QueryClient();

  return (
    <QueryClientProvider client={queryClint}>
      <Test1/>
    </QueryClientProvider>
      
    
  )
}

export default App