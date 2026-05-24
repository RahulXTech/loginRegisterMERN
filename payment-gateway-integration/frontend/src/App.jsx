import React from 'react'
import Product from './componets/Product'
import data from "./componets/data.js";
import { Routes, Route } from 'react-router-dom';
import PaymentSuccess from './componets/PaymentSuccess.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Product data={data}/>}/>
      <Route path='/paymentSuccess' element={<PaymentSuccess/>}/>
    </Routes>
  )
}
export default App








