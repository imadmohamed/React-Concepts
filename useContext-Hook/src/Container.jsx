import React from 'react'
import Users from './Users'

const Container = ({theme}) => {
  return (
    <div>
        <h1>container</h1>
        <Users theme={theme} />
    </div>
  )
}

export default Container