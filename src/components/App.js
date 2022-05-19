import '../styles/App.css';
//components
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Cart from './Cart';

//dependencies
import { Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from 'react';

function App() {
  const[updateCart, setUpdateCart] = useState(false)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([]))
  }, [])

  return (
    <div className="App">
      <Navigation updateCart={updateCart} setUpdateCart={setUpdateCart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product setUpdateCart={setUpdateCart}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
