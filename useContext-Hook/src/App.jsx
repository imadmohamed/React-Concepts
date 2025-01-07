import React, { useState } from 'react'
import Container from './Container'

const App = () => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <div>
      <button onClick={toggleTheme}>toggleTheme</button>
      <h1>App component</h1>
      <Container theme = {theme}/>
    </div>
  )
}

export default App

