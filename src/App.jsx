import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* Add routes here */}
        <Route path='' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/features' element={<Features/>} />
      </Routes>
      
    </div>
  )
}

export default App
