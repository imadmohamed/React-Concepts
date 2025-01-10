import React from 'react'
import { useParams } from 'react-router-dom'

export const UsersName = () => {
    const {username} = useParams()
  return (
    <div>
        <h1>User: {username}</h1>
    </div>
  )
}
