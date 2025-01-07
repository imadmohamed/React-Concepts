import React, { createContext, useState } from 'react'
import Container from './Container'

export const ThemeContext = createContext();

const App = () => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider 
    value={{
      theme:theme, //theme
      }}>
      <button onClick={toggleTheme}>toggleTheme</button>
      <h1>App component</h1>
      <Container/>
    </ThemeContext.Provider>
  )
}

export default App

