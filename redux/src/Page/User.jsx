import React from 'react'
import { useSelector } from 'react-redux'

export const User = () => {

  const users = useSelector((state) => state.usersInfo.users)
  console.log(users)

  return (
    <div>
<h1> User</h1>
        
       
        
    </div>
  )
}
