import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/nav' element={<Navbar/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  )
}
export default App