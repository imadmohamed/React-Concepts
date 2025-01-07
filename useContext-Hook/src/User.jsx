import React from 'react'

const User = ({theme}) => {

    const textStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white"
    }

  return (
    <div>
        <h1 style={textStyle}>User</h1>
    </div>
  )
}

export default User