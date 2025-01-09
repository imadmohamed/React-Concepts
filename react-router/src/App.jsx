import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'
import { User } from './Page/User'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />}/> 
      <Route path='about' element = {<About />}/> 
      <Route path='contact' element = {<Contact />}/> 
      <Route path='user' element = {<User />}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App