import React from 'react'
import Example from './componets/Navbar'
import Navbar from './componets/Navbar'
import Login from './componets/Login'
import Home from './componets/Home'
import Register from './componets/Register'
import { Link, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>

       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>

    </div>
  )
}