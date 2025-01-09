import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'
import { User } from './Page/User'
import NaveBar from './components/NaveBar'
import { UsersName } from './Page/UsersName'


const App = () => {
  return (
    <BrowserRouter>
    <NaveBar />

    <Routes>
      <Route path='/' element = {<Home />}/> 
      <Route path='about' element = {<About />}/> 
      <Route path='contact' element = {<Contact />}/> 
      <Route path='user' element = {<User />}/> 
      <Route path='username/:username' element = {<UsersName/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App