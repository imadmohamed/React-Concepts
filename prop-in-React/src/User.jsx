import React from 'react'

const User = ({name,phone,age,email}) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>Phone Number: {phone}</h2>
        <h3>Age: {age}</h3>
        <h4>Email: {email}</h4>
    </div>
  )
}

export default User