import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/nav' element={<Navbar/>} />
    </Routes>
  )
}
export default App