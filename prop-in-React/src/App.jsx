import React from 'react'
import User from './User'

const App = () => {

  const userData = {
    name:"imad",
    age:23,
    email:"abmohamedimad@gmail.com",
    phone:77
  }

  return (
    <>
    <h1>Hello this is welcom page</h1>
    <User 
    {...userData}
    />
    </>
  )
}

export default App